"use client";
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProjectCard from "../ProjectCard";
function ProjectsArea() {
  const [projectData, setProjectData] = useState([]);
  const react = projectData.filter((item) => item.techName === "reactJs");
  const next = projectData.filter((item) => item.techName === "nextJs");
  const html = projectData.filter((item) => item.techName === "html_page");
  const electronJs = projectData.filter(
    (item) => item.techName === "electronJs"
  );
  const gsap_project = projectData.filter(
    (item) => item.techName === "gsap_project"
  );

  console.log(react);
  console.log(next);
  console.log(html);

  useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch("/data/projectsData.json");
      const data = await res.json();
      setProjectData(data);
    };
    fetchProject();
  }, []);
  return (
    <div>
      <div className="container mx-auto min-h-screen px-8 py-28 hidden lg:block">
        <Tabs>
          <TabList>
            <Tab>
              <span>React & Full-stack</span>
            </Tab>
            <Tab>
              <span>Next</span>
            </Tab>
            <Tab>
              <span>HTML</span>
            </Tab>
            <Tab>
              <span>electron Js</span>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-2 space-x-4 w-full">
              {react &&
                react.map((item, idx) => <ProjectCard item={item} key={idx} />)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-2 space-x-4 w-full">
              {next &&
                next.map((item, idx) => <ProjectCard item={item} key={idx} />)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-2 space-x-4  w-full">
              {html &&
                html.map((item, idx) => <ProjectCard item={item} key={idx} />)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-2 space-x-4  w-full">
              {electronJs &&
                electronJs.map((item, idx) => (
                  <ProjectCard item={item} key={idx} />
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <div className="container mx-auto min-h-screen px-8 py-28 block lg:hidden">
        <h2 className="text-4xl  font-bold uppercase text-gray-300">
          React & Full-stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-2 space-x-4 w-full">
          {react &&
            react.map((item, idx) => <ProjectCard item={item} key={idx} />)}
        </div>
        <h2 className="text-4xl  font-bold uppercase text-gray-300">
          Electron
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-2 space-x-4  w-full">
          {electronJs &&
            electronJs.map((item, idx) => (
              <ProjectCard item={item} key={idx} />
            ))}
        </div>
        <h2 className="text-4xl  font-bold uppercase text-gray-300">
          Next & Full-stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-2 space-x-4 w-full">
          {next &&
            next.map((item, idx) => <ProjectCard item={item} key={idx} />)}
        </div>
        <h2 className="text-4xl  font-bold uppercase text-gray-300">Html</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-2 space-x-4  w-full">
          {html &&
            html.map((item, idx) => <ProjectCard item={item} key={idx} />)}
        </div>
      </div>
    </div>
  );
}

export default ProjectsArea;
