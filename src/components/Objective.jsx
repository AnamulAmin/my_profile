import { Button } from "@heroui/button";
import { data } from "../lib/data";
import Image from "next/image";
function Objective() {
  const { objective } = data;
  const { image, name, hi, text, address } = objective;
  return (
    <>
      {/* <!-- objective and information --> */}

      <section className="mt-10 bg-[#131314]">
        <div className="container m-auto flex flex-col md:flex-row gap-12 items-start justify-center py-24 px-10 border-[0.1px] border-gray-400 ">
          {/* <Image
            src={image}
            alt="user image"
            width={300}
            height={300}
            className="w-72 m-auto"
          /> */}
          <p className="text-white max-w-[600px] font-medium mr-3 ">
            {hi}
            <span className="text-[#FFD369] text-2xl lg:text-center md:text-left lg:mr-3 inline-block">
              {name}
            </span>
            {text}
          </p>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center text-center md:text-left md:justify-between gap-6 text-white text-[1rem] ">
              {address &&
                address.map((item, ind) => (
                  <p key={ind}>
                    <b className="text-lightGreen text-[1.5rem] capitalize">
                      {item.title}:{" "}
                    </b>{" "}
                    {item.value}
                  </p>
                ))}
            </div>
            <a
              href="https://drive.google.com/uc?export=download&id=1sDuYuFwulFmzjiHk_WFK5gELc1L2blVt"
              download
              className="btn btn-outline mt-8 text-lightGreen flex mx-auto justify-center lg:inline-flex items-center "
            >
              <Button color="success" className="border rounded-xl">
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Objective;
