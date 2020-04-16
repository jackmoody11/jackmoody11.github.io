import React from "react";
import projects from "../content/projects.json";
import ProjectCard from "../components/projects/project_card";
import Layout from "../components/layout";

export default class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.allProjects = projects.projects;
    this.state = {
      filters: [],
      filteredProjects: this.allProjects,
    };
    this.removeFilter = this.removeFilter.bind(this);
  }

  removeFilter(filter) {
    this.setState({
      filters: this.state.filters.filter((f) => f !== filter),
    });
    this.updateFilteredProjects();
  }

  addFilter(filter) {
    this.setState({
      filters: this.state.filters.push(filter),
    });
    this.updateFilteredProjects();
  }

  updateFilteredProjects() {
    this.setState({
      filteredProjects: this.allProjects.filter(
        (project) =>
          project.tags.filter((tag) => this.state.filters.includes(tag))
            .length > 0
      ),
    });
  }

  render() {
    return (
      <Layout title="Projects">
        <h1>Projects</h1>
        <hr />
        <div className="mb-3" id="tag-filters">
          {this.state.filters.map((filter) => (
            <span
              className="badge badge-light p-1"
              onClick={this.removeFilter}
            ></span>
          ))}
        </div>
        <div className="card-deck card-columns mb-3">
          {this.state.filteredProjects.map((project) => (
            <ProjectCard project={project} onClick={this.addFilter} />
          ))}
        </div>
      </Layout>
    );
  }
}
