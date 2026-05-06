import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/ThemeContext";

const API_BASE = (() => {
  const h = window.location.hostname;
  const isLocal = h === "localhost" || h === "127.0.0.1" || h.endsWith(".ngrok-free.app") || h.endsWith(".ngrok.io") || h.endsWith(".ngrok.app");
  return isLocal ? "" : "https://api.simplysent.co";
})();

interface Props {
  appUrl: string;
  sessionId: string;
}

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
});

export default function OrderConfirmation({ appUrl, sessionId }: Props) {
  const { theme, toggle } = useTheme();
  const [loading, setLoading] = useState(false);

  async function handleContinue(e: React.MouseEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/user/handover-token?session_id=${encodeURIComponent(sessionId)}`);
      if (res.ok) {
        const { token } = await res.json();
        window.location.href = `${appUrl}?handover_token=${encodeURIComponent(token)}`;
        return;
      }
    } catch {
      // fall through to plain redirect
    }
    window.location.href = appUrl;
  }

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden grain bg-background text-foreground">
      {/* Background mesh */}
      <div className="pointer-events-none absolute inset-0 bg-background" />
      <div className="pointer-events-none absolute top-0 left-0 w-[60%] h-[70%] bg-gradient-to-br from-[#e8e0ff]/40 via-background to-transparent dark:from-[#5170ff]/10 dark:via-background" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[50%] h-[60%] bg-gradient-to-tl from-[#ffe0f0]/25 via-transparent to-transparent dark:from-[#ff66c4]/8" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#5170ff]/[0.04] blur-[100px]" />

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center justify-between px-6 md:px-10 lg:px-16 py-5"
      >
        <span className="font-logo text-xl font-bold logo-gradient">SimplySent</span>
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
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          )}
        </button>
      </motion.nav>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Checkmark */}
        <motion.div
          {...fade(0.1)}
          className="mb-8 w-20 h-20 rounded-full bg-[#5170ff]/10 flex items-center justify-center"
        >
          <motion.svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5170ff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            <motion.polyline
              points="20 6 9 17 4 12"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.35, duration: 0.55, ease: "easeOut" }}
            />
          </motion.svg>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fade(0.25)}
          className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 leading-[1.1]"
        >
          Your gift is on its way
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fade(0.4)}
          className="text-base md:text-lg text-foreground/50 max-w-sm mb-10 leading-relaxed"
        >
          We'll take care of everything from here. Keep an eye on your email for updates.
        </motion.p>

        {/* CTA */}
        <motion.div {...fade(0.55)} className="flex flex-col items-center gap-4">
          <button
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm cta-gradient text-white shadow-lg shadow-[#5170ff]/25 hover:shadow-[#5170ff]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:scale-100"
            disabled={loading}
            onClick={handleContinue}
          >
            {loading ? "Loading…" : "Continue to app"}
            {!loading && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </button>
          <p className="text-xs text-foreground/30">
            You'll be signed in automatically.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
