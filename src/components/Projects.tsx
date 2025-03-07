import { projects } from "../lib/data";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaReact } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import { RiJavascriptFill } from "react-icons/ri";
import { SiGreensock, SiNextdotjs } from "react-icons/si";

function Projects() {
  const [showPageTitle, setShowPageTitle] = useState("HTML Page");
  const { html_page, nextJs, reactJs, js_mini_project, gsap_project } =
    projects;

  const rightArrow = useRef<HTMLDivElement>(null);
  const leftArrow = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLDivElement>(null);
  const buttons = useRef<HTMLDivElement>(null);
  const html = useRef<HTMLDivElement>(null);
  const react = useRef<HTMLDivElement>(null);
  const next = useRef<HTMLDivElement>(null);
  const gsapProject = useRef<HTMLDivElement>(null);
  const miniProject = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (typeof window === "undefined") return;

  //   let responsive =
  //     window.innerWidth >= 1024 && window.innerWidth <= 1220 ? 1 : 0;

  //   if (window.innerWidth >= 1024) {
  //     const proxy = { skew: 0 };
  //     const skewSetter = gsap.quickSetter(".boxImage", "skewY", "deg");
  //     const clamp = gsap.utils.clamp(-20, 20);

  //     let sections = gsap.utils.toArray<HTMLElement>(".boxImage");

  //     gsap.to(sections, {
  //       xPercent: -100 * (sections.length + responsive),
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ".imageContainer",
  //         pin: true,
  //         onUpdate: (self) => {
  //           let skew = clamp(self.getVelocity() / 2600);
  //           if (Math.abs(skew) > Math.abs(proxy.skew)) {
  //             proxy.skew = skew;
  //             gsap.to(proxy, {
  //               skew: 0,
  //               duration: 0.8,
  //               overwrite: true,
  //               ease: "power3",
  //               onUpdate: () => skewSetter(proxy.skew),
  //             });
  //           }
  //         },
  //         scrub: 1,
  //         end: () =>
  //           `+=${document.querySelector(".imageContainer")?.offsetWidth || 0}`,
  //       },
  //     });
  //   }

  //   const html_scroll_point = window.innerHeight;
  //   const react_scroll_point =
  //     html_scroll_point + (html.current?.clientWidth || 0);
  //   const next_scroll_point =
  //     react_scroll_point + (react.current?.clientWidth || 0);
  //   const jsMiniProject_scroll_point =
  //     next_scroll_point + (next.current?.clientWidth || 0);
  //   const gsapProject_scroll_point =
  //     jsMiniProject_scroll_point + (miniProject.current?.clientWidth || 0);

  //   const handleScroll = () => {
  //     const scrolling = window.scrollY;

  //     if (scrolling <= react_scroll_point + 540) {
  //       setShowPageTitle("HTML Page");
  //     } else if (
  //       scrolling >= react_scroll_point + 545 &&
  //       scrolling < next_scroll_point + 615
  //     ) {
  //       setShowPageTitle("React Js");
  //     } else if (
  //       scrolling >= next_scroll_point + 615 &&
  //       scrolling < jsMiniProject_scroll_point + 660
  //     ) {
  //       setShowPageTitle("Next Js");
  //     } else if (
  //       scrolling >= jsMiniProject_scroll_point + 665 &&
  //       scrolling < gsapProject_scroll_point + 1220
  //     ) {
  //       setShowPageTitle("Js Mini Project");
  //     } else if (scrolling >= gsapProject_scroll_point + 1220) {
  //       setShowPageTitle("Gsap Project");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div>
      <h2 ref={title}>{showPageTitle}</h2>
      <div ref={buttons} className="button-container">
        <button data-id="html">HTML</button>
        <button data-id="reactJs">React</button>
        <button data-id="nextJs">Next.js</button>
        <button data-id="mini_project">Mini Project</button>
        <button data-id="gsap_project">GSAP</button>
      </div>
    </div>
  );
}

export default Projects;
