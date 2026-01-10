import BlurText from "./BlurText";
import CircularGallery from "./CircularGallery";

const UseCases = () => {
    return (
        <section
            id="use-cases"
            className="w-full py-24 bg-neutral-900 text-white overflow-hidden relative z-10"
        >
            <div className="container mx-auto px-4 md:px-6 mb-12 flex flex-col items-center">
                <div className="text-center">
                    <BlurText
                        text="Gifts for every occasion"
                        className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 justify-center"
                        animateBy="words"
                        delay={100}
                        repeatOnScroll
                    />
                    <div className="max-w-[800px] mx-auto">
                        <p className="text-xl md:text-2xl font-medium text-[#8B83F2] tracking-tight">
                            Birthdays, Christmas, anniversaries, and last-minute
                            surprises
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full h-[600px] relative">
                <CircularGallery
                    bend={3}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    scrollEase={0.02}
                    items={[
                        {
                            image: `https://picsum.photos/seed/birthday/800/600?grayscale`,
                            text: "Birthdays",
                        },
                        {
                            image: `https://picsum.photos/seed/christmas/800/600?grayscale`,
                            text: "Christmas",
                        },
                        {
                            image: `https://picsum.photos/seed/anniversary/800/600?grayscale`,
                            text: "Anniversaries",
                        },
                        {
                            image: `https://picsum.photos/seed/surprise/800/600?grayscale`,
                            text: "Last-minute Surprises",
                        },
                        {
                            image: `https://picsum.photos/seed/graduation/800/600?grayscale`,
                            text: "Graduation",
                        },
                        {
                            image: `https://picsum.photos/seed/wedding/800/600?grayscale`,
                            text: "Weddings",
                        },
                    ]}
                />
            </div>
        </section>
    );
};

export default UseCases;
