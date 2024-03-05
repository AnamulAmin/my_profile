import { AiOutlineArrowDown } from "react-icons/ai";
interface BannerProps {
  bannerTitle: string; // Specify the type of bannerTitle as string
}

function Banner({ bannerTitle }: BannerProps) {
  return (
    <>
      <section className="container relative m-auto h-screen text-white flex items-center justify-center">
        <h2 className="text-[5rem] capitalize font-bold">{bannerTitle} </h2>
        <div className="flex gap-3 items-center capitalize text-[1.6rem] absolute left-6 sm:left-60 bottom-28">
          <a href="#">home /</a>
          <span className="text-gray-400">{bannerTitle}</span>
        </div>
        <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center absolute right-28 bottom-12 text-dark-300 font-extrabold text-4xl animate-bounce">
          <AiOutlineArrowDown />
        </div>
      </section>
    </>
  );
}

export default Banner;
