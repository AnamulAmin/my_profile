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
      placement="center"
      backdrop="blur"
      // classNames={{
      //   backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
      // }}
    >
      <ModalContent className="nextui-width bg-gray-200 border border-gray-900">
        <ModalHeader className="flex flex-col gap-1 ">Modal Title</ModalHeader>
        <ModalBody>
          {" "}
          <div className="relative  overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-2 ">
            {/* Main content area */}
            <div className="transition-all duration-500 w-full h-full sticky top-0 left-0 p-8 lg:p-12 space-y-6  z-30">
              <h3 className="text-4xl font-extrabold text-gray-100">
                {singleData?.title}
              </h3>
              <p className="text-lg text-gray-600">
                Explore comfort and style at FurniVista. Discover handcrafted
                furniture that transforms spaces into havens. From plush sofas
                to elegant tables, our curated collection blends craftsmanship
                with contemporary design. Elevate your home with FurniVista –
                where comfort meets style in every piece.
              </p>

              <div className="flex gap-4 mt-6">
                {/* View Detail Button (commented out) */}
                {/* <button 
        className="btn btn-white" 
        data-btn="viewBtn" 
        onClick={() => { setIsScreen(true); setIsOpenScreen(true); }}>
        View Detail
      </button> */}

                <Link
                  target="_blank"
                  href={singleData?.link}
                  className="px-6 py-2 rounded-md text-xl visit_site"
                  // color="secondary"
                >
                  Visit the site
                </Link>

                <Link
                  target="_blank"
                  href={singleData?.githubLink}
                  className="btn btn-warning px-6 py-2 rounded-md text-xl visit_github"
                >
                  Go to Github
                </Link>
              </div>
            </div>

            {/* Image section */}
            <div className="w-full relative laptop">
              <div className="transition-all  duration-500 mt-16 lg:mt-20 h-[500px] project_webview overflow-auto absolute top-0 left-10">
                <Image
                  src={singleData?.image}
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
