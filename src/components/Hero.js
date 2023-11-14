import heroImg from '../img/hero1.jpg';

export const Hero = () => {
  return (
    <div className="mx-auto w-7/8 pb-24 ">
    <div className="w-7/8 mx-auto relative h-4/5 z-30 pt-24 ">
      <div className=" text-center md:pt-6 md:mt-6 mx-auto w-4/5 md:w-3/5">
        <h1 className="font-semibold tracking-tight text-5xl md:text-7xl text-gray-900 w-4/5 mx-auto">
          Get the {' '}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 text-transparent bg-clip-text">
            Concierge
          </span>
          {' '} Treatment
        </h1>
        <p className="text-base md:text-lg text-gray-500 pt-2 mt-4 text-center w-4/5 md:w-2/3  mx-auto">
          Effortless greeting card subscriptions make you the person who always remembers.
        </p>
        <div className="flex flex-row mx-auto justify-center pt-6 mt-4">
        <div data-tf-live="01HF7K4E0F2YN6BSXTPBNGYVRA"></div>
        </div>
      </div>
    </div>
    <div className="rounded-2xl relative mt-8 pt-4">
      <img
        className="rounded-2xl w-4/5 mx-auto z-30 "
        src={heroImg}
        alt="hero"
      />
    </div>
  </div>
  )
}

export default Hero;