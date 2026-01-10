import BlurText from "./BlurText";
// @ts-expect-error - JS component
import LogoLoop from "./LogoLoop";
import {
    SiAmazon,
    SiEtsy,
    SiShopify,
    SiStripe,
    SiVisa,
    SiMastercard,
    SiNike,
    SiAdidas,
} from "react-icons/si";

const partnerLogos = [
    { node: <SiAmazon />, title: "Amazon" },
    { node: <SiEtsy />, title: "Etsy" },
    { node: <SiShopify />, title: "Shopify" },
    { node: <SiStripe />, title: "Stripe" },
    { node: <SiVisa />, title: "Visa" },
    { node: <SiMastercard />, title: "Mastercard" },
    { node: <SiNike />, title: "Nike" },
    { node: <SiAdidas />, title: "Adidas" },
];

const Trust = () => {
    return (
        <section
            id="trust"
            className="w-full py-24 bg-neutral-900 text-white overflow-hidden relative z-10"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 max-w-[800px]">
                        Gift ideas from brands you recognise
                    </h2>
                    <div className="max-w-[800px] mx-auto">
                        <p className="text-xl md:text-2xl font-medium text-[#8B83F2] tracking-tight">
                            Discover products from trusted retailers and
                            well-known brands
                        </p>
                    </div>
                </div>

                <div className="mt-24 flex flex-col items-center space-y-12">
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white/20 font-sans">
                        Trusted by shoppers across
                    </p>
                    <div className="w-full max-w-5xl opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 ease-in-out">
                        <LogoLoop
                            logos={partnerLogos}
                            speed={35}
                            gap={100}
                            logoHeight={40}
                            fadeOut
                            fadeOutColor="#171717" // Matches tailwind neutral-900 background
                            pauseOnHover
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
