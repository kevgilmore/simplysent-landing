import heroImg from '../img/hero2.jpg';

export const Hero2 = () => {
  return (
    <section className="h-screen w-4/5 mx-auto mt-6 md:mt-24">
      <div className="pt-8 grid grid-cols-1 md:grid-cols-10 gap-12 md:gap-24 mx-8 mx-auto ">
        <div className="pt-8 md:pt-20 mt-8 md:col-span-4 text-center md:text-left">


          <h1 className="font-sans font-bold pt-4 text-5xl md:text-7xl text-zinc-800 tracking-relaxed ">
          Get the {' '}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#2e0553] text-transparent bg-clip-text">
            Concierge
          </span>
          {' '} Treatment
        </h1>

          <p className="font-regular text-xl text-zinc-500 pt-4 mt-2 ">
            Effortless greeting card subscriptions make you the person who always remembers.
          </p>
          <div className="flex flex-row mx-auto justify-center md:justify-start mt-4 pt-4">
            <div className="typeform-btn" data-tf-live="01HF7K4E0F2YN6BSXTPBNGYVRA"></div>
          </div>
        </div>
        <div className=" w-full rounded-xl md:col-span-6">
          <img
            className="object-cover h-full rounded-xl"
            src={heroImg}
            alt='hero'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero2;