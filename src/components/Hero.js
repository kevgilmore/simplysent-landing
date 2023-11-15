import heroImg from '../img/hero1.png';
import Typeform from './Typeform';

export const Hero = () => {
  return (
    <div className="md:h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:ml-12">
        <div className="pt-16 md:pt-32 mt-12 text-center md:text-left ">
          <h1 className="font-extrabold text-3xl md:text-5xl">
          Get the {' '}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#2e0553] text-transparent bg-clip-text">
                Concierge
              </span>
              {' '} Treatment
            </h1>
          <p className="w-4/5 mx-auto md:w-full text-gray-600 text-base md:text-lg pt-2 mt-2">
          Effortless greeting card subscriptions make you the person who always remembers.
          </p>
          <div className="flex flex-row mx-auto justify-center md:justify-start mt-4 pt-2">

          <Typeform />

          </div>
        </div>
        <div className="h-3/4">
          <img
            className="mt-12 md:mt-32 w-5/6 mx-auto h-full object-cover md:ml-12 rounded-xl"
            src={heroImg}
            alt="hero"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;