import Image from "next/image";

function TechCard({ technology }) {
  return (
    <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
      <div className="flex items-start">
        <div className="w-[60px]">
          <Image
            className="h-[50px] w-[50px] object-contain"
            src={technology.logo}
            alt=""
            width="700"
            height="700"
          />
        </div>
        <div className="ml-4">
          <h4 className="text-2xl font-bold capitalize">{technology.name}</h4>
          <p className="text-base font-medium text-navy-700 dark:text-white w-[350px]">
            {technology.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TechCard;
