import React from "react";
import projects from "../content/projects.json";
import ProjectCard from "../components/project_card";
import Layout from "../components/layout";

const ProjectPage = () => (
  <Layout>
    <h1>Projects</h1>
    <hr />
    <div className="row">
      {projects.projects.map(project => (
        <ProjectCard project={project} />
      ))}
    </div>
  </Layout>
);

export default ProjectPage;
