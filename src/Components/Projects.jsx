import { useState } from "react";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  // eslint-disable-next-line
  const [projects, setProjects] = useState(true);
  // eslint-disable-next-line
  const [tech, setTech] = useState(false);

  return (
    <div className="container top-tabs">
      {/* <div className="tabs is-boxed">
        <ul>
          <li
            className={projects ? "is-active" : null}
            onClick={() => {
              setProjects(true);
              setTech(false);
            }}
          >
            eslint-disable-next-line
            <a>Projects</a>
          </li>
          <li
            className={tech ? "is-active" : null}
            onClick={() => {
              setProjects(false);
              setTech(true);
            }}
          >
            eslint-disable-next-line
            <a>Technologies</a>
          </li>
        </ul>
      </div> */}
      {projects ? <ProjectCards /> : null}
    </div>
  );
};

export default Projects;
