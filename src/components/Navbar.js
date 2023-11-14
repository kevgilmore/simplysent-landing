import logo from '../img/logo_white.png'

export const Navbar = () => {
  return (
    <header className="text-base w-[90%] mx-auto pt-6 pb-2">
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap items-center justify-between">
          <a className="flex font-medium text-gray-900" href="/">
            <img
              className="object-contain object-center rounded-3xl w-38 h-10 "
              alt="hero"
              src={logo}
            />
          </a>
        </div>
      </nav>
    </header>
  )
}


export default Navbar;
