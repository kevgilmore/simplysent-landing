const Features1 = () => {
    return (
<section className="mt-12 pt-16 md:mb-32 w-4/5 mx-auto">
  <div className="text-center ">
    <div className="md:w-3/5 lg:w-4/5 md:mx-auto">
      <span className="badgePastelGradient uppercase rounded-2xl text-[#6A65FF]  text-sm font-normal px-5 py-2">
        Features
      </span>
      <h2 className="text-4xl text-[#0E004A] font-bold lg:text-5xl pt-3 mt-2">
        Our Cool Features
      </h2>
      <p className="mt-3 text-sm md:text-lg leading-relaxed text-[#453878] pt-2 lg:w-4/5 lg:mx-auto 3xl:w-3/5">
        Streamline your workflow with the all-in-one calendar and organization app for founders. Get started with a free trial today, no credit card needed.
      </p>
    </div>
    <div className=" mx-auto pt-6 md:px-8">
      <div className="mx-auto pt-8 space-y-12 md:space-y-7  lg:space-y-0 lg:grid lg:gap-6 lg:grid-cols-2">
        <div className="w-full rounded-3xl flex flex-col  shadow-sm cardGradient3">
          <div className="grid md:grid-cols-10 py-12 px-6 justify-center ">
            <div className="px-2 md:px-8 text-left md:col-span-6  mt-4 md:mt-16 lg:mt-12 3xl:mt-20">
              <h2 className="font-bold text-[#0E004A] font-gray-900  text-2xl">
                Create tasks and notes with ease
              </h2>
              <p className="text-sm xl:text-base text-[#453878] pt-3">
                With our calendar app, you can quickly create notes and tasks to help you plan and organize your tasks and projects.
              </p>
            </div>
            <div className="md:col-span-4 h-full mt-12 px-2 md:px-8 lg:px-0 lg:mt-0">
              <div className="bg-white shadow rounded md:rounded-2xl m-auto ">
                <img
                  className="rounded-xl px-2 py-2 object-cover h-full w-full"
                  src="https://res.cloudinary.com/dnzjbmzag/image/upload/v1695363936/CardExample1.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full rounded-3xl flex flex-col  shadow-sm cardGradient2">
          <div className="grid md:grid-cols-10 py-12 px-6 justify-center ">
            <div className="px-2 md:px-8 text-left md:col-span-6  mt-4 md:mt-16 lg:mt-12 3xl:mt-20">
              <h2 className="font-bold text-[#0E004A] font-gray-900  text-2xl">
                Streamline your workflow
              </h2>
              <p className="text-sm xl:text-base text-[#453878] pt-3">
                We also have lots of integrations with popular apps, so that you can organize and streamline your workflow.
              </p>
            </div>
            <div className="md:col-span-4 h-full mt-12 px-2 md:px-8 lg:px-0 lg:mt-0">
              <div className="bg-white shadow rounded md:rounded-2xl m-auto ">
                <img
                  className="rounded-xl px-2 py-2 object-cover h-full w-full"
                  src="https://res.cloudinary.com/dnzjbmzag/image/upload/v1695363936/CardExample1.png"
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

export default Features1;