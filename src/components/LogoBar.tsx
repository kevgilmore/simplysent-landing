import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  { src: "/img/logos/apple.png", alt: "Apple" },
  { src: "/img/logos/dyson.png", alt: "Dyson" },
  { src: "/img/logos/nike.png", alt: "Nike" },
  { src: "/img/logos/pandora.png", alt: "Pandora" },
  { src: "/img/logos/jo_malone.png", alt: "Jo Malone" },
  { src: "/img/logos/hotel_chocolate.png", alt: "Hotel Chocolat" },
  { src: "/img/logos/lego.png", alt: "Lego", mono: true },
  { src: "/img/logos/braun.png", alt: "Braun" },
];

export default function LogoBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative px-6 md:px-10 lg:px-16 py-20 md:py-28 overflow-hidden" ref={ref}>
      {/* Warm background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />

      <div className="relative z-10 max-w-[80rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left — wrapped gift image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Gradient orb behind */}
              <div className="pointer-events-none absolute -top-8 -left-8 w-48 h-48 rounded-full bg-gradient-to-br from-[#ff66c4]/10 to-[#5170ff]/5 blur-[60px]" />

              <div className="relative rounded-[1.75rem] overflow-hidden shadow-xl shadow-black/6 ring-1 ring-[var(--border-default)]">
                <img
                  src="/img/wrapped_gift.jpg"
                  alt="A beautifully wrapped gift, ready to send"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Bottom label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-card/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
                    <p className="text-xs font-semibold text-foreground/70">Wrapped & ready</p>
                    <p className="text-[0.65rem] text-foreground/35">Delivered to Mum on time, every year</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — copy + logos */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5170ff] mb-4 block">
              Premium gifting
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.1] mb-3">
              Gifts from brands
              <br />
              <span className="text-foreground/25">they actually want</span>
            </h3>
            <p className="text-foreground/40 text-base leading-relaxed mb-10 max-w-md">
              We curate from the best brands — beautifully wrapped and delivered to their door. No generic gift cards.
            </p>

            {/* Logo grid */}
            <div className="grid grid-cols-4 gap-x-6 gap-y-5 sm:gap-x-8 sm:gap-y-6 max-w-lg items-center">
              {logos.map((logo, i) => (
                <motion.div
                  key={logo.alt}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                  className="group flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`h-5 md:h-6 w-auto max-w-[80px] object-contain ${"mono" in logo && logo.mono ? "brand-logo-mono" : "brand-logo"}`}
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
