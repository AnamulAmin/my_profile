import Image from "next/image";
import { FaGithubAlt } from "react-icons/fa";
import { FaClapperboard, FaEye } from "react-icons/fa6";
function ProjectCard({ item }) {
  return (
    <div className="proj_box overflow-hidden">
      <h3 className="proj_title">{item.title}</h3>
      <div className="demo relative group">
        <div className="absolute top-0 right-0 p-3  h-full flex flex-col gap-3 bg-opacity-90  transition-all duration-500 z-50">
          <a
            href={item.link}
            target="_blank"
            className="bg-black text-white rounded-full p-2 transition-all duration-300 group-hover:bg-success-700 border featured_card_link hover:text-yellow-500 hover:border-yellow-500 hover:scale-125 translate-x-[100px] group-hover:translate-x-0 delay-100 spring"
          >
            <FaClapperboard />
          </a>
          <a
            href={item.githubLink}
            target="_blank"
            className="bg-black text-white rounded-full p-2 transition-all duration-300 group-hover:bg-success-700 border featured_card_link hover:text-yellow-500 hover:border-yellow-500 hover:scale-125 translate-x-[100px] group-hover:translate-x-0 delay-200"
          >
            <FaGithubAlt />
          </a>
        </div>
        <div className="img_box">
          <Image
            className="w-full"
            width={400}
            height={400}
            src={item.image}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
