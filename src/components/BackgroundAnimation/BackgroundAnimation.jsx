"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./BackgroundAnimation.css";

const particles = [];

const createParticle = (x, y) => {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  document.body.appendChild(particle);
  particles.push(particle);

  gsap.to(particle, {
    scale: Math.random() * 2 + 1,
    opacity: 0,
    duration: 1,
    onComplete: () => {
      particle.remove();
      particles.splice(particles.indexOf(particle), 1);
    },
  });
};

const BackgroundAnimation = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="animated-background"></div>;
};

export default BackgroundAnimation;
