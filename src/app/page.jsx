// import BgBorder from "@/components/bgBorder";
import MainTag from "../components/MainTag";
import Introduce from "../components/home/Introduce";
import About from "../components/home/About";
import { FeaturedProject } from "../components/home/FeaturedProject";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <>
      {/* <ReactLenis root> */}
      <MainTag>
        <Introduce />
        <FeaturedProject />
        <About />
      </MainTag>
      {/* </ReactLenis> */}
    </>
  );
}
