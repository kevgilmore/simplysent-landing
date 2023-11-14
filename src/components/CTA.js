const CTA = () => {
    return (
<div className="pt-12 pb-12">
  <div className="rounded-2xl py-16 md:py-0 md:h-96 flex justify-center align-center shadow-lg bg-white w-5/6 mx-auto  bg-gradient-to-r via-sky-600 to-cyan-600 from-purple-600">
    <div className="text-center text-white w-4/5 m-auto pt-12 md:pt-0">
      <h1 className="text-3xl md:text-4xl font-bold">
        Sign up to get started with our calendar integration.
      </h1>
      <p className="font-regular text-base pt-4 text-gray-200">
        Sign up in just thirty seconds, and you'll have your calendars ready to go and set up.
      </p>
      <div className="pt-8 flex flex-col md:flex-row space-y-2 md:space-y-0 justify-center">
        <button
          className="text-white transition bg-slate-900 hover:bg-slate-800 focus:ring-4  focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4 md:mr-2 focus:outline-none"
          type="button"
        >
          Get Started
        </button>
        <button
          className="text-slate-800 bg-gray-100 hover:bg-gray-200  focus:ring-4 focus:ring-blue-300 font-regular rounded-lg text-sm px-8 py-4 md:mr-2 focus:outline-none"
          type="button"
        >
          More Info
        </button>
      </div>
    </div>
  </div>
</div>
    )
}

export default CTA