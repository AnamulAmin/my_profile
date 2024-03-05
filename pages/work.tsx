// import { gsap } from "gsap";
// import Image from "next/image";
// import { useEffect } from "react";

import Banner from "@/components/Banner";
import MainTag from "@/components/MainTag";
import Projects from "@/components/Projects";

function Work() {
  // useEffect(() => {
  //   const proxy = { skew: 0 },
  //     skewSetter = gsap.quickSetter(".boxImage", "skewY", "deg"),
  //     clamp = gsap.utils.clamp(-20, 20);

  //   // skewSetter(-5.369)

  //   let sections = gsap.utils.toArray(".boxImage");

  //   gsap.to(sections, {
  //     xPercent: -100 * (sections.length - 1),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".container",
  //       pin: true,
  //       onUpdate: (self) => {
  //         let skew = clamp(self.getVelocity() / 300);

  //         if (Math.abs(skew) > Math.abs(proxy.skew)) {
  //           proxy.skew = skew;

  //           gsap.to(proxy, {
  //             skew: 0,
  //             duration: 0.8,
  //             overwrite: true,
  //             ease: "power3",
  //             onUpdate: () => {
  //               skewSetter(proxy.skew);
  //             },
  //           });
  //         }
  //       },
  //       scrub: 1,
  //       // snap: 1 / (sections.length - 1),
  //       end: () => "+=" + document.querySelector(".container").offsetWidth
  //     },
  //   });
  // });


  return (
    <>
      <MainTag>
        <Banner bannerTitle="All Projects" />
        <Projects />
      </MainTag>
    </>
  );
}

export default Work;
