import React from "react";
import projects from "../content/projects.json";
import ProjectCard from "../components/project_card";
import Layout from "../components/layout";
import "../styles/styles.sass";

const ProjectPage = () => (
  <Layout>
    <div className="row">
      {projects.projects.map(project => (
        <ProjectCard project={project} />
      ))}
    </div>
  </Layout>
);

export default ProjectPage;
