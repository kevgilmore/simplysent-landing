/* eslint-disable jsx-a11y/alt-text */

import './App.css';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <section className="bg-[#F4FDFF] md:pb-24">
        <div className="w-4/5 mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            <div className="pt-8 md:pt-16 mt-4 md:mt-12 3xl:mt-36 lg:w-4/5 text-center lg:text-left">
              <span className="badgePastelGradient rounded-2xl text-[#6A65FF] uppercase text-sm font-medium px-4 py-2">
                Our Goal Is Simple
              </span>
              <h1 className="font-bold text-[#0E004A] md:text-5xl text-4xl md:leading-[130%]   pt-1 mt-2">
                The All-In-One Calendar App For SaaS Founders
              </h1>
              <p className="font-base text-base md:text-lg text-[#453878] pt-2 mt-2 ">
                Streamline your workflow with the all-in-one calendar and organization app for founders. Get started with a free trial today, no credit card needed.{'                    '}
              </p>
              <div className="mt-3 pt-5">
                <button
                  className="text-white bg-[#6A65FF] shadow-none  focus:ring-4 text-base focus:ring-blue-300 font-medium rounded-3xl  px-7 py-3 mr-4 mb-2  focus:outline-none"
                  type="button"
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="">
              <img
                className="h-full 3xl:h-[90%] w-full object-contain ml-0 lg:ml-12 rounded-xl"
                src="https://res.cloudinary.com/dnzjbmzag/image/upload/v1695361692/HeroImageTemplate4.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
