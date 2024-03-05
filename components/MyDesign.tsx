import { data } from "@/lib/data";
function MyDesign() {
  const { design_skills } = data;
  return (
    <>
      <section className="container m-auto text-white py-16">
        <h2 className="text-4xl font-medium mb-16 mt-32 px-10">
          Design Skills
        </h2>

        <div className="w-full px-14 py-20 text-neutral bg-white rounded-lg border-[0.1px] border-gray-400">
          {design_skills &&
            design_skills.map((item, ind) => (
              <div key={ind} className="mt-8">
                <h4 className="text-2xl">{item.name}</h4>
                <progress
                  className="progress bg-lightGreen w-full"
                  value={item.percent}
                  max="100"
                ></progress>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default MyDesign;
