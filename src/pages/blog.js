import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import BlogPostCard from "../components/blog_post_card";

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
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will go here.</p>
      <div className="card-deck">
        {data.allMarkdownRemark.edges.map(edge => (
          <BlogPostCard edge={edge} />
        ))}
      </div>
    </Layout>
  );
};

export default BlogPage;
