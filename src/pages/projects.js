import React from "react";
import projectsJSON from "../../static/json/projects.json";
import ProjectCard from "../components/project_card";

export default () => {
  var projects = JSON.parse(projectsJSON)["projects"];
  var projectCards = [];
  projects.forEach(project => {
    projectCards.push(<ProjectCard project={project} />);
  });
  return projectCards;
};
