"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // useGSAP(() => {
  //   const footer = document.getElementById("footerArea");
  //   const thanks = document.getElementById("thanks");
  //   const latestProjectsTitle = document.getElementById(
  //     "latest-projects-title"
  //   );
  //   const projectLinks = gsap.utils.toArray(".footer_project_link");
  //   gsap.set(projectLinks, { y: 100 });

  //   if (!footer) {
  //     console.warn("Footer element not found!");
  //     return;
  //   }

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#footerArea",
  //       // toggleActions: "replay none none repeat",
  //     },
  //   });
  //   tl.from(thanks, {
  //     y: "-100%",
  //     duration: 0.5,
  //     ease: "power2.out",
  //   });
  //   tl.from(latestProjectsTitle, {
  //     y: "-100%",
  //     duration: 0.5,
  //     ease: "power2.out",
  //   });

  //   tl.to("#latest-projects-title-line", {
  //     width: "100%",
  //     duration: 3,
  //     ease: "power2.out",
  //     onStart: () => {
  //       gsap.to(projectLinks, {
  //         y: -100,
  //         duration: 1,
  //         ease: "power2.out",
  //         //   opacity: 0,
  //         stagger: 0.2,
  //         onStart: () => {
  //           console.log("start");
  //           console.log(projectLinks);
  //         },
  //       });
  //     },
  //   });

  //   // gsap.from(footer, {
  //   //   y: "100%",
  //   //   duration: 0.5,
  //   //   ease: "power2.out",
  //   //   scrollTrigger: {
  //   //     trigger: "#footerArea",
  //   //     start: "top bottom",
  //   //     // scrub: 1,
  //   //     // pin: true,
  //   //     toggleActions: "play none none none",
  //   //   },
  //   // });
  // });

  useGSAP(() => {
    const footer = document.getElementById("footerArea");
    const thanks = document.getElementById("thanks");
    const scrollToTop = document.getElementById("scroll-to-top");

    const latestProjectsTitle = document.getElementById(
      "latest-projects-title"
    );
    const latestProjectsTitleLine = document.getElementById(
      "latest-projects-title-line"
    );
    const projectLinks = gsap.utils.toArray(".footer_project_link");

    if (
      !footer ||
      !thanks ||
      !latestProjectsTitle ||
      !latestProjectsTitleLine
    ) {
      console.warn("One or more elements are missing!");
      return;
    }

    const projectLinksTimeLine = gsap.timeline();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#footerArea",
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(thanks, {
      y: "-100%",
      duration: 0.5,
      ease: "power2.out",
    });

    tl.from(latestProjectsTitle, {
      y: "-100%",
      duration: 0.5,
      ease: "power2.out",
      onStart: () => {
        gsap.to(scrollToTop, {
          transform: "scale(1)",
          opacity: 1,
          duration: 0.5,
          ease: "slow(0.7,0.7,false)",
        });
      },
    });

    tl.to(latestProjectsTitleLine, {
      width: "100%",
      duration: 1.5,
      ease: "power2.out",
      onStart: () => {
        console.log("onStart triggered! Restarting projectLinksTimeLine...");
        gsap.to(projectLinks, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.1,
        });
      },
    });
  });

  return (
    <footer
      id="footerArea"
      className="footer overflow-hidden  bg-white pb-4  text-neutral grid grid-cols-4 justify-center gap-3 px-6 lg:px-28 font-semibold  rounded-tl-[180px] rounded-tr-[180px] w-[94%] mx-auto"
    >
      {/* <aside>
        <header className="footer-title">Services</header>
        <ul className="space-y-2 ">
          <li className="translate-x-0 hover:translate-x-4 transition-all duration-500">
            <Link href="/">Introduce</Link>
          </li>
          <li className="translate-x-0 hover:translate-x-4 transition-all duration-500">
            <Link href="/resume">Resume</Link>
          </li>
          <li className="translate-x-0 hover:translate-x-4 transition-all duration-500">
            <Link href="/project">Projects</Link>
          </li>
          <li className="translate-x-0 hover:translate-x-4 transition-all duration-500">
            <Link href="/work">Work</Link>
          </li>
          <li className="translate-x-0 hover:translate-x-4 transition-all duration-500">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </aside> */}
      <h2
        className="text-center text-md text-gray-600 pt-4 col-span-full"
        id="thanks"
      >
        Thanks for Watching
      </h2>
      <aside className="col-span-3 mr-4 hidden md:block">
        <header
          className="footer-title mb-2 text-2xl pb-1 font-bold  relative"
          id="latest-projects-title"
        >
          Latest Projects
          <span
            className="absolute left-0 w-0 h-[1px] bg-gray-600 bottom-0"
            id="latest-projects-title-line"
          ></span>
        </header>
        <div className="max-h-[50px] flex flex-col gap-4 md:gap-3 flex-wrap">
          <a
            className="  link link-hover  opacity-0 translate-y-[100px] footer_project_link "
            href="https://assignment-11-lyart.vercel.app/"
            target="_black"
          >
            HomeSwapHub
          </a>
          <a
            className="  link link-hover  opacity-0 translate-y-[100px] footer_project_link "
            href="https://assignment-12-fawn.vercel.app/"
            target="_black"
          >
            WanderWise
          </a>
          <a
            className="  link link-hover  opacity-0 translate-y-[100px] footer_project_link "
            href="https://trade-haven.vercel.app/"
            target="_black"
          >
            TradeHaven
          </a>
          <a
            className="  link link-hover  opacity-0 translate-y-[100px] footer_project_link "
            href="https://assignment-10-nu-nine.vercel.app/"
            target="_black"
          >
            TechHaven
          </a>
          <a
            className=" link link-hover  opacity-0 translate-y-[100px] footer_project_link "
            href="https://my-ecommarce-website-wepe.vercel.app/"
            target="_black"
          >
            Furniture shop
          </a>
        </div>
      </aside>
      <button
        onClick={handleScrollTop}
        className="col-span-full lg:col-span-1 lg:bg-neutral-800 rounded-3xl text-gray-400 scale-0 opacity-0"
        id="scroll-to-top"
      >
        Scroll to top
      </button>
    </footer>
  );
}

export default Footer;
