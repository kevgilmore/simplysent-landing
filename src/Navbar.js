import { useState, useEffect } from "react"
export const Navbar = () => {
  const isBrowser = () => typeof window !== "undefined"

  const initEventListeners = () => {
    if (isBrowser()) {
      window.addEventListener("resize", handleWindowResize)
    }
  }

  const removeEventListeners = () => {
    if (isBrowser()) {
      window.removeEventListener("resize", handleWindowResize)
    }
  }

  function handleWindowResize() {
    setWidth(window.innerWidth)
  }

  let [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)

  const [width, setWidth] = useState(0)

  const checkWidth = width <= 1024

  useEffect(() => {
    setWidth(window.innerWidth)

    initEventListeners()

    return () => {
      removeEventListeners()
    }
  }, [])

  const getMobileClasses = () => {
    if (!checkWidth) {
      return "flex flex-row items-center "
    } else if (checkWidth && !isMobileDropdownOpen) {
      return "hidden"
    } else if (checkWidth && isMobileDropdownOpen) {
      return "flex flex-col space-y-2"
    }
  }

  return (
    <header className="text-base w-[90%] mx-auto pt-6 pb-2">
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap items-center justify-between">
          <a className="flex font-medium text-gray-900 ">
            <img
              className="object-contain object-center rounded-3xl w-36 h-10 "
              alt="hero"
              src={
                "https://res.cloudinary.com/dnzjbmzag/image/upload/v1695361206/CompanyLogo.png"
              }
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className={
              "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            }
            aria-controls="navbar-default"
            aria-expanded={isMobileDropdownOpen}
            onClick={() => {
              setIsMobileDropdownOpen(!isMobileDropdownOpen)
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <ul
            className={`w-full lg:w-auto block lg:inline flex-grow lg:grow-0 ${
              isMobileDropdownOpen ? "block pt-6" : "hidden"
            }`}
          >
            <li className="mr-5 block lg:inline hover:text-gray-900 cursor-pointer">
              <a className="mr-5 pr-4 text-[#6A65FF] font-semibold cursor-pointer">
                Home
              </a>
            </li>
            <li className="mr-5 block lg:inline hover:text-gray-900 cursor-pointer">
              <a className="mr-5 pr-4 text-[#453878] hover:text-gray-900 cursor-pointer">
                Features
              </a>
            </li>
            <li className="mr-5 block lg:inline hover:text-gray-900 cursor-pointer">
              <a className="mr-5 pr-4 text-[#453878] hover:text-gray-900 cursor-pointer">
                Product
              </a>
            </li>

            <li className="mr-5 block lg:inline hover:text-gray-900 cursor-pointer">
              <a className="mr-5 pr-4 text-[#453878] hover:text-gray-900 cursor-pointer">
                FAQs
              </a>
            </li>
          </ul>

          <div
            className={`${getMobileClasses()} lg:space-x-6 lg:space-y-0 lg:flex-row inline-flex py-2 lg:px-4 text-base mt-2 lg:mt-0`}
          >
          </div>
        </div>
      </nav>
    </header>
  )
}


export default Navbar;
