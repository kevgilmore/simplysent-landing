const Features1 = () => {
    return (
        

<section className="bg-[#F9F9FF] ">
  <section className="text-gray-600 w-4/5 mx-auto pt-6">
    <div className="container mx-auto flex px-5 py-10 md:py-24 md:flex-row flex-col items-center">
      <div className="mb-8 md:mb-0 md:w-1/2 flex flex-col md:items-start md:text-left  items-center text-center ">
        <h1 className="md:w-5/6 sm:text-4xl text-4xl mb-6 font-semibold text-[#030647]">
          Create{' '}
          <span className="text-[#007AFF]">
            Tasks And Notes{' '}
          </span>
          With Ease
        </h1>
        <p className="mb-6 font-inter leading-relaxed font-normal text-lg text-[#56687B] md:w-[70%]">
          With our calendar app, you can{' '}
          <span className="text-[#007AFF] font-semibold">
            quickly create notes and tasks
          </span>
          {' '}to help you plan and organize your tasks and projects.
        </p>
      </div>
      <div className=" md:pl-12 md:ml-12 h-full w-full md:w-1/2 w-5/6  ">
        <div className=" rounded-3xl mb-10 md:mb-0 featureGradient1 py-6">
          <img
            alt="hero"
            className=" m-auto rounded-3xl "
            src="https://res.cloudinary.com/dnzjbmzag/image/upload/v1696014675/Chart8.png"
          />
        </div>
      </div>
    </div>
  </section>
  <section className="w-4/5 mx-auto bg-[#F9F9FF] pb-8 md:pb-0 ">
    <div className="container mx-auto flex px-5 py-10 md:py-24 md:flex-row flex-col items-center">
      <div className="h-full w-full rounded-3xl md:w-1/2 w-5/6 mb-10 md:mb-0 featureGradient1">
        <img
          alt="hero"
          className="rounded-3xl px-16 my-12"
          src="https://res.cloudinary.com/dnzjbmzag/image/upload/v1696014460/dashboardChart.png"
        />
      </div>
      <div className="md:w-1/2  flex flex-col md:pl-12 md:ml-12 md:items-start md:text-left  items-center text-center ">
        <h1 className="md:w-5/6 sm:text-4xl text-4xl mb-4 font-semibold text-[#030647]">
          Streamline your{' '}
          <span className="text-[#007AFF]">
            Workflow{' '}
          </span>
          In Seconds
        </h1>
        <p className="mb-4 font-inter leading-relaxed text-lg text-[#56687B] font-normal md:w-4/5">
          With our calendar app, you can{' '}
          <span className="text-[#007AFF] font-semibold">
            quickly create notes and tasks
          </span>
          {' '}to help you plan and organize your tasks projects.
        </p>
      </div>
    </div>
  </section>
</section>

    )
}

export default Features1;