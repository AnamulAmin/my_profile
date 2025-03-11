import Image from "next/image";
// import { MorphingText } from "@/src/components/magicui/morphing-text";
import { TypeAnimation } from "react-type-animation";
import { data } from "../../lib/data";
import Address from "../Address";
import FollowMe from "../FollowMe";
import { IconCloudArea } from "../IconCloudArea";
import PhysicsComponent from "../../shared/PhysicsComponent";
import { AiOutlineArrowDown } from "react-icons/ai";

// import BackgroundAnimation from "../../components/BackgroundAnimation/BackgroundAnimation";

const texts = [
  "Hello",
  "Morphing",
  "Text",
  "Animation",
  "React",
  "Component",
  "Smooth",
  "Transition",
  "Engaging",
];

function Introduce() {
  // const [introData, setIntroData] = useState();

  const { introduce } = data;

  return (
    <section className="container relative m-auto min-h-screen  text-white pt-20 md:pl-40 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 mt-8 items-center px-4 ">
        <div className="clip_path max-w-[800px] h-[70vh] ">
          <Image
            className="w-full h-full object-cover object-center"
            src={introduce.image}
            alt="author"
            width={1000}
            height={1000}
            priority={false}
          />
        </div>
        <div className="flex flex-col gap-10 mt-8 items-center px-4">
          <IconCloudArea />
          <p className="text-white mx-auto lg:ml-auto lg:-mt-20 max-w-[500px] font-medium px-16 pb-10">
            {introduce.hi}
            <span className="text-[#FFD369] text-2xl"> {introduce.author}</span>
            <br /> {introduce.text}
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row gap-10 mt-8 items-center px-4">
        {/* <MorphingText texts={texts} /> */}
        <h1 className="text-[2.5rem] md:ml-20">
          {/* I */}
          {/* <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "code cool website",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "am a Freelancer",
              1000,
              "am a Front_end Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-[2.5rem] text-lightGreen font-semibold ml-3"
          /> */}
          {/* <span className="text-[3.5rem] text-lightGreen font-semibold">
            front-end developer
          </span> */}
        </h1>
      </div>

      <Address />
      <FollowMe />
      {/* <PhysicsComponent /> */}
      {/* <BackgroundAnimation /> */}
      <div className="w-16 h-16 rounded-full hidden  bg-white md:flex justify-center items-center absolute right-6 lg:right-28 bottom-12 text-dark-300 font-extrabold text-4xl animate-bounce">
        <AiOutlineArrowDown />
      </div>
    </section>
  );
}

export default Introduce;

// export async function getStaticProps() {
//   // Fetch data from data.json file in the public directory
//   const introData = await fetch(data);
//   // const data = await response.json();

//   return {
//     props: {
//       introData,
//     },
//   };
// }
