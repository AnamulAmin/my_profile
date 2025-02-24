"use client";
import { MoveUpRight } from "lucide-react";
import { useMediaQuery } from "../../hooks/use-media-query";
import React, { useState, useRef, useCallback, useEffect } from "react";
const images = [
  {
    id: 1,
    src: "/client_website/multigym.png",
    alt: "Multi Gym Premium",
    link: "https://multigympremium.com/",
  },
  {
    id: 2,
    src: "/client_website/multigym_app.png",
    alt: "Multi Gym Premium Admin",
  },
  {
    id: 3,
    src: "/client_website/multisports.webp",
    alt: "MULTI SPORTS",
  },
  {
    id: 4,
    src: "/client_website/multisports_app.png",
    alt: "MULTI SPORTS Admin",
  },
];

const ClientProject = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [activeImage, setActiveImage] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0.5);
  const timeoutRef = useRef(null);
  const requestRef = useRef(null);
  const prevCursorPosition = useRef({ x: 0, y: 0 });
  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const dx = clientX - prevCursorPosition.current.x;
    const dy = clientY - prevCursorPosition.current.y;
    const easeAmount = 0.2;
    const newX = prevCursorPosition.current.x + dx * easeAmount;
    const newY = prevCursorPosition.current.y + dy * easeAmount;
    setCursorPosition({ x: newX, y: newY });
    prevCursorPosition.current = { x: newX, y: newY };
  }, []);
  useEffect(() => {
    const updateCursorPosition = (e) => {
      if (requestRef.current) return;
      requestRef.current = requestAnimationFrame(() => {
        handleMouseMove(e);
        requestRef.current = null;
      });
    };
    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [handleMouseMove]);
  const handleImageHover = useCallback(
    (image) => {
      if (activeImage !== image) {
        setActiveImage(image);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setOpacity(1);
          setScale(1);
        }, 50);
      } else {
        setOpacity(1);
        setScale(1);
      }
    },
    [activeImage]
  );
  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
    setScale(0.5);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveImage(null);
    }, 300);
  }, []);
  return (
    <div
      className="relative w-full min-h-fit dark:bg-gradient-to-b from-black from-10% to-gray-950 to-100%  rounded-md"
      onMouseLeave={handleMouseLeave}
    >
      {images.map((image) => (
        <div
          key={image.id}
          className={`p-4 cursor-pointer relative sm:flex items-center justify-between `}
          onMouseEnter={() => handleImageHover(image)}
        >
          {!isDesktop && (
            <img
              src={image?.src}
              className="sm:w-32 sm:h-20 w-full h-52 object-cover rounded-md"
              alt="mobileImg"
            />
          )}
          <h2
            className={`newFont dark:text-gray-300 uppercase md:text-5xl sm:text-2xl text-xl font-semibold sm:py-6 py-2 leading-[100%] relative client_project_item opacity-0 translate-y-[20px] ${
              activeImage?.id === image?.id
                ? "mix-blend-difference z-20 text-gray-300"
                : "text-gray-700"
            }`}
          >
            {image.alt}
          </h2>
          <button
            className={`sm:block hidden p-4 rounded-full transition-all duration-300 border border-gray-400 ease-out ${
              activeImage?.id === image?.id
                ? "mix-blend-difference z-20 bg-white text-black"
                : ""
            }`}
          >
            <MoveUpRight className="w-8 h-8" />
          </button>
          <div
            className={`h-[2px] dark:bg-white bg-black absolute bottom-0 left-0 transition-all duration-300 ease-linear z-10 ${
              activeImage?.id === image?.id ? "w-full" : "w-0"
            }`}
          />
          <div
            className={`h-[2px] dark:bg-white bg-gray-400 w-0 client_project_underline absolute bottom-0 left-0 transition-all duration-300 ease-linear `}
          />
        </div>
      ))}
      {isDesktop && activeImage && (
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className={`fixed dark:bg-gray-950 bg-white object-cover  object-left-top pointer-events-none z-10 w-[400px] h-[400px] rounded-lg`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: `translate(-50%, -50%) scale(${scale})`,
            opacity: opacity,
          }}
        />
      )}
    </div>
  );
};
export default ClientProject;
