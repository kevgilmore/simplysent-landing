import { usePromo } from "@/hooks/usePromo";

export default function PromoBanner() {
  const promo = usePromo();

  if (!promo) return null;

  return (
    <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#5170ff] to-[#ff66c4] text-white text-center py-2.5 px-4 text-sm font-semibold tracking-wide shadow-md">
      🎉 {promo.label} applied! Code activated.
    </div>
  );
}
