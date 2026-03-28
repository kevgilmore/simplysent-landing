import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

type Step = "recipient" | "occasion" | "date" | "preparing" | "results" | "plan";

const recipients = [
  { id: "mum", label: "Mum", emoji: "👩‍🦱" },
  { id: "dad", label: "Dad", emoji: "👨‍🦳" },
  { id: "partner", label: "Partner", emoji: "❤️" },
  { id: "brother", label: "Brother", emoji: "👦" },
  { id: "sister", label: "Sister", emoji: "👧" },
  { id: "son", label: "Son", emoji: "🧒" },
  { id: "daughter", label: "Daughter", emoji: "👶" },
  { id: "other", label: "Other", emoji: "🎁" },
];

const occasions = [
  { id: "birthday", label: "Birthday", emoji: "🎂" },
  { id: "christmas", label: "Christmas", emoji: "🎄" },
  { id: "mothersday", label: "Mother's Day", emoji: "💐" },
  { id: "fathersday", label: "Father's Day", emoji: "👔" },
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const monthFull = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const giftResults = [
  {
    name: "Ninja Foodi Blender",
    price: "£89",
    tag: "Top Pick",
    image: "/img/products/ninja.png",
  },
  {
    name: "Sony WH-1000XM5",
    price: "£259",
    tag: "Premium",
    image: "/img/products/sony.png",
  },
  {
    name: "Fitbit Inspire 3",
    price: "£79",
    tag: "Wellness",
    image: "/img/products/fitbit.png",
  },
  {
    name: "Funko Pop Collection",
    price: "£24",
    tag: "Fun",
    image: "/img/products/pop.png",
  },
  {
    name: "Ninja Creami Ice Cream Maker",
    price: "£149",
    tag: "Best Value",
    image: "/img/products/ninaj2.png",
  },
];

function getNextOccurrence(month: number, day: number): string {
  const now = new Date();
  let year = now.getFullYear();
  const target = new Date(year, month, day);
  if (target <= now) year++;
  return `${day} ${monthFull[month]} ${year}`;
}


// Step indicator dots
function StepDots({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1 rounded-full transition-all duration-500 ${
            i < current
              ? "w-6 bg-[#5170ff]"
              : i === current
                ? "w-6 bg-gradient-to-r from-[#5170ff] to-[#ff66c4]"
                : "w-1.5 bg-white/10"
          }`}
        />
      ))}
    </div>
  );
}

/* ─── Plan step ─── */
function PlanStep({
  approvedGifts,
  giftResults,
  dateLabel,
  onChangeGift,
}: {
  approvedGifts: Set<number>;
  giftResults: { name: string; price: string; image: string; tag: string }[];
  dateLabel: string;
  onChangeGift: () => void;
}) {
  const chosenIndex = [...approvedGifts][0] ?? 0;
  const chosen = giftResults[chosenIndex];

  return (
    <motion.div
      key="plan"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35 }}
    >
      {/* ── Two cards ── */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {/* This year */}
        <div className="rounded-2xl bg-secondary p-4 sm:p-5 text-center">
          <p className="text-[0.6rem] font-semibold uppercase tracking-widest text-[#5170ff] mb-3">This year</p>
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-xl bg-card ring-1 ring-[var(--border-default)] flex items-center justify-center p-2 mb-2">
            <img src={chosen.image} alt={chosen.name} className="w-full h-full object-contain" />
          </div>
          <p className="font-semibold text-xs sm:text-sm tracking-tight truncate">{chosen.name}</p>
          <p className="text-foreground/30 text-[0.65rem] mt-0.5">Delivered by {dateLabel}</p>
          <button onClick={onChangeGift} className="text-[0.6rem] text-[#5170ff] cursor-pointer mt-1.5">Change</button>
        </div>

        {/* Every year after */}
        <div className="relative rounded-2xl bg-secondary p-4 sm:p-5 text-center overflow-hidden">
          <p className="text-[0.6rem] font-semibold uppercase tracking-widest text-foreground/25 mb-3">Every year after</p>
          <div className="flex items-center justify-center gap-0.5 mb-2">
            {[giftResults[(chosenIndex + 1) % 5], giftResults[(chosenIndex + 2) % 5], giftResults[(chosenIndex + 3) % 5]].map((g, i) => (
              <div key={i} className={`rounded-lg bg-card ring-1 ring-[var(--border-default)] flex items-center justify-center p-1 ${i === 1 ? "w-12 h-12 sm:w-14 sm:h-14 -mx-0.5 z-10 shadow-sm" : "w-9 h-9 sm:w-10 sm:h-10 opacity-50"}`}>
                <img src={g.image} alt="" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
          <p className="font-semibold text-xs sm:text-sm tracking-tight">Fresh picks, one tap</p>
          <p className="text-foreground/30 text-[0.65rem] mt-0.5">We remind you. You approve.</p>
          <a href="#app-preview" className="text-[0.6rem] text-[#5170ff] mt-1.5 inline-block">See how it works</a>
        </div>
      </div>

      {/* ── Subscription CTA ── */}
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5170ff]/[0.06] via-[#8b5cf6]/[0.03] to-[#ff66c4]/[0.04] dark:from-[#5170ff]/[0.12] dark:via-[#8b5cf6]/[0.06] dark:to-[#ff66c4]/[0.08]" />
        <div className="absolute inset-0 ring-1 ring-[#5170ff]/10 dark:ring-[#5170ff]/20 rounded-2xl" />
        <div className="pointer-events-none absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#5170ff]/8 to-transparent blur-2xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#ff66c4]/5 to-transparent blur-xl" />

        <div className="relative p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            {/* Left — pricing */}
            <div className="flex-1 min-w-0">
              <p className="text-[0.6rem] font-semibold uppercase tracking-widest text-[#5170ff] mb-2">SimplySent subscription</p>
              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">£29</span>
                <span className="text-sm text-foreground/30">/year</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[0.7rem] text-foreground/35">
                <span className="flex items-center gap-1.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#5170ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Up to 5 people
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#5170ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Every occasion, every year
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#5170ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Cancel anytime
                </span>
              </div>
            </div>

            {/* Right — CTA */}
            <div className="shrink-0 flex flex-col items-center sm:items-end gap-2">
              <a
                href="#gift-quiz"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm cta-gradient text-white shadow-lg shadow-[#5170ff]/20 hover:shadow-[#5170ff]/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 whitespace-nowrap"
              >
                Get started
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <p className="text-[0.6rem] text-foreground/20">Gifts charged separately</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function GiftQuiz() {
  const [step, setStep] = useState<Step>("recipient");
  const [selectedRecipient, setSelectedRecipient] = useState<string | null>(
    null
  );
  const [selectedOccasion, setSelectedOccasion] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [approvedGifts, setApprovedGifts] = useState<Set<number>>(new Set());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const handleRecipientSelect = (id: string) => {
    setSelectedRecipient(id);
    setTimeout(() => setStep("occasion"), 350);
  };

  const handleOccasionSelect = (id: string) => {
    setSelectedOccasion(id);
    if (id === "mothersday") {
      setSelectedMonth(2); // March
      setSelectedDay(30);  // Mother's Day UK is late March
      setTimeout(() => setStep("preparing"), 350);
    } else if (id === "fathersday") {
      setSelectedMonth(5); // June
      setSelectedDay(15);  // Father's Day UK is mid June
      setTimeout(() => setStep("preparing"), 350);
    } else {
      setTimeout(() => setStep("date"), 350);
    }
  };

  const handleDateConfirm = useCallback(() => {
    if (selectedMonth === null || selectedDay === null) return;
    setStep("preparing");
  }, [selectedMonth, selectedDay]);

  // Auto-advance from preparing → results
  useEffect(() => {
    if (step !== "preparing") return;
    const timer = setTimeout(() => setStep("results"), 2400);
    return () => clearTimeout(timer);
  }, [step]);

  const handleApprove = (index: number) => {
    setApprovedGifts((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const handleReset = () => {
    setStep("recipient");
    setSelectedRecipient(null);
    setSelectedOccasion(null);
    setSelectedMonth(null);
    setSelectedDay(null);
    setApprovedGifts(new Set());
  };

  const recipientLabel =
    recipients.find((r) => r.id === selectedRecipient)?.label ?? "";
  const occasionLabel =
    occasions.find((o) => o.id === selectedOccasion)?.label ?? "";

  const dateLabel =
    selectedMonth !== null && selectedDay !== null
      ? getNextOccurrence(selectedMonth, selectedDay)
      : "";
  const stepIndex =
    step === "recipient"
      ? 0
      : step === "occasion"
        ? 1
        : step === "date"
          ? 2
          : step === "preparing"
            ? 3
            : step === "results"
              ? 4
              : 5;

  const progressWidth =
    step === "recipient"
      ? "16%"
      : step === "occasion"
        ? "33%"
        : step === "date"
          ? "50%"
          : step === "preparing"
            ? "66%"
            : step === "results"
              ? "83%"
              : "100%";

  // Days in month helper
  const daysInMonth =
    selectedMonth !== null
      ? new Date(new Date().getFullYear(), selectedMonth + 1, 0).getDate()
      : 31;

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

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-[#5170ff] mb-4">
            Try it yourself
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Set up a gift in 30 seconds
          </h2>
          <p className="text-foreground/50 text-lg max-w-lg mx-auto">
            This is all the effort you'll ever put in. We handle everything else.
          </p>
        </motion.div>

        {/* Interactive card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative rounded-3xl bg-card shadow-sm ring-1 ring-[var(--border-default)] overflow-hidden"
        >
          {/* Progress bar */}
          <div className="h-1 bg-secondary">
            <motion.div
              className="h-full bg-gradient-to-r from-[#5170ff] to-[#ff66c4]"
              animate={{ width: progressWidth }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          <div className="p-6 sm:p-8 md:p-12">
            {/* Header row: dots + start over */}
            <div className="flex items-center justify-between mb-8">
              <StepDots current={stepIndex} total={6} />
              {step !== "recipient" && step !== "preparing" && step !== "plan" && (
                <button
                  onClick={handleReset}
                  className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors cursor-pointer"
                >
                  Start over
                </button>
              )}
            </div>

            <AnimatePresence mode="wait">
              {/* ─── Step 1: Recipient ─── */}
              {step === "recipient" && (
                <motion.div
                  key="recipient"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2 tracking-tight">
                    Who's the gift for?
                  </h3>
                  <p className="text-foreground/40 mb-8">
                    Choose someone you'd like to set up gifting for.
                  </p>

                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
                    {recipients.map((r) => (
                      <button
                        key={r.id}
                        onClick={() => handleRecipientSelect(r.id)}
                        className={`group relative flex flex-col items-center gap-1.5 py-4 px-2 rounded-xl border transition-all duration-300 cursor-pointer ${
                          selectedRecipient === r.id
                            ? "border-[#5170ff]/50 bg-[#5170ff]/5"
                            : "border-[var(--border-default)] bg-card hover:border-[#5170ff]/30 hover:bg-secondary"
                        }`}
                      >
                        <span className="text-2xl">{r.emoji}</span>
                        <span className="font-medium text-[0.7rem] sm:text-xs">{r.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ─── Step 2: Occasion ─── */}
              {step === "occasion" && (
                <motion.div
                  key="occasion"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2 tracking-tight">
                    What's the occasion?
                  </h3>
                  <p className="text-foreground/40 mb-8">
                    For{" "}
                    <span className="text-[#5170ff]">{recipientLabel}</span> —
                    what are we celebrating?
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {occasions.filter((o) => {
                      if (selectedRecipient === "mum") return o.id !== "fathersday";
                      if (selectedRecipient === "dad") return o.id !== "mothersday";
                      return o.id !== "mothersday" && o.id !== "fathersday";
                    }).map((o) => (
                      <button
                        key={o.id}
                        onClick={() => handleOccasionSelect(o.id)}
                        className={`group relative flex flex-col items-center gap-3 p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                          selectedOccasion === o.id
                            ? "border-[#5170ff]/50 cta-gradient/10"
                            : "border-[var(--border-default)] bg-card hover:border-[#5170ff]/30 hover:bg-secondary"
                        }`}
                      >
                        <span className="text-3xl">{o.emoji}</span>
                        <span className="font-medium text-sm">{o.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ─── Step 3: Date ─── */}
              {step === "date" && (
                <motion.div
                  key="date"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2 tracking-tight">
                    When is {recipientLabel}'s {occasionLabel.toLowerCase()}?
                  </h3>
                  <p className="text-foreground/40 mb-8">
                    We'll remind you in advance and have gifts ready.
                  </p>

                  {/* Month picker */}
                  <div className="mb-6">
                    <p className="text-xs font-medium uppercase tracking-wider text-foreground/25 mb-3">
                      Month
                    </p>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                      {months.map((m, i) => (
                        <button
                          key={m}
                          onClick={() => {
                            setSelectedMonth(i);
                            setSelectedDay(null);
                          }}
                          className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                            selectedMonth === i
                              ? "cta-gradient/20 border-[#5170ff]/40 text-[#5170ff] border"
                              : "bg-card border border-[var(--border-default)] text-foreground/50 hover:border-[#5170ff]/30 hover:text-foreground/70"
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Day picker — only show when month is selected */}
                  <AnimatePresence>
                    {selectedMonth !== null && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs font-medium uppercase tracking-wider text-foreground/25 mb-3">
                          Day
                        </p>
                        <div className="grid grid-cols-7 gap-1.5 mb-8">
                          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
                            (d) => (
                              <button
                                key={d}
                                onClick={() => setSelectedDay(d)}
                                className={`aspect-square flex items-center justify-center rounded-lg text-sm transition-all duration-200 cursor-pointer ${
                                  selectedDay === d
                                    ? "cta-gradient text-white font-semibold shadow-lg shadow-[#5170ff]/30"
                                    : "bg-card text-foreground/40 hover:bg-secondary hover:text-foreground/70"
                                }`}
                              >
                                {d}
                              </button>
                            )
                          )}
                        </div>

                        {/* Confirm */}
                        {selectedDay !== null && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                          >
                            <div className="flex-1">
                              <p className="text-foreground/60 text-sm">
                                <span className="text-foreground font-medium">
                                  {recipientLabel}'s{" "}
                                  {occasionLabel.toLowerCase()}
                                </span>{" "}
                                is on{" "}
                                <span className="text-[#5170ff]">
                                  {selectedDay} {monthFull[selectedMonth]}
                                </span>
                              </p>
                            </div>
                            <button
                              onClick={handleDateConfirm}
                              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm cta-gradient text-white shadow-lg shadow-[#5170ff]/25 hover:shadow-[#5170ff]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                            >
                              Find gifts
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
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            </button>
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}

              {/* ─── Step 4: Preparing ─── */}
              {step === "preparing" && (
                <motion.div
                  key="preparing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-16 md:py-24 text-center"
                >
                  {/* Animated gradient ring */}
                  <div className="relative w-16 h-16 mb-6">
                    <motion.div
                      className="absolute inset-0 rounded-full cta-gradient opacity-20"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 rounded-full cta-gradient opacity-10" />
                    <div className="absolute inset-[3px] rounded-full bg-card flex items-center justify-center">
                      <motion.svg
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5170ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <motion.polyline
                          points="20 6 9 17 4 12"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                        />
                      </motion.svg>
                    </div>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-lg font-semibold tracking-tight"
                  >
                    Finding gifts for {recipientLabel}
                  </motion.p>
                </motion.div>
              )}

              {/* ─── Step 5: Gift Picks ─── */}
              {step === "results" && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 tracking-tight">
                      Choose a gift for {recipientLabel}
                    </h3>
                    <p className="text-foreground/40 text-sm leading-relaxed">
                      {recipientLabel}'s {occasionLabel.toLowerCase()} is on{" "}
                      <span className="text-foreground/60 font-medium">{dateLabel}</span>.
                      We'll wrap it and deliver it on time.
                    </p>
                  </div>

                  {/* Gift cards — 2 col mobile, 3 col desktop */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {giftResults.map((gift, i) => {
                      const isApproved = approvedGifts.has(i);
                      return (
                        <motion.div
                          key={gift.name}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: i * 0.06,
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          onClick={() => handleApprove(i)}
                          className={`group relative rounded-xl border overflow-hidden transition-all duration-300 cursor-pointer ${
                            isApproved
                              ? "border-[#5170ff]/40 cta-gradient/8 ring-1 ring-[#5170ff]/20"
                              : "border-[var(--border-default)] bg-card hover:border-[#5170ff]/30"
                          }`}
                        >
                          <div className="absolute top-2 left-2 z-10">
                            <span className="text-[0.6rem] font-semibold uppercase tracking-wider bg-card/90 backdrop-blur-sm text-[#5170ff] shadow-sm px-2 py-0.5 rounded-full border border-[var(--border-default)]">
                              {gift.tag}
                            </span>
                          </div>

                          {isApproved && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute top-2 right-2 z-10 w-6 h-6 rounded-full cta-gradient flex items-center justify-center shadow-lg shadow-[#5170ff]/40"
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </motion.div>
                          )}

                          <div className="relative aspect-[4/3] bg-secondary flex items-center justify-center p-4">
                            <img
                              src={gift.image}
                              alt={gift.name}
                              className="w-full h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>

                          <div className="px-3 py-2.5 border-t border-[var(--border-subtle)]">
                            <p className="font-medium text-xs sm:text-sm truncate">
                              {gift.name}
                            </p>
                            <p className="text-foreground/40 text-xs mt-0.5">
                              {gift.price}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}

                    {/* Continue card */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      className="rounded-xl border border-dashed border-[#5170ff]/25 cta-gradient/5 flex flex-col items-center justify-center p-4 text-center gap-3"
                    >
                      <div>
                        <p className="text-foreground/40 text-xs mb-0.5">
                          {approvedGifts.size > 0
                            ? `${approvedGifts.size} gift${approvedGifts.size > 1 ? "s" : ""} selected`
                            : "Tap to select"}
                        </p>
                        <p className="text-foreground/20 text-[0.65rem]">
                          You pay for gift + delivery only
                        </p>
                      </div>
                      <button
                        onClick={() => setStep("plan")}
                        className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl font-semibold text-xs cta-gradient text-white shadow-lg shadow-[#5170ff]/25 hover:shadow-[#5170ff]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                      >
                        Continue
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* ─── Step 6: Plan — summary + pricing ─── */}
              {step === "plan" && (
                <PlanStep
                  approvedGifts={approvedGifts}
                  giftResults={giftResults}
                  dateLabel={dateLabel}
                  onChangeGift={() => setStep("results")}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
