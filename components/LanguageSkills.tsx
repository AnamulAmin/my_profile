import { data } from "@/lib/data";
function LanguageSkills() {
  const { language_skills } = data;
  return (
    <>
      <section className="container m-auto text-white py-16">
        <h2 className="text-4xl font-medium mb-16 mt-32 px-10">
          Language Skills
        </h2>

        <div className="w-full px-6 sm:px-14 py-20 text-neutral bg-white rounded-lg border-[0.1px] border-gray-400 grid grid-cols-1 lg:grid-cols-2 gap-x-36 gap-y-8">
          {/* <!-- Bangla --> */}
          {language_skills &&
            language_skills.map((item, ind) => (
              <div key={ind}>
                <h4 className="text-2xl mt-8">{item.name}</h4>
                <div className="flex justify-between gap-2 sm:gap-5 mt-4">
                  {item.percent.map((item, ind) => (
                    <div
                      className="w-3 sm:w-5 h-3 sm:h-5 rounded-full overflow-hidden bg-gray-500 shrink-0"
                      key={ind}
                    >
                      <span
                        className="block h-full bg-lightGreen"
                        style={{ width: `${item}%` }}
                      ></span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default LanguageSkills;
