// Simple hash so codes aren't plaintext in source.
function hash(str: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(36);
}

// To add a new code:
// 1. Open browser console on the site
// 2. Run __hashPromo("YOURCODE")
// 3. Add the hash + config below

interface Discount {
  hash: string;
  off: number;       // amount off in £
  label: string;     // shown in badge
  bannerText: string; // shown in top banner
}

const validDiscounts: Discount[] = [
  { hash: "uedebj", off: 10, label: "£10 off", bannerText: "£10 off your first year" },
  { hash: "1clwfpr", off: 29, label: "Free year", bannerText: "Your first year is free" },
];

export interface ActiveDiscount {
  code: string;
  off: number;
  label: string;
  bannerText: string;
  priceAfter: number;
}

const BASE_PRICE = 29;

export function checkDiscount(code: string): ActiveDiscount | null {
  if (!code) return null;
  const normalised = code.trim().toUpperCase();
  const h = hash(normalised);
  const match = validDiscounts.find((d) => d.hash === h);
  if (!match) return null;
  return {
    code: normalised,
    off: match.off,
    label: match.label,
    bannerText: match.bannerText,
    priceAfter: Math.max(0, BASE_PRICE - match.off),
  };
}

export function getDiscountFromUrl(): ActiveDiscount | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const code = params.get("promo") || params.get("code") || params.get("discount");
  if (!code) return null;
  return checkDiscount(code);
}

export function hashCode(code: string): string {
  return hash(code.trim().toUpperCase());
}

if (typeof window !== "undefined") {
  (window as unknown as Record<string, unknown>).__hashPromo = hashCode;
}
