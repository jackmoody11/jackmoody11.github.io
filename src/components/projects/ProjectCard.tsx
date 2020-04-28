import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "gatsby";
import projectCardStyles from "./project_card.module.sass";

const ProjectCard = ({ project, onFilterClick }: any) => (
  <div className="col-lg-4 project-card-container mb-3">
    <Card>
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <ProjectTags project={project} onTagClick={onFilterClick} />
        <Card.Text>{project.description}</Card.Text>
        <ProjectEulerSolutionsButton project={project} />
        <Button href={project.url}>Source</Button>{" "}
        <ProjectDocsButton project={project} />
      </Card.Body>
    </Card>
  </div>
);

const ProjectTags = ({ project, onTagClick }: any) => {
  // All project tags as badges
  return (
    <div>
      {project.tags.map((tag: string, index: number) => (
        <span
          className={"badge badge-light " + projectCardStyles.filterBadge}
          onClick={onTagClick}
          key={index}
        >
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
      <>
        <Button as="a" href="/euler" variant="primary">
          Solutions
        </Button>{" "}
      </>
    );
  } else {
    return <></>;
  }
};

const ProjectDocsButton = ({ project }: any) => {
  // Button for link to documentation of project
  if (project.hasOwnProperty("docs")) {
    return (
      <Button
        as="a"
        rel="noopener noreferrer"
        target="_blank"
        variant="primary"
        href={project.docs}
      >
        Docs
      </Button>
    );
  } else {
    return null;
  }
};

export default ProjectCard;
