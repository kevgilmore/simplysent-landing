import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";

type Step = "intro" | "loading" | "error" | "results";

interface Product {
  id?: string;
  name: string;
  price: string;
  image: string;
  original_image?: string;
  processed_product_photo?: string;
  product_photo?: string;
  productUrl?: string;
  tag: string;
  desc: string;
}

const GIFT_TAGS = ["Top Pick", "Premium", "Best Value", "Trending", "Fan Favourite"];
const PROD_API = "https://simplysent-api-973409790816.europe-west1.run.app";
const SLUG = "dad-fathers-day";
const REQUEST_TIMEOUT_MS = 45_000;

function isLocalEnv(): boolean {
  if (typeof window === "undefined") return false;
  const h = window.location.hostname;
  return (
    h === "localhost" ||
    h === "127.0.0.1" ||
    h.endsWith(".ngrok-free.app") ||
    h.endsWith(".ngrok-free.dev") ||
    h.endsWith(".ngrok.io") ||
    h.endsWith(".ngrok.app")
  );
}

const API_BASE = isLocalEnv() ? "" : PROD_API;

function formatPrice(p: number): string {
  return `£${Number.isInteger(p) ? p : p.toFixed(2)}`;
}

export default function GiftQuiz() {
  const [step, setStep] = useState<Step>("intro");
  const [products, setProducts] = useState<Product[]>([]);
  const [viewingGift, setViewingGift] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const ref = useRef(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (step !== "intro") {
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step]);

  const fetchProducts = useCallback(async () => {
    setStep("loading");
    setProducts([]);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const res = await fetch(`${API_BASE}/curate/guide/${SLUG}/products`, {
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (!data.products?.length) {
        setStep("error");
        return;
      }
      setProducts(
        data.products.map(
          (
            p: {
              id: string;
              name: string;
              price: number;
              image: string;
              original_image: string;
              product_photo: string;
              processed_product_photo: string;
              description: string;
              product_url?: string;
            },
            i: number,
          ) => ({
            id: p.id,
            name: p.name,
            price: formatPrice(p.price),
            productUrl: p.product_url,
            tag: GIFT_TAGS[i] ?? "Pick",
            image: p.image,
            original_image: p.original_image,
            product_photo: p.product_photo,
            processed_product_photo: p.processed_product_photo,
            desc: p.description,
          }),
        ),
      );
      setStep("results");
    } catch (err) {
      console.error("[gift-quiz]", err);
      setStep("error");
    } finally {
      clearTimeout(timer);
    }
  }, []);

  const handleReset = () => {
    setStep("intro");
    setProducts([]);
    setViewingGift(null);
    setLightboxImage(null);
  };

  const viewing = viewingGift !== null ? products[viewingGift] : null;
  const viewingImage = viewing
    ? viewing.processed_product_photo || viewing.image
    : null;

  return (
    <section
      id="gift-quiz"
      className="relative px-6 md:px-10 py-24 md:py-32 overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#f0f0fa]/30 to-background dark:via-[#5170ff]/[0.03]" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#5170ff]/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#ff66c4]/[0.03] blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-[#5170ff] mb-4">
            Father's Day · Live demo
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Find Dad a gift in seconds
          </h2>
          <p className="text-foreground/50 text-lg max-w-lg mx-auto">
            See the kind of picks SimplySent surfaces for Dad — no quiz, no fuss.
          </p>
        </motion.div>

        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative rounded-3xl bg-card shadow-sm ring-1 ring-[var(--border-default)] scroll-mt-6 overflow-hidden"
        >
          <div className="p-6 sm:p-8 md:p-12">
            <AnimatePresence mode="wait">
              {/* ─── Intro ─── */}
              {step === "intro" && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center text-center py-10 md:py-16"
                >
                  <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mb-8"
                  >
                    <div className="absolute inset-0 rounded-[2rem] cta-gradient blur-3xl opacity-40" />
                    <div className="relative w-24 h-24 rounded-[1.75rem] cta-gradient flex items-center justify-center shadow-2xl shadow-[#5170ff]/30">
                      <span className="text-5xl drop-shadow-md">👔</span>
                    </div>
                  </motion.div>

                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-foreground/40 mb-4">
                    Father's Day · Sun 15 Jun
                  </p>

                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
                    Curated picks for{" "}
                    <span className="logo-gradient">Dad</span>
                  </h3>

                  <button
                    onClick={fetchProducts}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base cta-gradient text-white shadow-xl shadow-[#5170ff]/25 hover:shadow-[#5170ff]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                  >
                    Show me the picks
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              )}

              {/* ─── Loading ─── */}
              {step === "loading" && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-20 md:py-28 text-center"
                >
                  <div className="relative w-16 h-16 mb-6">
                    <motion.div
                      className="absolute inset-0 rounded-full cta-gradient opacity-20"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                    />
                    <div className="absolute inset-0 rounded-full cta-gradient opacity-10" />
                    <div className="absolute inset-[3px] rounded-full bg-card flex items-center justify-center">
                      <motion.svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#5170ff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.2,
                          ease: "linear",
                        }}
                      >
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </motion.svg>
                    </div>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-lg font-semibold tracking-tight"
                  >
                    Curating gifts for Dad…
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-sm text-foreground/40 mt-2"
                  >
                    This can take a moment if our server's waking up.
                  </motion.p>
                </motion.div>
              )}

              {/* ─── Error ─── */}
              {step === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-16 md:py-24 text-center"
                >
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-[#ff66c4]/10 ring-1 ring-[#ff66c4]/20 flex items-center justify-center">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ff66c4"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-2">
                    Couldn't load gifts right now
                  </h3>
                  <p className="text-foreground/45 max-w-sm mb-7 leading-relaxed">
                    Something went wrong fetching picks for Dad. Give it another try in a moment.
                  </p>

                  <button
                    onClick={fetchProducts}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm cta-gradient text-white shadow-lg shadow-[#5170ff]/25 hover:shadow-[#5170ff]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                  >
                    Try again
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="23 4 23 10 17 10" />
                      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                    </svg>
                  </button>
                </motion.div>
              )}

              {/* ─── Results ─── */}
              {step === "results" && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex items-start justify-between gap-3 mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
                        Top picks for Dad
                      </h3>
                      <p className="text-foreground/40 text-sm leading-relaxed">
                        Tap a gift for details. Add Dad's interests, age and budget in the app to refine these.
                      </p>
                    </div>
                    <button
                      onClick={handleReset}
                      className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors cursor-pointer shrink-0 mt-1"
                    >
                      Start over
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
                    {products.map((gift, i) => (
                      <motion.button
                        key={`${gift.id ?? gift.name}-${i}`}
                        type="button"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: i * 0.06,
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        onClick={() => setViewingGift(i)}
                        className="group relative text-left rounded-2xl border border-[var(--border-default)] bg-card overflow-hidden touch-manipulation transition-colors duration-200 active:scale-[0.98] [@media(hover:hover)]:hover:border-[#5170ff]/30 [@media(hover:hover)]:hover:shadow-md"
                      >
                        <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                          <span className="text-[0.65rem] font-semibold uppercase tracking-wider bg-card/90 backdrop-blur-sm text-[#5170ff] shadow-sm px-2.5 py-1 rounded-full border border-[var(--border-default)]">
                            {gift.tag}
                          </span>
                        </div>

                        <div className="relative aspect-square bg-secondary pointer-events-none">
                          <img
                            src={gift.processed_product_photo || gift.image}
                            alt={gift.name}
                            className="absolute inset-0 w-full h-full object-contain p-5 sm:p-6 transition-transform duration-500 [@media(hover:hover)]:group-hover:scale-105"
                            loading="lazy"
                            draggable={false}
                          />
                        </div>

                        <div className="px-3.5 py-3 border-t border-[var(--border-subtle)] h-[64px] flex flex-col justify-center pointer-events-none">
                          <p className="font-medium text-sm sm:text-base truncate">
                            {gift.name}
                          </p>
                          <p className="text-foreground/40 text-sm mt-0.5">
                            {gift.price}
                          </p>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* ─── Product Detail Drawer ─── */}
      {createPortal(
        viewing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
            onClick={() => setViewingGift(null)}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <motion.div
              initial={{ y: "8%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full sm:max-w-lg bg-card rounded-t-3xl sm:rounded-3xl shadow-2xl ring-1 ring-[var(--border-default)] flex flex-col max-h-[90vh] sm:max-h-[80vh]"
            >
                <button
                  onClick={() => setViewingGift(null)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-foreground/10 transition-colors cursor-pointer"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground/50"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>

                <div className="overflow-y-auto flex-1 min-h-0">
                  <div
                    onClick={() => viewingImage && setLightboxImage(viewingImage)}
                    className="relative aspect-square bg-secondary rounded-t-3xl flex items-center justify-center p-10 cursor-zoom-in"
                  >
                    <img
                      src={viewingImage ?? ""}
                      alt={viewing.name}
                      className="w-full h-full object-contain drop-shadow-xl"
                    />
                    <div className="absolute bottom-3 right-3 bg-card/80 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1.5 text-foreground/40 text-xs ring-1 ring-[var(--border-default)]">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                      Expand
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-[#5170ff] bg-[#5170ff]/8 px-2.5 py-1 rounded-full">
                        {viewing.tag}
                      </span>
                      <span className="text-xl font-bold tracking-tight">
                        {viewing.price}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold tracking-tight mt-3 mb-2">
                      {viewing.name}
                    </h4>
                    <p className="text-foreground/45 text-sm leading-relaxed">
                      {viewing.desc}
                    </p>
                  </div>
                </div>
            </motion.div>
          </motion.div>
        ),
        document.body,
      )}

      {/* ─── Image Lightbox ─── */}
      {createPortal(
        lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[110] flex items-center justify-center cursor-zoom-out"
            onClick={() => setLightboxImage(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              src={lightboxImage}
              alt=""
              className="relative max-w-[90vw] max-h-[90vh] object-contain drop-shadow-2xl"
            />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
            </button>
          </motion.div>
        ),
        document.body,
      )}
    </section>
  );
}
