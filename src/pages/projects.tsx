import React from "react";
import { projects } from "../content/projects.json";
import ProjectCard from "../components/projects/ProjectCard";
import Project from "../components/projects/Project";
import Layout from "../components/Layout";
import Badge from "react-bootstrap/Badge";
import "../styles/styles.sass";

interface ProjectPageState {
  filters: string[];
  filteredProjects: Project[];
}

export default class ProjectPage extends React.Component {
  allProjects: Project[];
  state: ProjectPageState;

  constructor(props: any) {
    super(props);
    this.allProjects = projects;
    this.state = {
      filters: [],
      filteredProjects: this.allProjects,
    };
    this.removeFilter = this.removeFilter.bind(this);
    this.addFilter = this.addFilter.bind(this);
  }

  removeFilter(e: any) {
    const filter = e.currentTarget.textContent;
    const updatedFilters = this.state.filters.filter(
      (f: string) => f !== filter
    );
    this.setState({
      filters: updatedFilters,
      filteredProjects: this.allProjects.filter((project: Project) => {
        return updatedFilters.every((f: string) => project.tags.includes(f));
      }),
    });
  }

  addFilter(e: any) {
    const filter = e.currentTarget.textContent;
    const updatedFilters = [...this.state.filters, filter];
    if (!this.state.filters.includes(filter)) {
      this.setState({
        filters: updatedFilters,
        filteredProjects: this.state.filteredProjects.filter(
          (project: Project) =>
            // Check that every applied filter is in project
            updatedFilters.every((f: string) => project.tags.includes(f))
        ),
      });
    }
  }

  render() {
    return (
      <Layout title="Projects">
        <h1>Projects</h1>
        <hr />
        <div className="mb-3" id="tag-filters">
          {this.state.filters.map((filter: any, index: number) => (
            <>
              <Badge variant="light" onClick={this.removeFilter} key={index}>
                {filter}
                <i className="far fa-times-circle p-1 close-btn"></i>
              </Badge>
            </>
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
