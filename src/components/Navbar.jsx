"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
// import { useGlobalContext } from "../context/useGlobalContext";
import { VscMenu } from "react-icons/vsc";
import { IoCloseOutline } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
gsap.registerPlugin(useGSAP);
function Navbar({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuBox = useRef(null);
  const nav = useRef(null);
  // const { isOpenMenu, setIsOpenMenu } = useGlobalContext();

  // console.log("isOpenMenu", isOpenMenu);

  useGSAP(() => {
    const menuBox = document.querySelector("#menu_box");
    const menuLinks = gsap.utils.toArray(".menu_link");
    const logoSecondPart = document.getElementById("logo_second_part");
    const open_menu_large_btn = document.getElementById("open_menu_large_btn");
    const nav_menu_bar = document.getElementById("nav_menu_bar");

    const openMenuBtn = gsap.utils.toArray(".open_menu_btn");
    const closeMenuBtn = gsap.utils.toArray(".close_menu_btn");

    const openTl = gsap.timeline();
    // openTl
    //   .set(menuBox, { left: "-100%" })
    //   .to(menuBox, { left: "0%", duration: 0.5, ease: "power2.out" })
    //   .from(menuLinks, {
    //     xPercent: -100,
    //     opacity: 0,
    //     duration: 0.5,
    //     stagger: 0.1,
    //     ease: "power2.out",
    //   });

    openTl.set(menuBox, { right: "-100%" });

    gsap.from(open_menu_large_btn, {
      duration: 0.5,
      transform: "scale(0)",
      scrollTrigger: {
        trigger: "#open_menu_large_btn",
        start: "top top",

        pin: true,
        toggleActions: "play none none reverse",
        // onUpdate: () => {
        //   const { scrollY } = window;

        //   featuredProject.style.transform = `translate3d(0px , 0px, 0px) !important`;
        // },
      },
    });
    gsap.to(nav_menu_bar, {
      opacity: 0,
      pointerEvents: "none",
      y: "50px",
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#nav_menu_bar",
        start: "top top",

        // pin: true,
        toggleActions: "play none none reverse",
        // onUpdate: () => {
        //   const { scrollY } = window;

        //   featuredProject.style.transform = `translate3d(0px , 0px, 0px) !important`;
        // },
      },
    });

    openTl.to(menuBox, { right: "0%", duration: 0.2 });
    openTl.to(logoSecondPart, { color: "black", duration: 0.2 });
    openTl.from(menuLinks, {
      xPercent: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      // ease: "power2.out",
    });

    openTl.pause();

    if (openMenuBtn) {
      openMenuBtn.forEach((item) => {
        item.addEventListener("click", () => {
          openTl.play();
          console.log(openMenuBtn, closeMenuBtn, "openMenuBtn, closeMenuBtn,");
          // setShowMenu(true);
        });
      });
    }

    if (closeMenuBtn) {
      closeMenuBtn.forEach((item) => {
        item.addEventListener("click", () => {
          console.log(closeMenuBtn, " closeMenuBtn,");
          openTl.reverse();
          // setShowMenu(false);
        });
      });
    }
  }, []);

  const handleMenu = (value) => {
    setShowMenu(value);

    const menuLinks = document.querySelectorAll(".menu_link");
    const menuBox = document.querySelector("#menu_box");

    // Kill any existing animations
    gsap.killTweensOf([menuBox, ...menuLinks]);

    // if (value) {
    //   // Opening animation
    //   const openTl = gsap.timeline();
    //   openTl
    //     .set(menuBox, { left: "-100%" })
    //     .to(menuBox, { left: "0%", duration: 0.5, ease: "power2.out" })
    //     .from(menuLinks, {
    //       xPercent: -100,
    //       opacity: 0,
    //       duration: 0.5,
    //       stagger: 0.1,
    //       ease: "power2.out",
    //     });
    // } else {
    //   // Closing animation
    //   const closeTl = gsap.timeline();
    //   closeTl
    //     .to(menuLinks.slice().reverse(), {
    //       xPercent: -100,
    //       opacity: 0,
    //       duration: 0.5,
    //       stagger: 0.1,
    //       ease: "power2.in",
    //     })
    //     .to(menuBox, {
    //       left: "-100%",
    //       duration: 0.5,
    //       ease: "power2.in",
    //     });

    //   // menuLinks.slice().reverse();
    // }
  };

  useEffect(() => {
    if (menuBox.current && window.innerWidth > 960) {
      menuBox.current.classList.remove("unactive");
    }

    const handleScroll = () => {
      if (!nav.current) return;
      const scrolling = window.scrollY;

      if (scrolling > 100) {
        nav.current.classList.remove("absolute");
        nav.current.classList.add("fixed", "bg-dark-200", "py-2");
        nav.current.classList.remove("py-9");
      } else {
        nav.current.classList.add("absolute", "py-9");
        nav.current.classList.remove("py-2", "fixed", "bg-dark-200");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 ">
        <div
          className="navbar m-auto flex items-center justify-between text-white px-6 py-9 transition-all duration-200 w-full"
          // ref={nav}
        >
          <div className="navbar-start">
            <a href="#" className="text-[1.7rem] font-bold relative z-50">
              <span className="text-gray-400">Aadel</span>{" "}
              <span
                id="logo_second_part"
                className="transition-all duration-500 inline-block md:hidden"
              >
                Banat
              </span>
              <span className="transition-all duration-500 hidden md:inline-block">
                Banat
              </span>
            </a>
          </div>

          <button className="w-[50px] h-[50px] flex lg:hidden justify-center items-center rounded-full border border-gray-700 open_menu_btn">
            <VscMenu size={30} />
          </button>
          <button
            className="w-[50px] h-[50px] hidden lg:flex justify-center items-center rounded-full border border-gray-700 open_menu_btn absolute top-5 right-10 bg-gray-200 text-black"
            id="open_menu_large_btn"
          >
            <VscMenu size={30} />
          </button>
          {/* <button className="w-[50px] h-[50px] flex lg:hidden justify-center items-center rounded-full border border-gray-700 open_menu_btn absolute top-6 right-10 z-40 cursor-pointer">
            <VscMenu size={30} />
          </button> */}

          {/* <ToggleMenu isOpen={showMenu} setIsOpen={handleMenu} /> */}

          <ul
            className={` items-center gap-8 text-[1rem] mr-20 font-medium hidden lg:flex flex-col lg:flex-row bg-white rounded-lg lg:bg-transparent absolute lg:static top-full right-0 sm:right-6 w-full sm:w-1/3 lg:w-fit py-8 lg:py-0 text-dark-300 lg:text-white transition-all duration-300 `}
            id="nav_menu_bar"
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
                href="/contact"
                className="after:content-['Contact'] after:block after:text-[#FFD369] group-hover:my-[-1.7rem] block transition-all after:transition-all ease-linear duration-200"
              >
                Contact
              </Link>
            </li>
            <li className="relative h-[1.7rem] overflow-hidden group cursor-pointer">
              <Link
                href="/TestingPage"
                className="after:content-['Contact'] after:block after:text-[#FFD369] group-hover:my-[-1.7rem] block transition-all after:transition-all ease-linear duration-200"
              >
                Test
              </Link>
            </li> */}
          </ul>

          <ul
            className={`flex flex-col gap-4 fixed -right-full z-40 top-0 bottom-0  justify-center items-center transition-all duration-500 bg-white text-black py-10 w-full max-w-[500px]  `}
            ref={menuBox}
            id="menu_box"
          >
            <motion.li className=" absolute top-8 right-5 md:left-5 border rounded-full w-[50px] h-[50px] flex justify-center items-center bg-black text-white close_menu_btn hover:scale-125 transition-all duration-300">
              <button>
                <IoCloseOutline size={30} />
              </button>
            </motion.li>
            <li className="relative menu_link  group cursor-pointer close_menu_btn">
              <Link
                href="/"
                className=" block transition-all scale-100 hover:scale-150 after:transition-all ease-linear duration-200 text-3xl"
              >
                Introduce
              </Link>
            </li>
            <li className="relative menu_link text-3xl  cursor-pointer close_menu_btn ">
              <Link
                href="/resume"
                className="block transition-all scale-100 hover:scale-150 after:transition-all ease-linear duration-200"
              >
                Resume
              </Link>
            </li>
            <li className="relative menu_link text-3xl  cursor-pointer close_menu_btn ">
              <Link
                href="/project"
                className="block transition-all scale-100 hover:scale-150 after:transition-all ease-linear duration-200"
              >
                Work
              </Link>
            </li>
            {/* <li className="relative menu_link text-3xl  cursor-pointer close_menu_btn  ">
              <Link
                href="/contact"
                className="block transition-all scale-100 hover:scale-150 after:transition-all ease-linear duration-200"
              >
                Contact
              </Link>
            </li>
            <li className="relative menu_link text-3xl  cursor-pointer close_menu_btn  ">
              <Link
                href="/TestingPage"
                className="block transition-all scale-100 hover:scale-150 after:transition-all ease-linear duration-200"
              >
                Test
              </Link>
            </li> */}
            <li className="container grid grid-cols-7 h-full absolute top-0 left-[50%] translate-x-[-50%] pointer-events-none">
              <div className="border-l-[0.1px] border-gray-400"></div>
              <div className="border-l-[0.1px] border-gray-400"></div>
              <div className="border-l-[0.1px] border-gray-400"></div>
              <div className="border-l-[0.1px] border-gray-400"></div>
              <div className="border-l-[0.1px] border-gray-400"></div>
              <div className="border-l-[0.1px] border-gray-400"></div>
              <div className="border-x-[0.1px] border-gray-400"></div>
            </li>
          </ul>

          {/* <button
            className="text-white text-4xl"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <RiMenu3Fill />
          </button> */}
        </div>
      </header>
    </>
  );
}

export default Navbar;
