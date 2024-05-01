import mday from '../img/mday.jpg'
import fday from '../img/fday.jpg'

const Features = () => {
    return (
      <section className="mt-12 pt-16 md:mb-32 w-4/5 mx-auto">
        <div className="text-center ">
          <div className="md:w-3/5 lg:w-4/5 md:mx-auto">
            <h2 className="font-bold text-3xl md:text-5xl pt-3 mt-2">
              Beyond Ordinary Cards
            </h2>
            <p className="mt-3 text-gray-600 text-base md:text-lg leading-relaxed pt-2 lg:w-4/5 lg:mx-auto 3xl:w-3/5">
            Quality greetings cards combine exquisite materials and elegant design to create a card that is as unique and special as the person you send it to.
            Carefully selected from one of our boutique card makers.
            </p>
            <p className="mt-3 text-gray-600 text-sm italic md:text-sm leading-relaxed pt-2 lg:w-4/5 lg:mx-auto 3xl:w-3/5">
            All cards are A6 that measures 105 x 148 mm or 4.1 x 5.8 inches
            </p>
          </div>
          <div className=" mx-auto pt-6 md:px-8">
            <div className="mx-auto pt-8 space-y-12 md:space-y-7  lg:space-y-0 lg:grid lg:gap-6 lg:grid-cols-2">
              <div className="w-full rounded-3xl flex flex-col  shadow-sm bg-stone-100">
                <div className="grid md:grid-cols-10 py-12 px-6 justify-center ">
                  <div className="px-2 md:px-8 text-left md:col-span-6  mt-4 md:mt-16 lg:mt-12 3xl:mt-20">
                    <h2 className="font-bold text-2xl md:text-4xl">
                      Father's Day Card Example
                    </h2>
                    <p className="text-gray-600 text-sm md:text-lg pt-3">
                    Show your Dad how much you care with a timeless and thoughtful card. We avoid rude and cheeky cards. Note, the actual card may vary.
                    </p>
                  </div>
                  <div className="md:col-span-4 h-full mt-12 px-2 md:px-8 lg:px-0 lg:mt-0">
                    <div className="bg-white shadow rounded md:rounded-2xl m-auto ">
                      <img
                        className="rounded-xl px-2 py-2 object-cover h-full w-full"
                        src={fday}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-3xl flex flex-col  shadow-sm bg-slate-100">
                <div className="grid md:grid-cols-10 py-12 px-6 justify-center ">
                  <div className="px-2 md:px-8 text-left md:col-span-6  mt-4 md:mt-16 lg:mt-12 3xl:mt-20">
                    <h2 className="font-bold text-2xl md:text-4xl">
                      Mother's Day Card Example
                    </h2>
                    <p className="text-gray-600 text-sm md:text-lg pt-3 pt-3">
                      Surprise your Mum with a pleasing card. We avoid cheesy and cliché cards, and instead focus on elegant and thoughtful designs. Note, actual card may vary.
                    </p>
                  </div>
                  <div className="md:col-span-4 h-full mt-12 px-2 md:px-8 lg:px-0 lg:mt-0">
                    <div className="bg-white shadow rounded md:rounded-2xl m-auto ">
                      <img
                        className="rounded-xl px-2 py-2 object-cover h-full w-full"
                        src={mday}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Features;