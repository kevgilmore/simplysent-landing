import heroImg from '../img/hero1.jpg';

export const Hero = () => {
  return (
<div className="md:h-screen">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:ml-12">
    <div className="pt-16 md:pt-32 mt-12 text-center md:text-left ">
      <h1 className="font-extrabold text-3xl md:text-5xl">
        A Powerful Calendar for Collaborative Teams
      </h1>
      <p className="w-4/5 mx-auto md:w-full text-gray-600 text-base md:text-lg pt-2 mt-2">
        Insights you can rely on, with an integrated dashboard, 24/7 customer support and more
      </p>
      <div className="flex flex-row mx-auto justify-center md:justify-start mt-4 pt-2">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          type="button"
        >
          Get Started
        </button>
        <button
          className="text-blue-800 bg-blue-100 hover:bg-blue-200  focus:ring-4 focus:ring-blue-300 font-regular rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none"
          type="button"
        >
          More Info
        </button>
      </div>
    </div>
    <div className="h-3/4">
      <img
        className="mt-12 md:mt-32 w-5/6 mx-auto h-full object-cover md:ml-12 rounded-xl"
        src="https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFwdG9wfHx8fHx8MTY5NjQ2MDI4NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=720"
      />
    </div>
  </div>
</div>
  )
}

export default Hero;