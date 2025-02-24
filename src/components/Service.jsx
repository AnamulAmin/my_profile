import { data } from "@/lib/data";
import Image from "next/image";
function Service() {
  const { service } = data;
  return (
    <>
      <section className="container m-auto text-white py-16">
        <h2 className="text-4xl font-medium mb-16 mt-32 px-10">Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(2,minmax(300px,600px))] gap-x-8 gap-y-28 justify-between w-full">
          {/* <!-- box 1 --> */}

          {service &&
            service.map((item, ind) => (
              <div
                className="text-center space-y-6 border-[0.1px] border-gray-400 p-10 bg-dark-200"
                key={ind}
              >
                <Image
                  src={item.image}
                  width={200}
                  height={200}
                  className="image_white w-12 h-12 m-auto"
                  alt={""}
                ></Image>
                <h3 className="text-2xl font-medium">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Service;
