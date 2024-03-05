import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { useGlobalContext } from "../context/useGlobalContext";

function Navber({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuBox = useRef();
  const nav = useRef();
  const { isOpenMenu, setIsOpenMenu } = useGlobalContext();

  console.log("isOpenMenu", isOpenMenu);
  const handleMenu = (value) => {
    setShowMenu(value);
  };

  useEffect(() => {
    if (window.innerWidth > 960) {
      menuBox.current.classList.remove("unactive");
    }

    window.addEventListener("scroll", () => {
      let scrolling = window.scrollY;

      if (scrolling > 100) {
        nav.current.classList.remove("absolute");
        nav.current.classList.add("fixed", "bg-dark-200", "py-2");
        nav.current.classList.remove("py-9");
      } else {
        nav.current.classList.add("absolute", "py-9");
        nav.current.classList.remove("py-2", "fixed", "bg-dark-200");
      }
    });
  }, []);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50">
        <div
          className="navbar m-auto flex items-center justify-between text-white px-6 py-9 transition-all duration-200"
          ref={nav}
        >
          <div className="navbar-start">
            <a href="#" className="text-[1.7rem] font-bold">
              <span className="text-gray-400">Aadel</span> Banat
            </a>
          </div>

          <div className="dropdown flex lg:hidden">
            <label className="btn btn-circle swap swap-rotate">
              {/* <!-- this hidden checkbox controls the state --> */}
              <input
                type="checkbox"
                value={showMenu}
                onChange={(e) => handleMenu(e.target.checked)}
              />

              {/* <!-- hamburger icon --> */}
              <svg
                className={`swap-off fill-current`}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              <svg
                className={`swap-on fill-current`}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>

          <ul
            className={`items-center gap-8 text-[1rem] font-medium hidden lg:flex flex-col lg:flex-row bg-white rounded-lg lg:bg-transparent absolute lg:static top-full right-0 sm:right-6 w-full sm:w-1/3 lg:w-fit py-8 lg:py-0 text-dark-300 lg:text-white transition-all duration-300  ${
              showMenu ? "active" : "unactive"
            } `}
            ref={menuBox}
          >
            <li className="relative h-[1.7rem] overflow-hidden group cursor-pointer">
              <Link
                href="/"
                className="after:content-['Introduce'] after:block after:text-[#FFD369] group-hover:my-[-1.7rem] block transition-all after:transition-all ease-linear duration-200"
              >
                Introduce
              </Link>
            </li>
            <li className="relative h-[1.7rem] overflow-hidden group">
              <Link
                href="/resume"
                className="after:content-['Resume'] after:block after:text-[#FFD369] group-hover:my-[-1.7rem] block transition-all after:transition-all ease-linear duration-200"
              >
                Resume
              </Link>
            </li>
            <li className="relative h-[1.7rem] overflow-hidden group">
              <Link
                href="/project"
                className="after:content-['Work'] after:block after:text-[#FFD369] group-hover:my-[-1.7rem] block transition-all after:transition-all ease-linear duration-200"
              >
                Work
              </Link>
            </li>
            {/* <li className="relative h-[1.7rem] overflow-hidden group cursor-pointer">
              <Link

                href="/work"
                className="after:content-['Work'] after:block after:text-[#FFD369] group-hover:my-[-1.7rem] block transition-all after:transition-all ease-linear duration-200">Work</Link>
            </li> */}
            <li className="relative h-[1.7rem] overflow-hidden group cursor-pointer">
              <Link
                href="/contact"
                className="after:content-['Contact'] after:block after:text-[#FFD369] group-hover:my-[-1.7rem] block transition-all after:transition-all ease-linear duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>

          <button
            className="text-white text-4xl"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <RiMenu3Fill />
          </button>
        </div>
      </header>
    </>
  );
}

export default Navber;
