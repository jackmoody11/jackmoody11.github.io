import React from "react";
import { graphql } from "gatsby";
import moment from "moment";

import Layout from "../components/layout";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        tags
        title
        date
      }
      html
    }
  }
`;

const Blog = props => {
  return (
    <Layout title={props.data.markdownRemark.frontmatter.title}>
      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h1 className="blog-post-title">
                {props.data.markdownRemark.frontmatter.title}
              </h1>
              {props.data.markdownRemark.frontmatter.tags.map(tag => (
                <span className="badge badge-light">{tag}</span>
              ))}
              <br />
              <small className="blog-post-meta">
                <i className="far fa-clock mr-1"></i>
                {moment(props.data.markdownRemark.frontmatter.date).format(
                  "MMM D, YYYY"
                )}
              </small>
              <hr />
              <div
                dangerouslySetInnerHTML={{
                  __html: props.data.markdownRemark.html
                }}
              ></div>
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
