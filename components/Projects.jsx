import { projects } from "@/lib/data";
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
  const rightArrow = useRef();
  const leftArrow = useRef();
  const title = useRef();
  const buttons = useRef();
  const html = useRef();
  const react = useRef();
  const next = useRef();
  const gsapProject = useRef();
  const miniProject = useRef();

  useEffect(() => {

    let responsive = 0;
    if (window.innerWidth >= 1024 && window.innerWidth <= 1220) {
      responsive = 1;
    } else {
      responsive = 0;
    }
    if (window.innerWidth >= 1024) {
      const proxy = { skew: 0 },
        skewSetter = gsap.quickSetter(".boxImage", "skewY", "deg"),
        clamp = gsap.utils.clamp(-20, 20);

      // skewSetter(-5.369)

      let sections = gsap.utils.toArray(".boxImage");

      gsap.to(sections, {
        xPercent: -100 * (sections.length + responsive),
        ease: "none",
        scrollTrigger: {
          trigger: ".imageContainer",
          pin: true,
          onUpdate: (self) => {
            let skew = clamp(self.getVelocity() / 2600);

            if (Math.abs(skew) > Math.abs(proxy.skew)) {
              proxy.skew = skew;

              gsap.to(proxy, {
                skew: 0,
                duration: 0.8,
                overwrite: true,
                ease: "power3",
                onUpdate: () => {
                  skewSetter(proxy.skew);
                },
              });
            }
          },
          scrub: 1,
          // snap: 1 / (sections.length - 1),
          end: () =>
            "+=" + document.querySelector(".imageContainer").offsetWidth,
        },
      });
    }

    // created varaible of scroll points
    const html_scroll_point = window.innerHeight;
    const react_scroll_point = window.innerHeight + html.current.clientWidth;
    const next_scroll_point =
      window.innerHeight + html.current.clientWidth + react.current.clientWidth;

    const jsMiniProject_scroll_point =
      window.innerHeight +
      html.current.clientWidth +
      react.current.clientWidth +
      next.current.clientWidth;

    const gsapProject_scroll_point =
      window.innerHeight +
      html.current.clientWidth +
      react.current.clientWidth +
      next.current.clientWidth +
      miniProject.current.clientWidth;

    // click button & show projects items

    const btn = document.querySelectorAll(".btn");

    const htmlBtn = document.getElementById("htmlBtn"),
      reactBtn = document.getElementById("reactBtn"),
      nextBtn = document.getElementById("nextBtn"),
      miniProjectBtn = document.getElementById("jsMiniBtn"),
      gsapProjectBtn = document.getElementById("gsapBtn");

    if (window.innerWidth >= 960) {
      btn.forEach((item) => {
        item.addEventListener("click", function () {
          if (item.dataset.id == "html") {
            gsap.to(window, {
              duration: 2,
              scrollTo: html_scroll_point,
            });
          } else if (item.dataset.id == "reactJs") {
            gsap.to(window, {
              duration: 2,
              scrollTo: react_scroll_point + 550,
            });
          } else if (item.dataset.id == "nextJs") {
            gsap.to(window, {
              duration: 2,
              scrollTo: next_scroll_point + 620,
            });
          } else if (item.dataset.id == "mini_project") {
            gsap.to(window, {
              duration: 2,
              scrollTo: jsMiniProject_scroll_point + 700,
            });
          } else if (item.dataset.id == "gsap_project") {
            gsap.to(window, {
              duration: 2,
              scrollTo: gsapProject_scroll_point + 1230,
            });
          }
        });
      });

      window.addEventListener("scroll", function () {
        const scrolling = window.scrollY;
        if (scrolling <= react_scroll_point + 540) {
          // title.current.innerText = "HTML Page";

          setShowPageTitle("HTML Page");
          btn.forEach((item) => {
            item.style.transform = `scale(1)`;
            item.style.borderBottom = `0px solid #FFD369`;
          });
          htmlBtn.style.transform = `scale(1.2)`;
          htmlBtn.style.borderBottom = `8px solid #FFD369`;
        } else if (
          scrolling >= react_scroll_point + 545 &&
          scrolling < next_scroll_point + 615
        ) {
          setShowPageTitle("React Js");
          btn.forEach((item) => {
            item.style.transform = `scale(1)`;
            item.style.borderBottom = `0px solid #FFD369`;
          });

          reactBtn.style.transform = `scale(1.2)`;
          reactBtn.style.borderBottom = `8px solid #FFD369`;
        } else if (
          scrolling >= next_scroll_point + 615 &&
          scrolling < jsMiniProject_scroll_point + 660
        ) {
          setShowPageTitle("Next Js");
          btn.forEach((item) => {
            item.style.transform = `scale(1)`;
            item.style.borderBottom = `0px solid #FFD369`;
          });
          nextBtn.style.transform = `scale(1.2)`;
          nextBtn.style.borderBottom = `8px solid #FFD369`;
        } else if (
          scrolling >= jsMiniProject_scroll_point + 665 &&
          scrolling < gsapProject_scroll_point + 1220
        ) {
          setShowPageTitle("Js Mini Project");
          btn.forEach((item) => {
            item.style.transform = `scale(1)`;
            item.style.borderBottom = `0px solid #FFD369`;
          });
          miniProjectBtn.style.transform = `scale(1.2)`;
          miniProjectBtn.style.borderBottom = `8px solid #FFD369`;
        } else if (scrolling >= gsapProject_scroll_point + 1220) {
          setShowPageTitle("Gsap Project");
          btn.forEach((item) => {
            item.style.transform = `scale(1)`;
            item.style.borderBottom = `0px solid #FFD369`;
          });
          gsapProjectBtn.style.transform = `scale(1.2)`;
          gsapProjectBtn.style.borderBottom = `8px solid #FFD369`;
        }

        // set show arrow logic

        if (scrolling < html_scroll_point - 200) {
          rightArrow.current.classList.add("hidden");
          leftArrow.current.classList.add("hidden");
          title.current.classList.add("hidden");
          buttons.current.classList.add("hidden");
        } else if (
          scrolling > html_scroll_point - 200 &&
          scrolling <
            html_scroll_point +
              gsapProject_scroll_point +
              gsapProject.current.clientWidth -
              700
        ) {
          rightArrow.current.classList.remove("hidden");
          leftArrow.current.classList.add("hidden");
          title.current.classList.remove("hidden");
          buttons.current.classList.remove("hidden");
        } else {
          rightArrow.current.classList.add("hidden");
          leftArrow.current.classList.remove("hidden");
          title.current.classList.remove("hidden");
          buttons.current.classList.remove("hidden");
        }
      });
    } else {
      const btn = document.querySelectorAll(".btn");
      btn.forEach((item) => {
        item.addEventListener("click", function () {
          if (item.dataset.id == "html") {
            gsap.to(window, {
              duration: 2,
              scrollTo: "#html",
            });
          } else if (item.dataset.id == "reactJs") {
            gsap.to(window, {
              duration: 2,
              scrollTo: "#react",
            });
          } else if (item.dataset.id == "nextJs") {
            gsap.to(window, {
              duration: 2,
              scrollTo: "#next",
            });
          } else if (item.dataset.id == "mini_project") {
            gsap.to(window, {
              duration: 2,
              scrollTo: "#miniProject",
            });
          } else if (item.dataset.id == "gsap_project") {
            gsap.to(window, {
              duration: 2,
              scrollTo: "#gsapProject",
            });
          }
        });
      });

      gsap.to(btn, {
        scrollTrigger: {
          trigger: "#html",
          start: "-100 top",
          end: "bottom bottom",

          onEnter: () => {
            btn.forEach((item) => {
              item.style.transform = `scale(1)`;
              item.style.borderBottom = `0px solid #FFD369`;
            });
            htmlBtn.style.transform = `scale(1.2)`;
            htmlBtn.style.borderBottom = `8px solid #FFD369`;
          },
          onEnterBack: () => {
            btn.forEach((item) => {
              item.style.transform = `scale(1)`;
              item.style.borderBottom = `0px solid #FFD369`;
            });
            htmlBtn.style.transform = `scale(1.2)`;
            htmlBtn.style.borderBottom = `8px solid #FFD369`;
          },
        },
      });
      gsap.to(btn, {
        scrollTrigger: {
          trigger: "#react",
          start: "-100 top",
          end: "bottom bottom",
          onEnter: () => {
            btn.forEach((item) => {
              item.style.transform = `scale(1)`;
              item.style.borderBottom = `0px solid #FFD369`;
            });
            reactBtn.style.transform = `scale(1.2)`;
            reactBtn.style.borderBottom = `8px solid #FFD369`;
          },
          onEnterBack: () => {
            btn.forEach((item) => {
              item.style.transform = `scale(1)`;
              item.style.borderBottom = `0px solid #FFD369`;
            });
            reactBtn.style.transform = `scale(1.2)`;
            reactBtn.style.borderBottom = `8px solid #FFD369`;
          },
        },
      });
      gsap.to(btn, {
        scrollTrigger: {
          trigger: "#next",
          start: "-100 top",
          end: "bottom bottom",
          onEnter: () => {
            btn.forEach((item) => {
              item.style.transform = `scale(1)`;
              item.style.borderBottom = `0px solid #FFD369`;
            });
            nextBtn.style.transform = `scale(1.2)`;
            nextBtn.style.borderBottom = `8px solid #FFD369`;
          },
          onEnterBack: () => {
            btn.forEach((item) => {
              item.style.transform = `scale(1)`;
              item.style.borderBottom = `0px solid #FFD369`;
            });
            nextBtn.style.transform = `scale(1.2)`;
            nextBtn.style.borderBottom = `8px solid #FFD369`;
          },
        },
      });
      gsap.to(btn, {
        scrollTrigger: {
          trigger: "#miniProject",
          start: "-100 top",
          end: "bottom bottom",
          onEnter: () => {
            btn.forEach((item) => {
              item.style.transform = `scale(1)`;
              item.style.borderBottom = `0px solid #FFD369`;
            });
            miniProjectBtn.style.transform = `scale(1.2)`;
            miniProjectBtn.style.borderBottom = `8px solid #FFD369`;
          },
          onEnterBack: () => {
            btn.forEach((item) => {
              item.style.transform = `scale(1)`;
              item.style.borderBottom = `0px solid #FFD369`;
            });
            miniProjectBtn.style.transform = `scale(1.2)`;
            miniProjectBtn.style.borderBottom = `8px solid #FFD369`;
          },
        },
      });
      gsap.to(btn, {
        scrollTrigger: {
          trigger: "#gsapProject",
          start: "-100 top",
          end: "bottom bottom",
          onEnter: () => {
            btn.forEach((item) => {
              item.style.transform = `scale(1)`;
              item.style.borderBottom = `0px solid #FFD369`;
            });
            gsapProjectBtn.style.transform = `scale(1.2)`;
            gsapProjectBtn.style.borderBottom = `8px solid #FFD369`;
          },
          onEnterBack: () => {
            btn.forEach((item) => {
              item.style.transform = `scale(1)`;
              item.style.borderBottom = `0px solid #FFD369`;
            });
            gsapProjectBtn.style.transform = `scale(1.2)`;
            gsapProjectBtn.style.borderBottom = `8px solid #FFD369`;
          },
        },
      });
    }

    // button id selection
  }, []);
  return (
    <>
      <h4
        className="bg-white text-dark-200 p-4 rounded-lg transition-all duration-300 fixed bottom-[16vh] left-1/2 -translate-x-1/2 uppercase font-extrabold after:content-[''] after:w-full after:scale-x-[2] after:h-1 after:rounded-lg after:bg-white after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 animate-rubber hidden"
        ref={title}
      >
        {showPageTitle}
      </h4>
      <div className="overflow-x-hidden">
        <div className="imageContainer overscroll-none flex flex-col lg:flex-row justify-start items-center lg:items-start gap-6 min-h-screen w-full lg:w-fit px-12 pt-16">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:flex flex-col lg:flex-row gap-8  w-fit pt-24 lg:pt-0"
            id="html"
            ref={html}
          >
            <h2 className="text-white text-2xl font-bold text-center underline block lg:hidden col-span-2">
              HTML Page
            </h2>
            {html_page.map((item, ind) => (
              <a
                href={item.link}
                target="_blank"
                className="proj_box boxImage max-w-[450px] lg:w-[450px]"
                key={ind}
              >
                <h3 className="proj_title">{item.title}</h3>
                <div className="demo">
                  <div className="img_box">
                    <Image
                      className="w-full"
                      width={400}
                      height={400}
                      src={item.image}
                      alt="image"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:flex flex-col lg:flex-row pt-24 lg:pt-0 gap-8 w-fit"
            id="react"
            ref={react}
          >
            <h2 className="text-white text-2xl font-bold text-center underline block lg:hidden col-span-2">
              React Js
            </h2>
            {reactJs.map((item, ind) => (
              <a
                href={item.link}
                target="_blank"
                className="proj_box boxImage max-w-[450px] lg:w-[450px]"
                key={ind}
              >
                <h3 className="proj_title">{item.title}</h3>
                <div className="demo">
                  <div className="img_box">
                    <Image
                      className="w-full"
                      width={400}
                      height={400}
                      src={item.image}
                      alt="image"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:flex flex-col lg:flex-row pt-24 lg:pt-0 gap-8 w-fit"
            id="next"
            ref={next}
          >
            <h2 className="text-white text-2xl font-bold text-center underline block lg:hidden col-span-2">
              Next Js
            </h2>
            {nextJs.map((item, ind) => (
              <a
                href={item.link}
                target="_blank"
                className="proj_box boxImage max-w-[450px] lg:w-[450px]"
                key={ind}
              >
                <h3 className="proj_title">{item.title}</h3>
                <div className="demo">
                  <div className="img_box">
                    <Image
                      className="w-full"
                      width={400}
                      height={400}
                      src={item.image}
                      alt="image"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:flex flex-col lg:flex-row pt-24 lg:pt-0 gap-8  w-fit"
            id="miniProject"
            ref={miniProject}
          >
            <h2 className="text-white text-2xl font-bold text-center underline block lg:hidden col-span-2">
              Js Mini Project
            </h2>
            {js_mini_project.map((item, ind) => (
              <a
                href={item.link}
                target="_blank"
                className="proj_box boxImage max-w-[450px] lg:w-[450px]"
                key={ind}
              >
                <h3 className="proj_title">{item.title}</h3>
                <div className="demo">
                  <div className="img_box">
                    <Image
                      className="w-full"
                      width={400}
                      height={400}
                      src={item.image}
                      alt="image"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:flex flex-col lg:flex-row pt-24 lg:pt-0 gap-8 w-fit"
            id="gsapProject"
            ref={gsapProject}
          >
            <h2 className="text-white text-2xl font-bold text-center underline block lg:hidden col-span-2">
              Gsap Project
            </h2>
            {gsap_project.map((item, ind) => (
              <a
                href={item.link}
                target="_blank"
                className="proj_box boxImage max-w-[450px] lg:w-[450px] m-auto"
                key={ind}
              >
                <h3 className="proj_title">{item.title}</h3>
                <div className="demo">
                  <div className="img_box">
                    <Image
                      className="w-full"
                      width={400}
                      height={400}
                      src={item.image}
                      alt="image"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div
        className="flex gap-4 items-center fixed left-0 bottom-[5vh] justify-center w-full"
        ref={buttons}
      >
        <button
          className="btn border border-gray-400"
          data-id="html"
          id="htmlBtn"
        >
          <span className="hidden lg:inline">html page</span>
          <ImHtmlFive />
        </button>
        <button
          className="btn border border-gray-400"
          data-id="reactJs"
          id="reactBtn"
        >
          <span className="hidden lg:inline">React js</span>
          <FaReact />
        </button>
        <button
          className="btn border border-gray-400"
          data-id="nextJs"
          id="nextBtn"
        >
          <span className="hidden lg:inline"> next js</span>
          <SiNextdotjs />
        </button>
        <button
          className="btn border border-gray-400"
          data-id="mini_project"
          id="jsMiniBtn"
        >
          <span className="hidden lg:inline">Js Mini Project</span>
          <RiJavascriptFill />
        </button>
        <button
          className="btn border border-gray-400"
          data-id="gsap_project"
          id="gsapBtn"
        >
          <span className="hidden lg:inline">Gsap Project</span>
          <SiGreensock />
        </button>
      </div>
      <div
        className="w-12 h-12 rounded-full bg-white text-dark-300 text-2xl animate-left_bounce fixed left-16 bottom-28 hidden"
        ref={leftArrow}
      >
        <FaAngleLeft className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div
        className="w-12 h-12 rounded-full bg-white text-dark-300 text-2xl animate-right_bounce fixed right-16 bottom-28 hidden"
        ref={rightArrow}
      >
        <FaAngleRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </>
  );
}

export default Projects;
