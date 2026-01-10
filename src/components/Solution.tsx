import BlurText from "./BlurText";
import {
    Card,
    CardContent,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./UiComponents";

const steps = [
    {
        title: "Tell us about them",
        description: "Age, relationship, interests and hobbies",
        image: "/mockup1.png",
    },
    {
        title: "Get instant gift recommendations",
        description: "We find the best gift ideas tailored to them",
        image: "/mockup1.png",
    },
    {
        title: "Buy or save for later",
        description: "Purchase via Amazon or keep favourites for later",
        image: "/mockup1.png",
    },
];

const Solution = () => {
    return (
        <section
            id="solution"
            className="w-full py-24 bg-neutral-900 text-white overflow-hidden relative z-10"
        >
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
                <div className="text-center mb-12">
                    <BlurText
                        text="There’s a better way to find gifts"
                        className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 justify-center"
                        animateBy="words"
                        delay={100}
                        repeatOnScroll
                    />
                    <div className="max-w-[800px] mx-auto">
                        <p className="text-xl md:text-2xl font-medium text-[#8B83F2] tracking-tight">
                            Personalised ideas tailored to the person, not
                            generic lists
                        </p>
                    </div>
                </div>

                <Carousel className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl">
                    <CarouselContent>
                        {steps.map((step, index) => (
                            <CarouselItem key={index} className="basis-full">
                                <div className="p-1 h-full">
                                    <Card className="border-0 shadow-none bg-transparent h-full">
                                        <CardContent className="flex flex-col items-center justify-between p-6 space-y-10 h-full">
                                            <div className="relative aspect-[9/16] w-full max-w-[300px] md:max-w-[450px]">
                                                <img
                                                    src={step.image}
                                                    alt={`Step ${index + 1}`}
                                                    className="object-contain w-full h-full"
                                                />
                                            </div>
                                            <div className="flex flex-col items-center text-center space-y-3 mt-auto">
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-2">
                                                    {index + 1}
                                                </div>
                                                <h3 className="text-xl font-bold text-white">
                                                    {step.title}
                                                </h3>
                                                <p className="text-lg font-medium text-neutral-400 max-w-xs">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
};

export default Solution;
