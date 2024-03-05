import { data } from "@/lib/data";
import { BsCheck } from "react-icons/bs";

function Knowledge() {
  const { knowledge } = data;
  return (
    <>
      <section className="container m-auto text-white py-16">
        <h2 className="text-4xl font-medium mb-16 mt-32 px-10">Knowlage</h2>
        <div className="w-full py-20 bg-dark-200 border-[0.1px] border-gray-400 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-12 sm:gap-6 px-2 sm:px-14">
          {knowledge &&
            knowledge.map((item, ind) => (
              <p className="text-xl font-bold flex items-center" key={ind}>
                <BsCheck className="text-2xl text-lightGreen mr-4" />
                {item}
              </p>
            ))}
        </div>
      </section>
    </>
  );
}

export default Knowledge;
