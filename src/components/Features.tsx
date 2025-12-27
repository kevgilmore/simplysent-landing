import { Sparkles, Clock, Wallet, Heart } from "lucide-react";

const features = [
    {
        name: "AI-Powered Selection",
        description:
            "Our advanced AI analyzes interests to suggest gifts that truly resonate with the recipient.",
        icon: Sparkles,
    },
    {
        name: "3-Minute Search",
        description:
            "Find, select, and send the perfect gift in under three minutes. No more endless scrolling.",
        icon: Clock,
    },
    {
        name: "Budget Friendly",
        description:
            "Set your price range and find high-quality gifts that fit your financial comfort zone.",
        icon: Wallet,
    },
    {
        name: "Personalized Interests",
        description:
            "Filter by hobbies, passions, and unique personality traits for a truly bespoke experience.",
        icon: Heart,
    },
];

const Features = () => {
    return (
        <section
            id="features"
            className="py-24 bg-[#121212] overflow-hidden border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-bold leading-7 text-[#8B83F2] uppercase tracking-widest font-sans">
                        Gifting Made Easy
                    </h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl font-display">
                        Everything you need to find the perfect gift
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-400 font-sans">
                        SimplySent takes the stress out of special occasions.
                        Our intuitive platform helps you discover thoughtful
                        presents faster than ever.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6159A5]/20 text-[#8B83F2] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#6159A5]/30">
                                    <feature.icon
                                        className="h-8 w-8"
                                        aria-hidden="true"
                                    />
                                </div>
                                <dt className="text-xl font-bold leading-7 text-white mb-3 font-display">
                                    {feature.name}
                                </dt>
                                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-400 font-sans">
                                    <p className="flex-auto">
                                        {feature.description}
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Features;
