import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

export default () => (
  <Layout>
    <div className="row">
      <div className="jumbotron mx-auto">
        <h1 className="display-4">Jack Moody</h1>
        <p className="lead">
          Welcome to my site! You can find some of my work and learn more about
          what I do.
        </p>
        <hr className="py-4" />
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="/projects" role="button">
            My Projects
          </Link>
        </p>
      </div>
    </div>
  </Layout>
);
