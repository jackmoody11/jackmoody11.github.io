import React from "react";
import { graphql } from "gatsby";
import moment from "moment";

import Layout from "../components/layout";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

const Blog = props => {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>
        {moment(props.data.markdownRemark.frontmatter.date).format(
          "MMM D, YYYY"
        )}
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  );
};

export default Blog;
