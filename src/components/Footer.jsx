"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const latestProjects = [
  {
    id: 1,
    src: "/client_website/multigym.png",
    alt: "Multi Gym Premium",
    link: "https://multigympremium.com/",
    title: "MultiGym Premium: The Ultimate Gym Management Solution",
    description:
      "MultiGym Premium is a cutting-edge gym management platform designed to streamline fitness business operations with a modern, intuitive interface. Built with React, Vite, and TailwindCSS, it ensures a seamless experience for both gym administrators and members.",
    list: [
      "☑️ Membership Management – Track and manage gym members effortlessly",
      "☑️ Subscription & Payment Handling – Secure online payments and automated renewals",
      "☑️ Class & Trainer Scheduling – Organize sessions with a dynamic calendar",
      "☑️ Real-time Analytics & Reports – Track performance using advanced data visualization",
      "☑️ Attendance Tracking – Automated check-in system for members",
      "☑️ Notifications & Alerts – Stay connected with email and in-app alerts",
      "☑️ File & Document Uploads – Manage contracts, invoices, and forms",
      "☑️ Responsive & Fast UI – Powered by React, MUI, Framer Motion, and TailwindCSS",
      "☑️ Secure Authentication – Firebase integration for login and user management",
    ],
  },
  {
    id: 2,
    src: "/client_website/multigym_app.png",
    alt: "Multi Gym Premium Admin",
    link: "https://multigym-web.vercel.app/",
    title: "Gym-APS: Advanced Gym Management System",
    description:
      "Gym-APS is a feature-rich gym management system built with React (Next.js), Vite, and TailwindCSS to streamline fitness center operations. It provides an intuitive and efficient way to manage members, track attendance, handle payments, and generate reports.",
    list: [
      "☑️ Member Management – Register, update, and track gym members",
      "☑️ Subscription Plans – Manage membership tiers & renewals",
      "☑️ Attendance Tracking – Automated check-in & check-out system",
      "☑️ Payment System – Secure transactions with Stripe integration",
      "☑️ PDF Generation – Downloadable invoices & reports using jspdf and html2pdf.js",
      "☑️ Live Notifications – WebSockets for real-time updates",
      "☑️ Multi-User Roles – Admin, trainers, and members with role-based access",
    ],
  },
  {
    id: 3,
    src: "/client_website/multisports.webp",
    alt: "MULTI SPORTS",
    link: "https://multisports-u6s5-git-main-aadelbanat8991gmailcoms-projects.vercel.app/",
    title: "",
    description: "",
    list: [],
  },
  {
    id: 4,
    src: "/client_website/multisports_app.png",
    alt: "MULTI SPORTS Admin",
    link: "https://multisports-u6s5-git-main-aadelbanat8991gmailcoms-projects.vercel.app/login",
    title: "Gym-APS: A Feature-Rich E-commerce Platform",
    description:
      "MULTI SPORTS is a modern eCommerce platform designed for fitness enthusiasts, offering seamless shopping experiences with integrated delivery services (Pathao & StreetFast APIs). Built with React , Vite, and TailwindCSS, this project ensures high performance, scalability, and a smooth user experience.",
    list: [
      "☑️ User Authentication – Secure login & registration ",
      "☑️ Product Management – Add, edit, and manage inventory",
      "☑️ Cart & Checkout – Dynamic cart system with real-time price updates",
      "☑️ Payment Integration – Supports Stripe for secure transactions",
      "☑️ Order Tracking – Live order updates with Pathao & StreetFast integration",
      "☑️ PDF Generation – Downloadable invoices using html2pdf.js and jspdf",
      "☑️ Real-time Updates – WebSockets for live order status changes",
      "☑️ Performance Optimizations – Lazy loading, code splitting, caching",
    ],
  },
];

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
          {latestProjects.map((item, index) => (
            <a
              className=" link link-hover  opacity-0 translate-y-[100px] footer_project_link "
              key={index}
              href={item?.link}
              target="_black"
            >
              {item?.alt}
            </a>
          ))}
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
