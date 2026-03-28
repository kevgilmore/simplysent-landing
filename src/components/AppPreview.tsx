import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AppPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="app-preview" className="relative px-6 md:px-10 lg:px-16 py-28 md:py-36 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--surface-dark)]" />
      <div className="pointer-events-none absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full bg-[#5170ff]/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/3 w-[400px] h-[300px] rounded-full bg-[#ff66c4]/6 blur-[100px]" />

      <div className="relative z-10 max-w-[80rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end order-2 lg:order-1"
          >
            <div className="relative w-[240px] sm:w-[280px]">
              {/* Glow behind phone */}
              <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-[#5170ff]/15 to-[#ff66c4]/10 blur-2xl" />

              <div className="relative rounded-[2rem] border-[3px] border-white/10 bg-black overflow-hidden shadow-2xl shadow-[#5170ff]/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10" />
                <img
                  src="/img/app_screenshot.png"
                  alt="SimplySent app showing curated gift picks"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5170ff] mb-4 block">
              The app
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.05] mb-5">
              Every year,
              <br />
              <span className="text-white/25">one tap is all it takes</span>
            </h2>
            <div className="space-y-4 mb-8">
              {[
                "We remind you before each occasion",
                "Fresh curated gift picks ready in the app",
                "Approve in one tap, we handle the rest",
              ].map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#5170ff] to-[#ff66c4] shrink-0" />
                  <p className="text-white/50 text-sm sm:text-base">{line}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
