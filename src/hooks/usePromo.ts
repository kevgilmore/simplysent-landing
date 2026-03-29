import { useMemo } from "react";

export interface Promo {
  code: string;
  label: string;
}

const PROMOS: Record<string, string> = {
  EARLYBIRD: "£10 off",
  META_ONE: "First year free",
};

export function usePromo(): Promo | null {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const code = (
      params.get("promo") || params.get("code") || params.get("discount")
    )?.toUpperCase();
    if (code && PROMOS[code]) {
      return { code, label: PROMOS[code] };
    }
    return null;
  }, []);
}
