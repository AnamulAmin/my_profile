"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { LayoutGrid } from "../magicui/layout-grid";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import style from "./home.module.css";
import { ScaleModal } from "../../shared/Modal/ScaleModal";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NextUiModal from "../../shared/Modal/NextUiModal";
import FeaturedCard from "./FeaturedCard";
import Image from "next/image";
import ClientProject from "./ClientProject";
import MainTag from "../MainTag";

const featuredData = [
  {
    link: "https://assignment-11-lyart.vercel.app/",
    image:
      "https://firebasestorage.googleapis.com/v0/b/my-e-commarce.appspot.com/o/images%2Fhost-image%2Fscreencapture-localhost-5173-2023-12-12-13_19_28.png?alt=media&token=ebee3177-961f-4ce9-a686-27b04d3fc8a5",
    title: "HomeSwapHub",
    techName: "reactJs",
    githubLink: "https://github.com/AnamAadel/-HomeSwapHub",
  },
  {
    link: "https://trade-haven.vercel.app/",
    image:
      "https://firebasestorage.googleapis.com/v0/b/my-e-commarce.appspot.com/o/images%2Fhost-image%2Fscreencapture-localhost-5173-2023-12-12-14_21_28.png?alt=media&token=5a664d0a-4151-4108-8dee-fa7fc4250f98",
    title: "TradeHaven",
    techName: "reactJs",
    githubLink: "https://github.com/AnamAadel/TradeHaven",
  },
  {
    link: "https://my-ecommarce-website-wepe.vercel.app/",
    title: "Furniture shop",
    image:
      "https://firebasestorage.googleapis.com/v0/b/my-e-commarce.appspot.com/o/images%2Fhost-image%2Ffurniture.png?alt=media&token=b741bd7a-6edc-4465-8e90-e2b74580fcce",
    techName: "nextJs",
    githubLink: "https://github.com/AnamAadel/my-ecommarce-website",
  },
  {
    link: "https://assignment-12-fawn.vercel.app/",
    image:
      "https://firebasestorage.googleapis.com/v0/b/my-e-commarce.appspot.com/o/images%2Fhost-image%2Fscreencapture-localhost-5173-2023-12-12-13_24_04.png?alt=media&token=4dd7595e-6b55-4438-85b1-04c785177e27",
    title: "WanderWise",
    techName: "reactJs",
    githubLink: "https://github.com/AnamAadel/WanderWise",
  },
  {
    link: "https://assignment-10-nu-nine.vercel.app/",
    image:
      "https://firebasestorage.googleapis.com/v0/b/my-e-commarce.appspot.com/o/images%2Fhost-image%2Fscreencapture-localhost-5173-2023-12-12-13_47_17.png?alt=media&token=05168bdc-fd3e-482d-a8a2-67434efafb60",
    title: "TechHaven",
    techName: "reactJs",
    githubLink: "https://github.com/AnamAadel/TechHaven",
  },
];

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
export function FeaturedProject() {
  // const [featuredData, setFeaturedData] = useState([]);
  const [singleData, setSingleData] = useState();
  const [isOpen, setIsOpen] = useState(false);
  useGSAP(() => {
    const featuredProject = document.getElementById("featured-project");
    const client_project_links = gsap.utils.toArray(".client_project_item");
    const client_project_underline = gsap.utils.toArray(
      ".client_project_underline"
    );

    // gsap.from(client_project_links, {
    //   opacity: 0,
    //   y: 20, // Simplified transform property
    //   duration: 0.5,
    //   ease: "power2.inOut",
    //   stagger: 0.1,
    //   scrollTrigger: {
    //     trigger: "#client_project",
    //     start: "top 50%",
    //     toggleActions: "play none reverse none", // Allows reverse on scroll-up
    //     markers: true,
    //   },
    // });

    if (client_project_links.length > 0) {
      gsap.to(client_project_links, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.inOut",
        stagger: 0.3,
        scrollTrigger: {
          trigger: client_project_links,
          start: "top 60%",
          toggleActions: "play none reverse reverse",
        },
        onStart: () => {
          gsap.fromTo(
            client_project_underline,
            {
              width: "0%",
              duration: 1,
              ease: "power2.inOut",
              stagger: 0.3,
            },
            {
              width: "100%",
              duration: 1,
              ease: "power2.inOut",
              stagger: 0.3,
            }
          );
        },
      });
    } else {
      console.warn("No .client_project_item elements found.");
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#featured-project",
        pin: true,
        start: "top 30%",
        end: () => `+=${window.innerHeight * 2}`,
        scrub: 1, // 🔹 Prevents GSAP from adding extra spacing
        toggleActions: "play none none reverse",
        // onUpdate: () => {
        //   const { scrollY } = window;

        //   featuredProject.style.transform = `translate3d(0px, 0px, 0px)`;
        // },
      },
    });

    // tl.to("", {
    //   // transform: `translateY(30vh)`,
    //   position: "sticky",
    //   top: "50px",
    //   left: "50px",
    //   ease: "power2.inOut",
    //   // onComplete: () => {
    //   //   gsap.to("#featured-project-title", {
    //   //     position: "fixed",
    //   //     top: "50px",
    //   //     left: "50px",
    //   //   });
    //   // },
    // });
    // tl.to("#featured-project-title", {
    //   transform: `translateY(-40vh)`,
    //   ease: "power2.inOut",
    // });

    // Move sections horizontally
    tl.to("#featured-project", {
      transform: `translateX(calc(${-250 * featuredData?.length}px))`,
      ease: "power2.inOut",
      onStart: () => {
        gsap.to("#featured-project-title", {
          position: "fixed",
          top: "0px",
          // x: "50px",
          scrollTrigger: {
            trigger: "#featured-project-title",
            pin: true,
            start: "top top",
            end: () => "-=" + window.innerHeight * 2,
            // scrub: 1,
          },
        });
      },
      onComplete: () => {
        gsap.to("#featured-project-title", {
          position: "relative",
        });
      },
    });

    // gsap.set(client_project_links, {
    //   opacity: 1,
    //   transform: "translateY(20px)",
    // });

    // gsap.from(client_project_links, {
    //   duration: 0.5,
    //   // opacity: 0,
    //   transform: "translateY(20px)",
    //   scrollTrigger: {
    //     trigger: client_project_links,
    //     start: "top 10%",
    //     pin: true,
    //     toggleActions: "play none none reverse",
    //     markers: true,
    //   },
    // });

    // Animate the cards container separately
  });

  const handleOpenModal = (item) => {
    setSingleData(item);
    setIsOpen(true);
  };

  return (
    <div className="relative">
      {/* Ensure enough space below to prevent collapse */}
      <div className={`overflow-hidden `}>
        <section className="relative">
          <h2
            className="text-5xl hidden lg:block text-white font-bold heading relative pl-[50px] transition-all duration-500 pt-36 pb-10"
            id="featured-project-title"
          >
            Featured <br />{" "}
            <span className="ml-10 text-[5rem] text-lightGreen">Project</span>
          </h2>
          <h2 className="text-5xl block lg:hidden text-white font-bold heading relative pl-[50px] transition-all duration-500 pt-36 pb-10">
            Featured <br />{" "}
            <span className="ml-10 text-[5rem] text-lightGreen">Project</span>
          </h2>
          <div
            id="featured-project"
            className="hidden lg:flex gap-7 justify-center w-full px-3"
          >
            {/* <LayoutGrid cards={cards} gridCols={`md:grid-cols-${cards.length}`} /> */}
            {featuredData &&
              featuredData.map((item, idx) => (
                <FeaturedCard
                  // isOpenScreen={isOpenScreen}
                  // setIsOpenScreen={setIsOpenScreen}
                  item={item}
                  id={idx}
                  key={idx}
                  handleOpenModal={handleOpenModal}
                />
              ))}
          </div>
        </section>
        <section
          style={
            {
              // transform: `translate3d(0px , 0px, 0px) !important`,
            }
          }
          // className={`${style.featuredProject}`}

          className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 lg:hidden mb-10"
        >
          {/* <LayoutGrid cards={cards} gridCols={`md:grid-cols-${cards.length}`} /> */}
          {featuredData &&
            featuredData.map((item, idx) => (
              <FeaturedCard
                // isOpenScreen={isOpenScreen}
                // setIsOpenScreen={setIsOpenScreen}
                item={item}
                id={idx}
                key={idx}
                handleOpenModal={handleOpenModal}
              />
            ))}
        </section>
        <section
          className="bg-gray-300 text-black  h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden px-12 py-16"
          id="client_project"
        >
          <h2 className="text-5xl block  text-black font-bold  relative  transition-all duration-500 mb-5 pb-5 client_project_item -translate-y-[20px] opacity-0">
            Client
            <span className="ml-5 text-yellow-600">Projects</span>
            <span className="w-0 h-[1px] absolute bottom-0 left-0 right-0 bg-black client_project_underline"></span>
          </h2>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <ClientProject />
        </section>
      </div>
      <NextUiModal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        singleData={singleData}
      />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    content: <SkeletonOne />,
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    content: <SkeletonTwo />,
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    content: <SkeletonThree />,
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    content: <SkeletonFour />,
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    content: <SkeletonOne />,
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    content: <SkeletonTwo />,
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    content: <SkeletonThree />,
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    content: <SkeletonFour />,
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
