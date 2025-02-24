import React from 'react';
import Banner from "../components/Banner";
import MainTag from "../components/MainTag";
import ProjectsArea from "../components/myProjects/ProjectsArea";
function project() {
    return (
        <MainTag>
            <Banner bannerTitle="Projects" />
            <ProjectsArea />
        </MainTag>
    )
}

export default project