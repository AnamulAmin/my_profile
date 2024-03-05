import MainTag from "@/components/MainTag";
import FeaturedProject from "@/components/home/FeaturedProject";
import Introduce from "@/components/home/Introduce";
import About from "../components/home/About";
// import BgBorder from "@/components/bgBorder";

export default function Home() {
  return (
    <>
      <MainTag>
        <Introduce />
        <FeaturedProject />
        <About />
      </MainTag>
    </>
  );
}
