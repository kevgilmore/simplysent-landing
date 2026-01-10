import BlurText from "./BlurText";

const CTA = () => {
    return (
        <section
            id="cta"
            className="w-full py-24 bg-neutral-900 text-white overflow-hidden relative z-10"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative overflow-hidden rounded-3xl bg-black/20 border border-white/5 px-6 py-16 md:px-16 md:py-24 text-center">
                    {/* Background Glow Effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
                        <BlurText
                            text="Start Gifting Now"
                            className="text-4xl md:text-6xl font-bold tracking-tighter justify-center"
                            animateBy="words"
                            delay={100}
                            repeatOnScroll
                        />

                        <div className="flex flex-col items-center justify-center gap-4">
                            <a
                                href="https://app.simplysent.co"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center justify-center bg-gradient-to-r from-[#6159A5] via-[#8B83F2] to-[#B1A9FF] text-white px-6 py-4 md:px-10 md:py-4 rounded-xl md:rounded-2xl font-bold font-sans text-sm md:text-lg transition-all shadow-xl hover:scale-105 active:scale-95 w-[70%] sm:w-auto min-w-[200px] overflow-hidden"
                            >
                                <span className="relative z-10">
                                    Use App Now
                                </span>
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/30 font-sans">
                                NO ACCOUNT REQUIRED
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
