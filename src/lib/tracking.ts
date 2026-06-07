/**
 * Minimal landing-site tracking. Fires one "landing" page_view to the API's
 * /track endpoint so the admin funnel has a first step for campaign visitors,
 * before they cross to the app (app.simplysent.co).
 *
 * Visitor id is shared with the app via a *.simplysent.co cookie (same name as
 * web/src/services/ids.ts) so a landing visit and the subsequent app visit are
 * attributed to one person — required for a coherent landing→…→checkout funnel.
 */
import { getAttribution } from "@/lib/attribution";

const PROD_API = "https://simplysent-api-973409790816.europe-west1.run.app";
const VISITOR_COOKIE = "ss_visitor";
const SESSION_KEY = "ss_session_id";

function isLocalEnv(): boolean {
  const h = window.location.hostname;
  return (
    h === "localhost" ||
    h === "127.0.0.1" ||
    h.endsWith(".ngrok-free.app") ||
    h.endsWith(".ngrok-free.dev") ||
    h.endsWith(".ngrok.io") ||
    h.endsWith(".ngrok.app")
  );
}

const API_BASE = isLocalEnv() ? "" : PROD_API;

function cookieDomain(): string | null {
  const host = window.location.hostname;
  return host === "simplysent.co" || host.endsWith(".simplysent.co")
    ? ".simplysent.co"
    : null;
}

function randomId(prefix: string): string {
  const rnd =
    typeof crypto !== "undefined" && crypto.getRandomValues
      ? Array.from(crypto.getRandomValues(new Uint8Array(8)), (b) =>
          b.toString(16).padStart(2, "0"),
        ).join("")
      : Math.random().toString(16).slice(2, 18);
  return `${prefix}_${rnd}`;
}

// Shared anon id (aid_): cookie (cross-subdomain) wins, else mint and persist.
// Same cookie name as web/src/services/ids.ts so a landing visit and the app
// visit are one person. Existing cookies may hold a legacy vid_ value — reused
// as-is so continuity isn't lost; only new visitors get an aid_.
function getAnonId(): string {
  const row = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${VISITOR_COOKIE}=`));
  let id = row ? decodeURIComponent(row.slice(VISITOR_COOKIE.length + 1)) : "";
  // Force the aid_ scheme — migrate any legacy vid_ value to a fresh aid_.
  if (!id.startsWith("aid_")) id = randomId("aid");

  const parts = [
    `${VISITOR_COOKIE}=${encodeURIComponent(id)}`,
    "path=/",
    `max-age=${365 * 24 * 60 * 60}`,
    "samesite=lax",
  ];
  const domain = cookieDomain();
  if (domain) parts.push(`domain=${domain}`);
  if (window.location.protocol === "https:") parts.push("secure");
  document.cookie = parts.join("; ");
  return id;
}

// Per-tab session id (separate from the app's session — they're stitched by
// visitor id in the funnel, not by session).
function getSessionId(): string {
  let id = sessionStorage.getItem(SESSION_KEY) || "";
  if (!id) {
    id = randomId("sid");
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

let sent = false;

/** Fire the single "landing" page_view (idempotent per page load). */
export function trackLanding(): void {
  if (sent) return;
  sent = true;
  try {
    const body = {
      session_id: getSessionId(),
      aid: getAnonId(),
      event: "page_view",
      page: "landing", // sentinel — maps to the "landing" funnel step server-side
      metadata: {
        entry_page: window.location.pathname || "/",
        user_agent: navigator.userAgent,
        screen_size: `${window.screen.width}x${window.screen.height}`,
        ...getAttribution(), // utm_source / utm_campaign / … (+ code/fbclid/gclid)
      },
    };
    fetch(`${API_BASE}/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: true,
    }).catch(() => {
      /* silently fail */
    });
  } catch {
    /* silently fail */
  }
}
