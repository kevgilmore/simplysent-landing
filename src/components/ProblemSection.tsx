import BlurText from "./BlurText";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const companies = [
    { name: "Amazon", url: "amazon.co.uk", color: "#FF9900" },
    { name: "Etsy", url: "etsy.com/uk", color: "#F56400" },
    { name: "John Lewis", url: "johnlewis.com", color: "#004F4D" },
    {
        name: "Not On The High Street",
        url: "notonthehighstreet.com",
        color: "#00AEEF",
    },
    { name: "Argos", url: "argos.co.uk", color: "#E4002B" },
];

const ProblemSection = () => {
    return (
        <section
            id="problem"
            className="w-full bg-neutral-900 text-white relative z-10 flex flex-col"
        >
            <div className="container mx-auto px-4 md:px-6 pt-24 pb-12 text-center">
                <BlurText
                    text="Gifting should feel easy"
                    className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 justify-center"
                    animateBy="words"
                    delay={100}
                    repeatOnScroll
                />

                <div className="max-w-[800px] mx-auto">
                    <p className="text-xl md:text-2xl font-medium text-[#8B83F2] tracking-tight">
                        Not hours of scrolling and second-guessing
                    </p>
                </div>
            </div>

            <div className="w-full h-[600px] relative">
                {/* @ts-expect-error - ScrollStack is a JS component without types */}
                <ScrollStack
                    itemDistance={100}
                    itemStackDistance={30}
                    stackPosition="10%"
                    scaleEndPosition="5%"
                    itemScale={0.05}
                >
                    {companies.map((company, index) => (
                        // @ts-expect-error - ScrollStackItem is a JS component without types
                        <ScrollStackItem
                            key={index}
                            itemClassName="shadow-2xl !h-[500px] !w-full"
                        >
                            <div
                                className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 md:px-16 rounded-[40px]"
                                style={{ backgroundColor: company.color }}
                            >
                                <div className="flex flex-col items-center md:items-start text-white space-y-2">
                                    <h3 className="text-5xl md:text-7xl font-bold tracking-tighter drop-shadow-md text-center md:text-left leading-none">
                                        {company.name}
                                    </h3>
                                    <p className="font-mono text-xl md:text-2xl opacity-90 drop-shadow-sm">
                                        {company.url}
                                    </p>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="w-32 h-32 md:w-48 md:h-48 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-inner border border-white/30">
                                        <span className="text-6xl md:text-8xl font-bold text-white">
                                            {company.name.charAt(0)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </ScrollStackItem>
                    ))}
                </ScrollStack>
            </div>
        </section>
    );
};

export default ProblemSection;
