import Silk from "./Silk";
import { ChevronDown } from "lucide-react";

const Hero = () => {
    const scrollToFeatures = () => {
        const featuresSection = document.getElementById("features");
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full flex flex-col items-center bg-[#121313]">
            {/* Background Layer: Silk animation locked to the first fold */}
            <div className="absolute top-0 left-0 right-0 h-[100dvh] z-0 overflow-hidden bg-[#6159A5]">
                <Silk
                    speed={5}
                    scale={2.3}
                    color="#6159A5"
                    noiseIntensity={0}
                    rotation={3.17}
                />
                {/* Smooth transition gradients to background color */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121313]/20 to-[#121313]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#121313_120%)] opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 h-[50dvh] bg-gradient-to-t from-[#121313] via-[#121313]/40 to-transparent pointer-events-none" />
            </div>

            {/* THE FIRST FOLD (100dvh) */}
            <div className="relative z-10 w-full h-[100dvh] flex flex-col items-center overflow-hidden">
                {/* Top Section: Typography + Smaller CTA Buttons (Approx 60% of fold) */}
                <div className="h-[60dvh] w-full flex flex-col items-center justify-center px-6 text-center shrink-0 pt-6">
                    <div className="space-y-2 md:space-y-4 animate-in fade-in slide-in-from-top-10 duration-1000">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-display text-white tracking-tighter drop-shadow-2xl leading-none">
                            The Gifting App
                        </h1>
                        <p className="text-base md:text-2xl lg:text-3xl text-white/90 font-medium font-sans drop-shadow-xl max-w-2xl mx-auto pt-4 md:pt-0">
                            Find the perfect gift in 3 minutes
                        </p>
                    </div>

                    {/* Compact Button Group */}
                    <div className="flex flex-col items-center w-full max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        {/* Primary Button: Shrunk version */}
                        <a
                            href="https://app.simplysent.co"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center justify-center bg-gradient-to-r from-[#6159A5] via-[#8B83F2] to-[#B1A9FF] text-white px-6 py-4 md:px-10 md:py-4 rounded-xl md:rounded-2xl font-bold font-sans text-sm md:text-lg transition-all shadow-xl hover:scale-105 active:scale-95 w-[70%] sm:w-auto min-w-[200px] overflow-hidden mt-6 md:mt-10"
                        >
                            <span className="relative z-10">Use App Now</span>
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>

                        {/* App Stores: Shrunk version */}
                        <div className="mt-6 md:mt-12 flex flex-col items-center gap-4">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/30 font-sans">
                                Coming Soon
                            </span>
                            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                                {/* Apple App Store */}
                                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 text-white/40 px-6 py-3.5 md:px-7 md:py-3.5 rounded-xl md:rounded-2xl font-bold font-sans text-xs md:text-base w-full sm:w-auto cursor-not-allowed group relative grayscale">
                                    <img
                                        src="/apple_white_logo.png"
                                        alt="Apple"
                                        className="w-5 h-5 md:w-6 md:h-6 object-contain opacity-50"
                                    />
                                    <div className="flex flex-col items-start leading-tight text-left">
                                        <span className="text-[8px] md:text-[9px] uppercase font-bold opacity-40">
                                            Download on the
                                        </span>
                                        <span className="font-display">
                                            App Store
                                        </span>
                                    </div>
                                    <span className="ml-1 text-[8px] md:text-[9px] bg-white/20 px-1.5 py-0.5 rounded-full uppercase tracking-wider text-white/60">
                                        Soon
                                    </span>
                                </div>

                                {/* Google Play */}
                                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 text-white/40 px-6 py-3.5 md:px-7 md:py-3.5 rounded-xl md:rounded-2xl font-bold font-sans text-xs md:text-base w-full sm:w-auto cursor-not-allowed group relative grayscale">
                                    <img
                                        src="/google_logo.png"
                                        alt="Google Play"
                                        className="w-5 h-5 md:w-6 md:h-6 object-contain opacity-50"
                                    />
                                    <div className="flex flex-col items-start leading-tight text-left">
                                        <span className="text-[8px] md:text-[9px] uppercase font-bold opacity-40">
                                            Get it on
                                        </span>
                                        <span className="font-display">
                                            Play Store
                                        </span>
                                    </div>
                                    <span className="ml-1 text-[8px] md:text-[9px] bg-white/20 px-1.5 py-0.5 rounded-full uppercase tracking-wider text-white/60">
                                        Soon
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Explore Indicator: Positioned above mockup */}
                <button
                    onClick={scrollToFeatures}
                    className="absolute bottom-[35dvh] md:bottom-[42dvh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 text-white/60 hover:text-white transition-all cursor-pointer animate-bounce group z-[100] pointer-events-auto"
                >
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans">
                        Explore
                    </span>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                </button>

                {/* Bottom Section: Cutoff Mockup (Starts at 60vh) */}
                <div className="h-[40dvh] w-full flex flex-col items-center justify-start overflow-hidden pointer-events-none pt-14 md:pt-0">
                    <div className="w-[70vw] max-w-[260px] sm:max-w-[320px] md:max-w-[450px] lg:max-w-[550px] transition-all duration-1000 animate-in fade-in slide-in-from-bottom-20 delay-500">
                        <img
                            src="/mockup1.png"
                            alt="SimplySent App Screenshot"
                            className="w-full h-auto drop-shadow-[0_0_80px_rgba(0,0,0,0.6)] rounded-t-[2.5rem] md:rounded-t-[4rem]"
                        />
                    </div>
                </div>
            </div>

            {/* THE REVEAL: Natural scrolling section */}
            <div className="relative z-0 w-full flex flex-col items-center -mt-[40dvh] pb-32 pt-14 md:pt-0">
                <div className="w-[70vw] max-w-[260px] sm:max-w-[320px] md:max-w-[450px] lg:max-w-[550px] transition-all duration-1000 animate-in fade-in slide-in-from-bottom-20 delay-500">
                    <img
                        src="/mockup1.png"
                        alt=""
                        className="w-full h-auto drop-shadow-[0_0_80px_rgba(0,0,0,0.6)] rounded-t-[2.5rem] md:rounded-t-[4rem]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
