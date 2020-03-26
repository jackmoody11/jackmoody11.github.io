import React from "react";
import projectsJSON from "../../static/json/projects.json";
import ProjectCard from "../component/project_card";

export default class Projects extends React.Component {
  render() {
    var projects = JSON.parse(projectsJSON)["projects"];
    var projectCards = [];
    projects.forEach(project => {
      projectCards.push(<ProjectCard project={project} />);
    });
    return projectCards;
  }
}
