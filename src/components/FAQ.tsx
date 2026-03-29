import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Do I choose the gift?", a: "Yes. We prepare options and you approve before anything is sent." },
  { q: "What happens next year?", a: "We remind you, prepare new gift options, and you approve in one tap." },
  { q: "How does payment work?", a: "£29/year for the service. Gifts are charged separately when you approve them." },
  { q: "Can I cancel?", a: "Yes, anytime." },
  { q: "What if I do nothing?", a: "We'll send the best option so you never miss the date." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-10 lg:px-16 py-16 md:py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-lg font-semibold tracking-tight text-foreground/60 mb-8">
          FAQ
        </h2>
        <div className="divide-y divide-[var(--border-default)]">
          {faqs.map((faq, i) => (
            <button
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left py-3.5 flex items-start justify-between gap-4 cursor-pointer"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground/70">{faq.q}</p>
                <AnimatePresence>
                  {open === i && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm text-foreground/40 mt-1 overflow-hidden"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <svg
                className={`shrink-0 mt-0.5 text-foreground/25 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
