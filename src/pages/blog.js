import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will go here.</p>

      {data.allMarkdownRemark.edges.map(edge => {
        return (
          <div className="blog-post">
            <h2 className="blog-post-title">{edge.node.frontmatter.title}</h2>
            <p className="blog-post-meta">{edge.node.frontmatter.date}</p>
            {edge.node.excerpt}
          </div>
        );
      })}
    </Layout>
  );
};

export default BlogPage;
