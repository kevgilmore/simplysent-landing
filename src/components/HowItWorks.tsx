import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Tell us who\nand when",
    body: "Add a person and an occasion. Mum's birthday, your partner's anniversary — takes 30 seconds.",
  },
  {
    num: "02",
    title: "We handle\neverything",
    body: "Gift selection, ordering, wrapping, delivery. All taken care of, every single year.",
  },
  {
    num: "03",
    title: "You approve\nin one tap",
    body: "Or do nothing — we can send automatically. Zero effort, total control.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="relative px-6 md:px-10 lg:px-16 py-28 md:py-40 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#f5f2fd]/30 to-background dark:via-[#5170ff]/[0.03]" />
      <div className="pointer-events-none absolute top-0 right-0 w-[40%] h-[50%] bg-gradient-to-bl from-[#ffe4f3]/20 to-transparent dark:from-[#ff66c4]/5" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[30%] h-[40%] bg-gradient-to-tr from-[#e0e8ff]/20 to-transparent dark:from-[#5170ff]/5" />
      <div className="relative z-10 max-w-[80rem] mx-auto">
        {/* Section header — left aligned, editorial */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5170ff] mb-4 block">
              How it works
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-foreground">
              You set up once.
              <br />
              <span className="text-foreground/25">We do the rest.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="md:col-span-4 md:col-start-8 flex items-end"
          >
            <p className="text-foreground/40 text-lg leading-relaxed">
              No browsing, no wrapping, no last-minute panic.
              We handle everything.
            </p>
          </motion.div>
        </div>

        {/* Steps — staggered editorial layout */}
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative ${i === 1 ? "md:mt-16" : i === 2 ? "md:mt-32" : ""}`}
            >
              <div className="relative bg-card rounded-[1.75rem] p-8 md:p-10 shadow-sm ring-1 ring-[var(--border-default)] hover:shadow-lg transition-all duration-700 overflow-hidden">
                {/* Large background number */}
                <span className="absolute -top-4 -right-2 text-[8rem] font-bold leading-none text-foreground/[0.03] select-none pointer-events-none font-display">
                  {step.num}
                </span>

                {/* Gradient accent dot */}
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#5170ff] to-[#ff66c4] mb-8 group-hover:scale-150 transition-transform duration-500" />

                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4 whitespace-pre-line leading-[1.1]">
                  {step.title}
                </h3>
                <p className="text-foreground/40 leading-relaxed text-[0.95rem] max-w-xs">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
