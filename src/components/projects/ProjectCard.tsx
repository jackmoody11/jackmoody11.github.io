import React from "react";
import { Link } from "gatsby";
import projectCardStyles from "./project_card.module.sass";

const ProjectCard = ({ project }: any) => (
  <div className="col-lg-4 project-card-container mb-3">
    <Card project={project}>
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <ProjectTags project={project} />

        <p className="card-text py-3">{project.description}</p>
        <ProjectEulerSolutionsButton project={project} />
        <a
          href={project.url}
          className="btn btn-primary mr-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
        <ProjectDocsButton project={project} />
      </div>
    </Card>
  </div>
);

const Card = (props: any) => {
  // Outline border with card internals (used for final card)
  var starred_id = props.project.starred ? projectCardStyles.cardBorder : "";
  return (
    <div className="card" id={starred_id}>
      {props.children}
    </div>
  );
};

type Project = {
  tags: string[];
}

const ProjectTags = ({ project }: any) => {
  // All project tags as badges
  return (
    <div>
      {project.tags.map((tag: string) => (
        <span className={"badge badge-light " + projectCardStyles.filterBadge}>
          {tag}
        </span>
      ))}
    </div>
  );
};

const ProjectEulerSolutionsButton = ({ project }: any) => {
  // Button for link to main Project Euler solutions page
  if (project.name.toLowerCase().includes("project euler")) {
    return (
      <Link to="/euler" className="btn btn-primary mr-1">
        Solutions
      </Link>
    );
  } else {
    return <></>;
  }
};

const ProjectDocsButton = ({ project }: any) => {
  // Button for link to documentation of project
  if (project.hasOwnProperty("docs")) {
    return (
      <a
        href={project.docs}
        className="btn btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Docs
      </a>
    );
  } else {
    return null;
  }
};

export default ProjectCard;
