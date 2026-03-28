import { motion } from "framer-motion";
import { useTheme } from "@/ThemeContext";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const { theme, toggle } = useTheme();

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden grain">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-background" />
      <div className="pointer-events-none absolute top-0 left-0 w-[60%] h-[70%] bg-gradient-to-br from-[#e8e0ff]/40 via-background to-transparent dark:from-[#5170ff]/10 dark:via-background" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[50%] h-[60%] bg-gradient-to-tl from-[#ffe0f0]/25 via-transparent to-transparent dark:from-[#ff66c4]/8" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#5170ff]/[0.04] blur-[100px]" />

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-30 flex items-center justify-between px-6 md:px-10 lg:px-16 py-5"
      >
        <span className="font-logo text-xl font-bold logo-gradient">SimplySent</span>
        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="w-8 h-8 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/50">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/50">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
          <a
            href="https://app.simplysent.co/login"
            className="text-sm font-medium text-foreground/50 hover:text-foreground transition-colors"
          >
            Sign in
          </a>
        </div>
      </motion.nav>

      {/* Main hero area */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-[90rem] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left — type-heavy column */}
            <div className="lg:col-span-7 xl:col-span-6">
              <motion.div {...fade(0.1)} className="mb-6">
                <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#5170ff] bg-[#5170ff]/[0.06] px-4 py-2 rounded-full">
                  Your gifting concierge
                </span>
              </motion.div>

              <motion.h1
                {...fade(0.2)}
                className="text-[2.75rem] sm:text-[3.5rem] md:text-[4.25rem] lg:text-[4.75rem] font-bold leading-[1.02] tracking-[-0.03em] text-foreground mb-7"
              >
                Set it up once.
                <br />
                <span className="logo-gradient">Never think about</span>
                <br />
                gifting again.
              </motion.h1>

              <motion.p
                {...fade(0.35)}
                className="text-lg md:text-xl text-foreground/45 max-w-lg leading-relaxed mb-9"
              >
                SimplySent handles gifting for everyone you care about —
                every year, on autopilot. No searching, no stress. You just approve.
              </motion.p>

              <motion.div {...fade(0.45)} className="flex flex-wrap gap-3">
                <a
                  href="#gift-quiz"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[0.95rem] cta-gradient text-white shadow-xl shadow-[#5170ff]/15 hover:shadow-[#5170ff]/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  See how it works
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Right — image composition */}
            <div className="lg:col-span-5 xl:col-span-6 relative flex justify-center lg:justify-end">
              {/* Decorative gradient orbs */}
              <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-[#5170ff]/20 to-[#ff66c4]/10 blur-[80px]" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-gradient-to-tr from-[#ff66c4]/12 to-[#5170ff]/5 blur-[60px]" />

              <motion.div
                initial={{ opacity: 0, y: 40, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-[26rem] lg:max-w-[30rem]"
              >
                {/* Main image */}
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/8 ring-1 ring-black/[0.04]">
                  <img
                    src="/img/mum_cooking.jpg"
                    alt="The kind of person you never want to forget"
                    className="w-full h-auto object-cover aspect-[3/4]"
                    loading="eager"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Floating notification card */}
                <motion.div
                  initial={{ opacity: 0, x: 20, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-5 -left-5 sm:-left-10 right-6 z-20"
                >
                  <div className="bg-card rounded-2xl px-5 py-4 shadow-xl shadow-black/8 ring-1 ring-[var(--border-default)]">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl cta-gradient flex items-center justify-center shrink-0 shadow-lg shadow-[#5170ff]/20">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Mum's birthday — sorted</p>
                        <p className="text-xs text-foreground/40">Picked, wrapped, delivering on time</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Small floating badge top-right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="absolute -top-3 -right-3 sm:-right-6 z-20 bg-card rounded-xl px-3.5 py-2 shadow-lg shadow-black/6 ring-1 ring-[var(--border-default)]"
                >
                  <p className="text-[0.65rem] font-semibold text-foreground/50 uppercase tracking-wider">Every year</p>
                  <p className="text-sm font-bold logo-gradient">Autopilot</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ticker strip */}
      <div className="relative z-10 border-t border-border/60 bg-secondary py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, j) => (
            <div key={j} className="flex items-center shrink-0">
              {[
                "Birthdays",
                "Anniversaries",
                "Christmas",
                "Mother's Day",
                "Father's Day",
                "Thank You Gifts",
                "Valentine's Day",
                "New Baby",
              ].map((item) => (
                <span key={`${j}-${item}`} className="flex items-center gap-3 mx-6 text-sm font-medium text-foreground/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#5170ff] to-[#ff66c4]" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
