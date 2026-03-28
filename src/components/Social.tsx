import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    name: "Sarah",
    text: "She loved the gift. I didn't even have to think about it.",
    accent: "from-[#5170ff] to-[#7c5cff]",
  },
  {
    name: "James",
    text: "Way better than scrolling Amazon at midnight.",
    accent: "from-[#7c5cff] to-[#c45cdb]",
  },
  {
    name: "Priya",
    text: "Mum's birthday is just handled now. Every year.",
    accent: "from-[#c45cdb] to-[#ff66c4]",
  },
  {
    name: "Tom",
    text: "Set it up in two minutes. Forgot about it until she thanked me.",
    accent: "from-[#ff66c4] to-[#5170ff]",
  },
];

const trust = [
  { label: "Gifts curated by experts" },
  { label: "Always delivered on time" },
  { label: "Satisfaction guaranteed" },
];

export default function Social() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative px-6 md:px-10 lg:px-16 py-20 md:py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-background" />

      <div className="relative z-10 max-w-[80rem] mx-auto">
        {/* Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl p-5 bg-card ring-1 ring-[var(--border-default)] overflow-hidden hover:shadow-lg transition-shadow duration-500"
            >
              {/* Gradient accent bar at top */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${r.accent}`} />

              {/* Quote mark */}
              <span className={`text-3xl font-display font-bold leading-none bg-gradient-to-r ${r.accent} bg-clip-text`} style={{ WebkitTextFillColor: "transparent" }}>
                "
              </span>

              <p className="text-foreground/70 text-sm leading-relaxed mt-1 mb-4">{r.text}</p>

              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${r.accent} flex items-center justify-center`}>
                  <span className="text-[0.55rem] font-bold text-white">{r.name[0]}</span>
                </div>
                <span className="text-foreground/35 text-xs font-medium">{r.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust markers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {trust.map((t) => (
            <div key={t.label} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#5170ff] to-[#ff66c4]" />
              <span className="text-foreground/30 text-sm">{t.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
