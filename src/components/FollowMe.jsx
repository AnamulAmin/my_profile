import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

function FollowMe() {
  return (
    <div className="text-white writting_mode_rl fixed bottom-20 right-0 flex items-center gap-5 px-4">
      <p className="capitalize font-medium">follow me</p>
      <span className="w-[1px] h-16 bg-white self-center"></span>
      <div className="writting_mode_tb flex flex-col items-center gap-2">
        <a href="https://www.linkedin.com/in/anamulamin/" target="_black">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/AnamulAmin" target="_black">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}

export default FollowMe;
