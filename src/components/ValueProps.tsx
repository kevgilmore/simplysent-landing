import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const statements = [
  "No more last-minute panic",
  "No browsing for hours",
  "No forgetting important dates",
  "No wrapping or posting",
];

export default function ValueProps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-28 md:py-40 overflow-hidden" ref={ref}>
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#111015]" />
      {/* Gradient accents */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[#5170ff]/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[300px] rounded-full bg-[#ff66c4]/6 blur-[100px]" />

      <div className="relative z-10 px-6 md:px-10 lg:px-16 max-w-[80rem] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5170ff] mb-4 block">
            Why SimplySent
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            Gifting handled.
            <br />
            <span className="logo-gradient">Effort removed.</span>
          </h2>
        </motion.div>

        {/* Big statement list */}
        <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto mb-20 md:mb-28">
          {statements.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-center gap-5 md:gap-8"
            >
              <div className="w-3 h-3 shrink-0 rounded-full bg-gradient-to-r from-[#5170ff] to-[#ff66c4] opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/20 group-hover:text-white/80 transition-colors duration-500 tracking-tight">
                {s}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom grid — what you get */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { title: "Gift curation", desc: "Thoughtful picks, not random vouchers" },
            { title: "Ordering & wrapping", desc: "We buy it, wrap it, make it beautiful" },
            { title: "On-time delivery", desc: "Arrives before the date, every time" },
            { title: "Yearly autopilot", desc: "Same setup works forever. Zero effort" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
              className="bg-white/[0.04] rounded-2xl p-6 border border-white/[0.06] hover:bg-white/[0.07] hover:border-white/[0.1] transition-all duration-500"
            >
              <h4 className="font-semibold text-white/80 mb-1.5 tracking-tight">{item.title}</h4>
              <p className="text-sm text-white/30 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
