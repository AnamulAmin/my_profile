import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
import { data } from "../../lib/data";
import Address from "../Address";
import FollowMe from "../FollowMe";

function Introduce() {
  // const [introData, setIntroData] = useState();

  const { introduce } = data;

  return (
    <section className="container relative m-auto min-h-screen text-white pt-20 md:pl-40">
      <div className="clip_path max-w-[400px] h-[70vh] ">
        <Image
          className="w-full h-full object-cover object-center"
          src={introduce.image}
          alt="author"
          width={1000}
          height={1000}
          priority={false}
        />
      </div>
      <p className="text-white ml-auto mt-10 lg:-mt-20 max-w-[500px] font-medium px-4">
        {introduce.hi}
        <span className="text-[#FFD369] text-2xl"> {introduce.author}</span>
        <br /> {introduce.text}
      </p>
      <div className="flex flex-col-reverse sm:flex-row gap-10 mt-8 items-center px-4">
        <h1 className="text-[2.5rem] md:ml-60">
          I
          <TypeAnimation
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
          />
          {/* <span className="text-[3.5rem] text-lightGreen font-semibold">
            front-end developer
          </span> */}
        </h1>
      </div>

      <Address />
      <FollowMe />
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
