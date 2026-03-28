import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id="final-cta"
            className="relative px-6 md:px-10 lg:px-16 py-28 md:py-40 overflow-hidden"
            ref={ref}
        >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-[#ece4ff]/20 to-[#ffe4f3]/15 dark:via-[#5170ff]/5 dark:to-[#ff66c4]/3" />

            {/* Large floating gradient orbs */}
            <div className="pointer-events-none absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#5170ff]/12 to-[#8b5cf6]/8 blur-[100px]" />
            <div className="pointer-events-none absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#ff66c4]/10 to-[#5170ff]/5 blur-[120px]" />
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#5170ff]/[0.06] blur-[80px]" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Large decorative gradient text behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
                    <span className="text-[12rem] sm:text-[16rem] md:text-[20rem] font-bold font-display leading-none tracking-tighter logo-gradient opacity-[0.04]">
                        SS
                    </span>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="relative"
                >
                    <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#5170ff] bg-[#5170ff]/[0.06] px-4 py-2 rounded-full mb-8">
                        Get started
                    </span>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-6">
                        Set up your{" "}
                        <span className="logo-gradient">gifting loop</span>
                    </h2>

                    <p className="text-lg md:text-xl text-foreground/40 mb-12 leading-relaxed max-w-lg mx-auto">
                        Runs every year, one-tap approval, everything handled.
                    </p>

                    <a
                        href="#gift-quiz"
                        className="group inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold text-lg cta-gradient text-white shadow-xl shadow-[#5170ff]/15 hover:shadow-[#5170ff]/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
                    >
                        Get started
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="group-hover:translate-x-0.5 transition-transform"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>

                    <p className="text-sm text-foreground/25 mt-6">
                        Cancel anytime
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
