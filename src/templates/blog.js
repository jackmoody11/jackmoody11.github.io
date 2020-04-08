import React from "react";
import { graphql } from "gatsby";
import moment from "moment";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";

export const query = graphql`
  query($slug: String!) {
    mdx(
      fields: { slug: { eq: $slug } }
      frontmatter: { posttype: { eq: "blog" } }
    ) {
      frontmatter {
        posttype
        tags
        title
        date
      }
      body
    }
  }
`;

const Blog = ({ data: { mdx } }) => {
  return (
    <Layout title={mdx.frontmatter.title}>
      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h1 className="blog-post-title">{mdx.frontmatter.title}</h1>
              {mdx.frontmatter.tags.map((tag) => (
                <span className="badge badge-light">{tag}</span>
              ))}
              <br />
              <small className="blog-post-meta">
                <i className="far fa-clock mr-1"></i>
                {moment(mdx.frontmatter.date).format("MMM D, YYYY")}
              </small>
              <hr />
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </div>
          </div>

          <aside className="col-md-4 blog-sidebar">
            <div className="p-3 mb-3 bg-light rounded">
              <h4 className="font-italic">About</h4>
              This blog includes some of my thoughts on various topics.
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Blog;
