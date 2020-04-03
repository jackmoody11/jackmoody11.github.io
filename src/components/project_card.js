import React from "react";
import { Link } from "gatsby";
import projectCardStyles from "./project_card.module.sass";

export default class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: null,
      tags: [],
      name: null,
      docs: null,
      url: null
    };
  }

  render() {
    return (
      <div class="col-lg-4 project-card-container mb-3">
        <Card project={this.state}>
          <div className="card-body">
            <h5 className="card-title">{this.state.name}</h5>
            <ProjectTags project={this.state} />

            <p className="card-text py-3">{this.state.description}</p>
            <ProjectEulerSolutionsButton project={this.state} />
            <Link
              to={this.state.url}
              className="btn btn-primary"
              target="_blank"
            >
              Source
            </Link>
            <ProjectDocsButton />
          </div>
        </Card>
      </div>
    );
  }
}

function Card(project, children) {
  // Outline border with card internals (used for final card)
  var card = <div className="card">{children}</div>;
  if (project.starred) {
    card.setState({ id: projectCardStyles.cardBorder });
  }
  return card;
}

function ProjectTags(project) {
  // All project tags as badges
  return (
    <div>
      {project.map(project => (
        <span className={"badge badge-light " + projectCardStyles.filterBadge}>
          {project.tag}
        </span>
      ))}
    </div>
  );
}

function ProjectEulerSolutionsButton(project) {
  // Button for link to main Project Euler solutions page
  if (project.name.toLowerCase().includes("project euler")) {
    return (
      <Link to="/euler" className="btn btn-primary">
        Solutions
      </Link>
    );
  }
}

function ProjectDocsButton(project) {
  // Button for link to documentation of project
  if (project.docs) {
    return (
      <Link to={project.docs} className="btn btn-primary" target="_blank" />
    );
  }
}
