import insideCardImg from '../img/insideCard.jpg'
import plotterImg from '../img/plotter.jpg'

const Details = () => {
    return (
<div>
  <div className="h-3/5">
    <div className="mt-12 mx-auto ">
      <div className="container mx-auto lg:grid lg:gap-8 lg:grid-cols-2 text-center md:text-left">
        <div className="pt-16 pb-12 md:pl-16 md:mt-24 flex items-center flex-col w-full">
          <h1 className="w-5/6 sm:text-4xl text-3xl mb-4 font-bold text-slate-800">
            Scheduling has never been easier
          </h1>
          <p className="mb-8 text-lg text-slate-700 font-normal leading-relaxed w-5/6">
            Create appointments and schedule your plans on the go, with our calendar app. It's available for the web, desktop, and mobile devices too. You can create plans and to-do lists on-the-go in seconds, with our intuitive and feature-packed interface.
          </p>
        </div>
        <div className="">
          <img
            className="rounded-3xl m-auto"
            src={insideCardImg}
          />
        </div>
      </div>
    </div>
  </div>
  <div className="">
    <div className="mt-12 mx-auto text-center md:text-left">
      <div className="container mx-auto lg:grid lg:gap-8 lg:grid-cols-2">
        <div className="h-lg">
          <img
            className="rounded-3xl m-auto"
            src={plotterImg}
          />
        </div>
        <div className="pt-16 pb-12 md:pl-16 mt-24 flex flex-col w-full items-center">
          <h1 className="w-5/6 sm:text-4xl text-3xl mb-4 font-bold text-slate-800">
            Scheduling has never been easier
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-slate-700 font-normal w-5/6">
            Create appointments and schedule your plans on the go, with our calendar app. It's available for the web, desktop, and mobile devices too. You can create plans and to-do lists on-the-go in seconds, with our intuitive and feature-packed interface.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Details