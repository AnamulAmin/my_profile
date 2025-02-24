import Image from "next/image";
import { useState } from "react";
import "./home.css";
import { gsap } from "gsap";

import { FaEye, FaGithubAlt } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";
function FeaturedCard({
  item,
  isOpenScreen,
  setIsOpenScreen,
  id,
  setSingleData,
  handleOpenModal,
}) {
  const handleHover = () => {
    const featuredCardLinks = gsap.utils.toArray(".featured_card_link");

    gsap.from(featuredCardLinks, {
      duration: 0.5,
      ease: "bounce",
      stagger: 0.1,
      xPercent: -100,
    });
  };

  return (
    <div
      className={`featuredCard transition-all duration-500 relative overflow-hidden w-full lg:max-w-[250px]  2xl:max-w-[350px] h-[350px] group flex-shrink-0 group `}
      // onMouseEnter={handleHover}
    >
      <div className="absolute top-0 right-0 p-3  h-full flex flex-col gap-3 bg-opacity-90  transition-all duration-500 z-50">
        <a
          href={item.link}
          target="_blank"
          className="bg-black text-white rounded-full p-2 transition-all duration-300 group-hover:bg-success-700 border featured_card_link hover:text-yellow-500 hover:border-yellow-500 hover:scale-125 translate-x-[100px] group-hover:translate-x-0 delay-100 spring"
        >
          <FaClapperboard />
        </a>
        <a
          href={item.githubLink}
          target="_blank"
          className="bg-black text-white rounded-full p-2 transition-all duration-300 group-hover:bg-success-700 border featured_card_link hover:text-yellow-500 hover:border-yellow-500 hover:scale-125 translate-x-[100px] group-hover:translate-x-0 delay-200"
        >
          <FaGithubAlt />
        </a>
        <button
          onClick={() => handleOpenModal(item)}
          target="_blank"
          className="bg-black text-white rounded-full p-2 transition-all duration-300 group-hover:bg-success-700 border featured_card_link hover:text-yellow-500 hover:border-yellow-500 hover:scale-125 translate-x-[100px] group-hover:translate-x-0 delay-300"
        >
          <FaEye />
        </button>
      </div>
      {/* <button onClick={()=> {setIsScreen(false); setIsOpenScreen(false)}} className={`absolute top-3 left-16 text-4xl text-neutral goBack z-50 ${isScreen ? "opacity-100 visible": "opacity-0 invisible "}`}><IoArrowBackOutline /></button>*/}

      <div onClick={() => handleOpenModal(item)}>
        <Image
          src={item.image}
          className={`w-full transition-all duration-1000 absolute top-0 left-0 featuredImage cursor-pointer`}
          width="1000"
          height="400"
          alt="project image"
        />
      </div>
    </div>
  );
}

export default FeaturedCard;
