import heroImg from '../img/hero1.jpg';

export const Hero = () => {
  return (
<section className="h-screen w-4/5 mx-auto mt-6 md:mt-24">
  <div className="pt-8 grid grid-cols-1 md:grid-cols-10 gap-12 md:gap-24 mx-8 mx-auto ">
    <div className="pt-8 md:pt-20 mt-8 md:col-span-4 text-center md:text-left">
      <h1 className="font-medium pt-4 text-5xl md:text-7xl  text-zinc-800 tracking-relaxed ">
        Build fast dashboards in minutes
      </h1>
      <p className="font-regular text-xl text-zinc-500 pt-4 mt-2 ">
        Get started now with a free trial to try out our free app.
      </p>
      <div className="flex flex-row mx-auto justify-center md:justify-start mt-4 pt-4">
        <button
          className="text-white bg-indigo-500 hover:bg-indigo-700 transition focus:ring-4  focus:ring-blue-300 font-semibold rounded-lg text-base md:text-lg  px-8 py-4 mr-2 mb-2 focus:outline-none"
          type="button"
        >
          Get Started
        </button>
      </div>
    </div>
    <div className=" w-full rounded-xl md:col-span-6">
      <img
        className="object-cover h-full rounded-xl"
        src="https://source.unsplash.com/PNodyzJcccA/1700x950"
      />
    </div>
  </div>
</section>
  )
}

export default Hero;