import Skills from "@/components/resume/Skills";
import Banner from "../components/Banner";
import LanguageSkills from "../components/LanguageSkills";
import MainTag from "../components/MainTag";
import MyDesign from "../components/MyDesign";
import Objective from "../components/Objective";

function resume() {
  return (
    <>
      <MainTag>
        <Banner bannerTitle="Resume" />
        <Objective />
        <Skills />
        <MyDesign />
        <LanguageSkills />
      </MainTag>
    </>
  );
}

export default resume;
