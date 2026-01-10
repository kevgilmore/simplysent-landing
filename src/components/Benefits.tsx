import PixelCard from "./PixelCard";
import { Gift, Clock, Heart } from "lucide-react";
import BlurText from "./BlurText";

const benefits = [
    {
        title: "Always have the right gift",
        description: "Thoughtful ideas ready whenever an occasion comes up",
        icon: Gift,
        variant: "blue",
    },
    {
        title: "Save time, every time you gift",
        description: "Find great options in minutes, not hours of searching",
        icon: Clock,
        variant: "yellow",
    },
    {
        title: "Stay thoughtful, stay connected",
        description: "Make it easy to show up for the people who matter most",
        icon: Heart,
        variant: "pink",
    },
];

const Benefits = () => {
    return (
        <section
            id="benefits"
            className="w-full py-24 bg-neutral-900 text-white overflow-hidden relative z-10"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <BlurText
                        text="Thoughtful gifting, without the effort"
                        className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 justify-center"
                        animateBy="words"
                        delay={100}
                        repeatOnScroll
                    />
                    <div className="max-w-[800px] mx-auto">
                        <p className="text-xl md:text-2xl font-medium text-[#8B83F2] tracking-tight">
                            Personalised recommendations, favourites, and easy
                            buying in one place
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                    {benefits.map((item, index) => (
                        <PixelCard
                            key={index}
                            variant={item.variant}
                            className="!w-full !h-full max-w-sm mx-auto"
                        >
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 space-y-6">
                                <div className="p-4 rounded-full bg-black/20 text-white">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold text-white tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/80 leading-relaxed max-w-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </PixelCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
