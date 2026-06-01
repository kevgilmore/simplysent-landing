/**
 * Marketing attribution: capture tracking params on the landing page, persist
 * them in a 30-day cookie, and forward them to app.simplysent.co on every link.
 *
 * Flow:
 *  - captureAttribution() runs once on load. If the URL carries any tracked
 *    params it overwrites the cookie (last-touch) and resets the 30-day clock.
 *  - appUrl(path) builds an app.simplysent.co URL with the stored params
 *    appended, falling back to the live URL params if the cookie isn't set yet.
 */

// Params we capture from the landing URL and forward to the app.
const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "code",
  "fbclid", // Meta click id
  "gclid", // Google click id
] as const;

const COOKIE_NAME = "ss_attribution";
const COOKIE_MAX_AGE_DAYS = 30;
const APP_ORIGIN = "https://app.simplysent.co";

type Attribution = Record<string, string>;

// Share the cookie across *.simplysent.co so app.simplysent.co can also read it
// directly. Falls back to a host-only cookie on dev/preview hosts (e.g. ngrok).
function cookieDomain(): string | null {
  const host = window.location.hostname;
  return host === "simplysent.co" || host.endsWith(".simplysent.co")
    ? ".simplysent.co"
    : null;
}

function readCookie(): Attribution {
  const row = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${COOKIE_NAME}=`));
  if (!row) return {};
  try {
    const parsed = JSON.parse(decodeURIComponent(row.slice(COOKIE_NAME.length + 1)));
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeCookie(data: Attribution): void {
  const value = encodeURIComponent(JSON.stringify(data));
  const parts = [
    `${COOKIE_NAME}=${value}`,
    "path=/",
    `max-age=${COOKIE_MAX_AGE_DAYS * 24 * 60 * 60}`,
    "samesite=lax",
  ];
  const domain = cookieDomain();
  if (domain) parts.push(`domain=${domain}`);
  if (window.location.protocol === "https:") parts.push("secure");
  document.cookie = parts.join("; ");
}

function paramsFromUrl(): Attribution {
  const sp = new URLSearchParams(window.location.search);
  const out: Attribution = {};
  for (const key of TRACKED_PARAMS) {
    const val = sp.get(key);
    if (val) out[key] = val;
  }
  return out;
}

/**
 * Run once on landing load. Last-touch: if the URL carries any tracked params,
 * overwrite the stored cookie and reset the 30-day clock.
 */
export function captureAttribution(): void {
  const fromUrl = paramsFromUrl();
  if (Object.keys(fromUrl).length > 0) writeCookie(fromUrl);
}

/** Stored attribution (cookie), falling back to the live URL params. */
export function getAttribution(): Attribution {
  const stored = readCookie();
  return Object.keys(stored).length > 0 ? stored : paramsFromUrl();
}

/** Build an app.simplysent.co URL with the stored attribution params appended. */
export function appUrl(path = "/"): string {
  const url = new URL(path, APP_ORIGIN);
  for (const [key, value] of Object.entries(getAttribution())) {
    url.searchParams.set(key, value);
  }
  return url.toString();
}
