import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import Layout from "../components/layout";

interface Project {
  solutionExists: boolean;
}

const EulerMainPage = () => (
  <Layout title="Project Euler">
    <ProjectEulerInfoCard title="About" table={null}>
      Project Euler is a community where those who are interested in programming
      and/or solving math problems can put their knowledge to the test and learn
      more along the way. More info can be found at
      <a href="https://projecteuler.net">projecteuler.net</a>.
    </ProjectEulerInfoCard>
    <ProjectEulerInfoCard
      title="Solutions"
      table={<ProjectEulerSolutionTable />}
    >
      Below is my progress in a few different programming language. Code in the
      explanations uses Python 3, but the concepts should be applicable no
      matter what programming language you choose to solve the problems. The
      complete repository of code, with solutions in other languages can be
      found on{" "}
      <a href="https://github.com/jackmoody11/project-euler-solutions">
        my GitHub <i className="fab fa-github"></i>
      </a>
      .
    </ProjectEulerInfoCard>
  </Layout>
);

const ProjectEulerInfoCard = (props: { title: React.ReactNode; children: React.ReactNode; table: {} | null | undefined; }) => (
  <div className="card mb-3" id="card-left-border">
    <div className="card-body">
      <h2 className="card-title">{props.title}</h2>
      <div className="col-md-10">
        <p className="card-text">{props.children}</p>
        {props.table !== undefined ? props.table : null}
      </div>
    </div>
  </div>
);

const ProjectEulerSolutionTable = () => {
  const eulerSolutions = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { posttype: { eq: "euler" } } }
        sort: { fields: [fields___slug], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const solutions = eulerSolutions.allMdx.edges;

  return (
    <table className="table table-hover mt-3">
      <thead>
        <tr>
          <th scope="col">Number</th>
          <th scope="col">Python</th>
          <th scope="col">Java</th>
          <th scope="col">C</th>
        </tr>
      </thead>
      <tbody>
        {solutions.map((solution: { node: { fields: { slug: string; }; frontmatter: { tags: string[]; }; }; }) => {
          const slugArr = solution.node.fields.slug.split("-");
          let problemNumber = slugArr[slugArr.length - 1];
          problemNumber = problemNumber.substring(0, problemNumber.length - 1);

          return (
            <tr>
              <th scope="row">
                <Link to={`euler/${solution.node.fields.slug}`}>
                  {problemNumber}
                </Link>
              </th>
              <td>
                <SolutionExistsIcon
                  solutionExists={solution.node.frontmatter.tags
                    .map((tag: string) => tag.toLowerCase())
                    .includes("python")}
                />
              </td>
              <td>
                <SolutionExistsIcon
                  solutionExists={solution.node.frontmatter.tags
                    .map((tag: string) => tag.toLowerCase())
                    .includes("java")}
                />
              </td>
              <td>
                <SolutionExistsIcon
                  solutionExists={solution.node.frontmatter.tags
                    .map((tag: string) => tag.toLowerCase())
                    .includes("c")}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const SolutionExistsIcon = ({ solutionExists} : Project) => (
  <i
    className={
      solutionExists
        ? "far fa-check-circle text-success"
        : "far fa-times-circle text-danger"
    }
    aria-hidden="true"
  ></i>
);

export default EulerMainPage;
