import React from "react";

export default class ProjectFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [],
    };
  }

  render() {
    return (
      <div class="mb-3" id="tag-filters">
        {this.state.filters.map((filter) => (
          <ProjectFilterTag tag={filter} />
        ))}
      </div>
    );
  }
}

class ProjectFilterTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: null,
    };
  }

  render() {
    if (this.state.tag !== null) {
      return (
        <span className="badge badge-light m-1 tag-filter">
          {this.state.tag}
          <a className="close-btn" onClick={() => this.setState({ tag: null })}>
            <i className="far fa-times-circle p-1"></i>
          </a>
        </span>
      );
    } else {
      return null;
    }
  }
}

import React from "react";
import { Link } from "gatsby";
import projectCardStyles from "./project_card.module.sass";

const ProjectCard = ({ project }) => (
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

const Card = (props) => {
  // Outline border with card internals (used for final card)
  var starred_id = props.project.starred ? projectCardStyles.cardBorder : "";
  return (
    <div className="card" id={starred_id}>
      {props.children}
    </div>
  );
};

const ProjectTags = ({ project }) => {
  // All project tags as badges
  return (
    <div>
      {project.tags.map((tag) => (
        <span className={"badge badge-light " + projectCardStyles.filterBadge}>
          {tag}
        </span>
      ))}
    </div>
  );
};

const ProjectEulerSolutionsButton = ({ project }) => {
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

const ProjectDocsButton = ({ project }) => {
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
