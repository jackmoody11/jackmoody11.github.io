import React from "react";
import projects from "../content/projects.json";
import ProjectCard from "../components/projects/project_card";
import Layout from "../components/layout";

export default class ProjectPage extends React.Component {
  allProjects: any;
  state: any;

  constructor(props: any) {
    super(props);
    this.allProjects = projects.projects;
    this.state = {
      filters: [],
      filteredProjects: this.allProjects,
    };
    this.removeFilter = this.removeFilter.bind(this);
  }

  removeFilter(filter: any) {
    this.setState({
      filters: this.state.filters.filter((f: any) => f !== filter),
    });
    this.updateFilteredProjects();
  }

  addFilter(filter: any) {
    this.setState({
      filters: this.state.filters.push(filter),
    });
    this.updateFilteredProjects();
  }

  updateFilteredProjects() {
    this.setState({
      filteredProjects: this.allProjects.filter(
        (project: { tags: { filter: (arg0: (tag: any) => any) => { (): any; new(): any; length: number; }; }; }) =>
          project.tags.filter((tag: any) => this.state.filters.includes(tag))
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
          {this.state.filters.map((filter: any) => (
            <span
              className="badge badge-light p-1"
              onClick={this.removeFilter}
            ></span>
          ))}
        </div>
        <div className="card-deck card-columns mb-3">
          {this.state.filteredProjects.map((project: any) => (
            <ProjectCard project={project} onClick={this.addFilter} />
          ))}
        </div>
      </Layout>
    );
  }
}
