import familyImg from '../img/family.png'
import plotterImg from '../img/plotter.jpg'

const Benefits = () => {
    return (
      <section className="bg-[#F9F9FF] ">
        <section className="text-gray-600 w-4/5 mx-auto pt-6">
          <div className="container mx-auto flex px-5 py-10 md:py-24 md:flex-row flex-col items-center">
            <div className="mb-8 md:mb-0 md:w-1/2 flex flex-col md:items-start md:text-left  items-center text-center ">
              <h1 className="md:w-5/6 sm:text-4xl text-4xl mb-6 font-semibold text-[#030647]">
              The subscription that you and your family will love
              </h1>
              <p className="mb-6 font-inter leading-relaxed font-normal text-lg text-[#56687B] md:w-[70%]">
              Receive a beautiful hand picked card every year, with your personalised message inside.
              </p>
            </div>
            <div className=" md:pl-12 md:ml-12 h-full w-full md:w-1/2 w-5/6  ">
              <div className=" rounded-3xl mb-10 md:mb-0 featureGradient1 py-6">
                <img
                  alt="hero"
                  className=" m-auto rounded-3xl"
                  src={familyImg}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-4/5 mx-auto bg-[#F9F9FF] pb-8 md:pb-0 ">
          <div className="container mx-auto flex px-5 py-10 md:py-24 md:flex-row flex-col items-center">
            <div className="h-full w-full rounded-3xl md:w-1/2 w-5/6 mb-10 md:mb-0 featureGradient1">
              <img
                alt="hero"
                className="rounded-3xl m-auto"
                src={plotterImg}
              />
            </div>
            <div className="md:w-1/2  flex flex-col md:pl-12 md:ml-12 md:items-start md:text-left  items-center text-center ">
              <h1 className="md:w-5/6 sm:text-4xl text-4xl mb-4 font-semibold text-[#030647]">
                We bring the personal touch
              </h1>
              <p className="mb-4 font-inter leading-relaxed text-lg text-[#56687B] font-normal md:w-4/5">
                We print your personalised message onto the card. At the moment we will print the message in black ink, but we're working on adding more <span>colours.</span> All cards are written by our innovative plotter machine, which uses a real pen to give that quality personal feel.

              </p>
            </div>
          </div>
        </section>
      </section>
    )
}

export default Benefits;