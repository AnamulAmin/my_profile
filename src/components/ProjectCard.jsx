import Image from "next/image";
import { FaGithubAlt } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";
function ProjectCard({ item }) {
  return (
    <div className="proj_box boxImage ">
      <h3 className="proj_title">{item.title}</h3>
      <div className="demo relative group">
        <div className="absolute top-0 right-0 p-3 bg-neutral-800 h-full flex flex-col gap-3 bg-opacity-90 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <a
            href={item.link}
            target="_blank"
            className="btn btn-outline btn-warning"
          >
            <FaClapperboard />
          </a>
          <a
            href={item.githubLink}
            target="_blank"
            className="btn btn-outline btn-warning"
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
