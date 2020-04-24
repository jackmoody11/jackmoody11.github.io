import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import BlogPostCard from "../components/blog/BlogPostCard";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { posttype: { eq: "blog" } } }) {
        edges {
          node {
            frontmatter {
              title
              date
              tags
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout title="Blog">
      <div className="container mb-3">
        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 font-italic">Coming Soon</h1>
            <p className="lead my-3">
              This blog is currently a work-in-progress.
            </p>
          </div>
        </div>
        <div className="card-deck">
          {data.allMdx.edges.map((edge: { node: any; }) => (
            <BlogPostCard edge={edge} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
