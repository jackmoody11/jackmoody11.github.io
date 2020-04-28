import React, { EventHandler } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Project from "./Project";
import projectCardStyles from "./project_card.module.sass";

/*
 * Interfaces
 */
interface IProjectCard {
  project: Project;
  onFilterClick(e: React.MouseEvent): any;
}

interface IProjectTags {
  project: Project;
  onTagClick(e: React.MouseEvent): any;
}

interface IOnlyProject {
  project: Project;
}

export default (props: IProjectCard) => {
  /**
   * Single `ProjectCard` component for projects page.
   *
   * @remarks
   * Only intended to be used by the projects page.
   *
   * @param props - Only considers project and onFilterClick
   * @returns ProjectCard component for projects page
   */
  const { project, onFilterClick } = props;
  return (
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
};

/*
 * Subcomponents
 */
const ProjectTags = (props: IProjectTags): JSX.Element => {
  /**
   * All project tags for single project.
   *
   * @remarks
   * This component is only intended to be used by ProjectCard component.
   *
   * @param props - All given properties. Only `project` and `onTagClick` will be used
   * @returns ProjectTags react component
   */
  const { project, onTagClick } = props;
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

const ProjectEulerSolutionsButton = ({ project }: IOnlyProject) => {
  /**
   * Button for link to main Project Euler solutions page.
   *
   * @remarks
   * This component is only intended to be used by ProjectCard component.
   *
   * @param project - Project object which may or may not be Project Euler project
   * @returns Button to Project Euler solutions if "project euler" is in `project.name`
   */
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

const ProjectDocsButton = ({ project }: IOnlyProject) => {
  /**
   * Button for link to documentation of project.
   *
   * @remarks
   * This component is only intended to be used by ProjectCard component.
   *
   * @param project - Project object for which doc button may or may not exist
   * @returns Button that links to project docs if they exist
   */
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
