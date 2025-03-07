import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { HeroUIProvider } from "@heroui/react";
import ReactLenis from "lenis/react";
import Footer from "../components/Footer";
import MainTag from "../components/MainTag";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const handleScrollTop = () => {
    window.screenTop(0, {
      smooth: true,
    });
  };
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Script src="/physicsjs.min.js" strategy="beforeInteractive"></Script> */}
        {/* <HeroUIProvider> */}
        <Navbar />

        <MainTag>
          {children}
          {/* </HeroUIProvider> */}
          {/* <section
          onClick={handleScrollTop}
          className="bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"
        >
          Thanks for Scrolling
        </section> */}
          <Footer />
        </MainTag>
      </body>
    </html>
  );
}
