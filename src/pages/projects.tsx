import React from "react";
import projects from "../content/projects.json";
import ProjectCard from "../components/projects/ProjectCard";
import Layout from "../components/Layout";

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
    this.addFilter = this.addFilter.bind(this);
    this.updateFilteredProjects = this.updateFilteredProjects.bind(this);
  }

  removeFilter(e: any) {
    const filter = e.currentTarget.textContent;
    this.setState({
      filters: this.state.filters.filter((f: any) => f !== filter),
    });
    this.updateFilteredProjects();
  }

  addFilter(e: any) {
    const filter = e.currentTarget.textContent;
    this.state.filters.push(filter);
    this.updateFilteredProjects();
  }

  updateFilteredProjects() {
    this.setState({
      filteredProjects: this.allProjects.filter(
        (project: {
          tags: {
            filter: (
              arg0: (tag: any) => any
            ) => { (): any; new (): any; length: number };
          };
        }) =>
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
          {this.state.filters.map((filter: any, index: number) => (
            <span
              className="badge badge-light p-1"
              onClick={this.removeFilter}
              key={`filter-${index}`}
            ></span>
          ))}
        </div>
        <div className="card-deck card-columns mb-3">
          {this.state.filteredProjects.map((project: any, index: number) => (
            <ProjectCard
              project={project}
              onFilterClick={this.addFilter}
              key={`project-${index}`}
            />
          ))}
        </div>
      </Layout>
    );
  }
}
