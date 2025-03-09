import TechCard from "./TechCard";

function TechBox({ skill, idx }) {
  return (
    <div className={idx === 0 ? "lg:col-span-full" : "col-span-1"}>
      <h3 className="text-3xl border-b-2 border-neutral mb-8 mt-12 font-bold">
        {skill.category}
      </h3>
      <div
        className={`w-full grid ${
          idx === 0 ? "lg:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {skill.skills &&
          skill.skills.map((technology, idx) => (
            <TechCard technology={technology} key={idx} />
          ))}
      </div>
    </div>
  );
}

export default TechBox;
