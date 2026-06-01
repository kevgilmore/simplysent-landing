/**
 * Free-socks promo gate.
 *
 * The CTA "Claim free socks" only shows when the visitor arrived with the
 * promo code. We never ship the code in plaintext — instead we store its
 * SHA-256 and hash the incoming code at runtime to compare. This stops casual
 * "read the JS" discovery of the code.
 *
 * NOTE: this is a cosmetic gate only (it changes a button label). The free-socks
 * entitlement itself must be validated server-side at claim time — a client
 * check like this is always bypassable.
 */

import { getAttribution } from "@/lib/attribution";

// SHA-256 of the active promo code.
const FREE_SOCKS_CODE_HASH =
  "2364c447fef595cc233d87f71902666e24b8a16f496c94955f5cb2fa65d54029";

async function sha256Hex(input: string): Promise<string> {
  const bytes = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * True when the stored/live `code` matches the free-socks promo code.
 * Resolves false when there's no code, on mismatch, or if hashing is
 * unavailable.
 */
export async function isFreeSocksEligible(): Promise<boolean> {
  const code = getAttribution().code;
  if (!code || !crypto?.subtle) return false;
  try {
    return (await sha256Hex(code)) === FREE_SOCKS_CODE_HASH;
  } catch {
    return false;
  }
}
