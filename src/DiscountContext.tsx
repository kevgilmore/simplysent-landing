import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { getDiscountFromUrl, checkDiscount, type ActiveDiscount } from "./discount";

const DiscountContext = createContext<{
  discount: ActiveDiscount | null;
  applyCode: (code: string) => boolean;
}>({ discount: null, applyCode: () => false });

export function DiscountProvider({ children }: { children: ReactNode }) {
  const [discount, setDiscount] = useState<ActiveDiscount | null>(null);

  useEffect(() => {
    const d = getDiscountFromUrl();
    if (d) setDiscount(d);
  }, []);

  const applyCode = (code: string): boolean => {
    const d = checkDiscount(code);
    if (d) {
      setDiscount(d);
      return true;
    }
    return false;
  };

  return (
    <DiscountContext.Provider value={{ discount, applyCode }}>
      {children}
    </DiscountContext.Provider>
  );
}

export const useDiscount = () => useContext(DiscountContext);
