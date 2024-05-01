import Typeform from "./Typeform"

const CTA = () => {
    return (
      <div className="pt-12 pb-12">
        <div className="rounded-2xl py-16 md:py-0 md:h-96 flex justify-center align-center shadow-lg bg-white w-5/6 mx-auto  bg-gradient-to-t to-[#2e0553] via-purple-400 from-purple-600">
          <div className="text-center text-white w-4/5 m-auto pt-12 md:pt-0">
            <h1 className="font-bold text-gray-100 text-2xl md:text-4xl">
            Sign up in two minutes and never worry about forgetting another card again.
            </h1>
            <div className="pt-8 flex flex-col md:flex-row space-y-2 md:space-y-0 justify-center">
              <Typeform/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CTA