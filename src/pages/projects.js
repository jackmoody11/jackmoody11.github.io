import React from "react";
import projects from "../content/projects.json";
import ProjectCard from "../components/project_card";
import Layout from "../components/layout";
import { withPrefix } from "gatsby";

const ProjectPage = () => (
  <Layout title="Projects">
    <h1>Projects</h1>
    <hr />
    <div className="mb-3" id="tag-filters"></div>
    <div className="card-deck card-columns mb-3">
      {projects.projects.map(project => (
        <ProjectCard project={project} />
      ))}
    </div>
  </Layout>
);

export default ProjectPage;
