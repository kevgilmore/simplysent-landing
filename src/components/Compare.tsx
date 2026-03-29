import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const moonpigSteps = [
  "Remember the date",
  "Search for a gift",
  "Decide what to buy",
  "Checkout & send",
];

const simplySentSteps = [
  "We remember every occasion",
  "We prepare great options",
  "You approve in one tap",
  "We handle the rest",
];

export default function Compare() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative px-6 md:px-10 lg:px-16 py-28 md:py-40 overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div className="pointer-events-none absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#5170ff]/[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#ff66c4]/[0.03] blur-[100px]" />

      <div className="relative z-10 max-w-[80rem] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5170ff] mb-4 block">
            The difference
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Stop doing this
            <br />
            <span className="text-foreground/25">every year.</span>
          </h2>
        </motion.div>

        {/* Two-column comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mb-16 md:mb-24">
          {/* Moonpig column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[1.75rem] p-8 md:p-10 bg-gradient-to-br from-[#ff66c4]/[0.22] via-[#ff8fa0]/[0.15] to-[#ffb3c1]/[0.25] shadow-sm ring-1 ring-[#ff66c4]/25 overflow-hidden"
          >
            <span className="pointer-events-none absolute -bottom-6 -right-4 text-[10rem] leading-none opacity-[0.07] select-none">🐷</span>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/25 mb-6">
              With Moonpig
            </p>
            <div className="space-y-4 mb-8">
              {moonpigSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/15 shrink-0" />
                  <span className="text-foreground/40 text-[0.95rem] leading-relaxed">
                    {step}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-5 border-t border-[var(--border-default)]">
              <p className="text-foreground/20 text-sm italic">
                Every time. For every person.
              </p>
            </div>
          </motion.div>

          {/* SimplySent column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[1.75rem] p-8 md:p-10 overflow-hidden"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5170ff]/[0.06] via-[#8b5cf6]/[0.03] to-[#ff66c4]/[0.04] dark:from-[#5170ff]/[0.12] dark:via-[#8b5cf6]/[0.06] dark:to-[#ff66c4]/[0.08]" />
            <div className="absolute inset-0 ring-1 ring-[#5170ff]/15 dark:ring-[#5170ff]/25 rounded-[1.75rem]" />
            <div className="pointer-events-none absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#5170ff]/8 to-transparent blur-2xl" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5170ff] mb-6">
                With SimplySent
              </p>
              <div className="space-y-4 mb-8">
                {simplySentSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <svg
                      className="mt-0.5 shrink-0"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#5170ff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-foreground/70 text-[0.95rem] leading-relaxed font-medium">
                      {step}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="pt-5 border-t border-[#5170ff]/10">
                <p className="text-[#5170ff]/60 text-sm font-medium">
                  Runs automatically, every year.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom quote shift */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-6">
            <p className="text-foreground/25 text-lg sm:text-xl tracking-tight line-through decoration-foreground/10">
              "I need to sort a gift"
            </p>
            <svg
              className="text-[#5170ff]/40 rotate-90 sm:rotate-0 shrink-0"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <p className="text-foreground/70 text-lg sm:text-xl font-semibold tracking-tight">
              "That's already taken care of"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
