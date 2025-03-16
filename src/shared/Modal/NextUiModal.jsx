import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import React from "react";
import { fadeTopToBottom } from "../../utils/motion/fade-to-to-bottom";
import Link from "next/link";
import "./model.css";

export default function NextUiModal({ isOpen, onOpenChange, singleData }) {
  console.log(singleData, "singleData");
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      motionProps={fadeTopToBottom()}
      className=""
      placement="top"
      backdrop="blur"

      // classNames={{
      //   backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
      // }}
    >
      <ModalContent className="nextui-width bg-gray-200 border border-gray-900">
        <ModalBody>
          {" "}
          <div className="relative  overflow-auto grid grid-cols-1 lg:grid-cols-2 gap-2 ">
            {/* Main content area */}
            <div className="transition-all duration-500 w-full h-full sticky top-0 left-0 p-8 lg:p-12 space-y-6  z-30">
              <h3 className="text-4xl font-extrabold text-gray-100">
                {singleData?.title}
              </h3>
              <p className="text-lg text-gray-600">
                {singleData?.description}
                {/* Explore comfort and style at FurniVista. Discover handcrafted
                furniture that transforms spaces into havens. From plush sofas
                to elegant tables, our curated collection blends craftsmanship
                with contemporary design. Elevate your home with FurniVista –
                where comfort meets style in every piece. */}
              </p>
              {singleData?.list && singleData?.list.length > 0 && (
                <h2 className="text-2xl font-bold border-b border-black py-4">
                  🔹 Key Features:
                </h2>
              )}

              <ul className="space-y-2 pb-6 text-black">
                {singleData?.list &&
                  singleData?.list.length > 0 &&
                  singleData?.list.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
              </ul>

              <div className="flex gap-4 mt-12">
                {/* View Detail Button (commented out) */}
                {/* <button 
        className="btn btn-white" 
        data-btn="viewBtn" 
        onClick={() => { setIsScreen(true); setIsOpenScreen(true); }}>
        View Detail
      </button> */}

                <Link
                  target="_blank"
                  href={singleData?.link || "#"}
                  className="px-6 py-2 rounded-md text-xl visit_site"
                  // color="secondary"
                >
                  Visit the site
                </Link>
                {singleData?.githubLink && (
                  <Link
                    target="_blank"
                    href={singleData?.githubLink || "#"}
                    className="btn btn-warning px-6 py-2 rounded-md text-xl visit_github"
                  >
                    Go to Github
                  </Link>
                )}
              </div>
            </div>

            {/* Image section */}
            <div className="flex justify-center items-center w-full">
              <div className="w-full relative laptop ml-16">
                <div className="transition-all  duration-500 mt-16 lg:mt-20 h-[500px] project_webview overflow-auto absolute top-0 left-20">
                  <Image
                    src={singleData?.image || singleData?.src}
                    className="w-full transition-all duration-500 rounded-lg "
                    height="500"
                    alt="project image"
                    loading={true}
                  />
                </div>
                <img
                  src="/macbook_1.png"
                  className="relative z-10 w-full pointer-events-none "
                />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          {/* <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button> */}
          {/* <Button color="primary" onPress={onClose}>
              Action
            </Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
