import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export const Hero = ({ text }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    // particles loaded code here
  }, [])

  return (
    <div className="relative">
      <Particles
        id="tsparticles_32"
        className="absolute z-[1]"
        height="100vh"
        width="100%"
        style={{ height: "100vh", width: "100%" }}
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: false,
          background: {
            image: " linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
          },
          particles: {
            number: { value: 10, density: { enable: true, value_area: 600 } },
            color: { value: "#ffffff" },
            shape: {
              type: "square",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
            },
            opacity: {
              value: 0.25,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 29,
              random: true,
              anim: { enable: false, speed: 2, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: false,
              distance: 300,
              color: "#ffffff",
              opacity: 0,
              width: 0,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "top",
              straight: true,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: false, mode: "repulse" },
              onclick: { enable: false, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 800, line_linked: { opacity: 1 } },
              bubble: {
                distance: 790,
                size: 79,
                duration: 2,
                opacity: 0.8,
                speed: 3,
              },
              repulse: { distance: 400, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        }}
      />
      <section class="py-12 md:py-32 z-[10] relative" style={{ zIndex: 10 }}>
        <div class="mx-auto  h-4/5">
          <div class=" text-center pt-4 mt-4 mx-auto md:w-[70%]">
            <h1 class="font-bold tracking-loose leading-tight text-4xl md:text-7xl text-white w-7/8 mx-auto">
              The All-in-one Calendar App for SaaS Founders
            </h1>
            <p class="text-lg text-white pt-2 mt-4 text-center w-4/5  mx-auto">
              Streamline your workflow with the all-in-one calendar and
              organization app for founders. Get started with a free trial
              today, no credit card needed.
            </p>
            <div class="flex flex-row mx-auto justify-center pt-6 mt-4">
              <button
                type="button"
                class="text-white bg-[#040718] hover:drop-shadow-lg focus:ring-4 text-lg md:text-xl   focus:ring-blue-300 font-semibold rounded-lg text-sm px-16 py-5 mr-2 mb-2 focus:outline-none"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero;