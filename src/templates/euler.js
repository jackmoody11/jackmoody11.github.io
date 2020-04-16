import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";
import EulerNotes from "../components/euler/euler_notes";
import EulerCode from "../components/euler/euler_code";

export const query = graphql`
  query($slug: String!) {
    mdx(
      fields: { slug: { eq: $slug } }
      frontmatter: { posttype: { eq: "euler" } }
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

const Euler = ({ data: { mdx }, pageContext }) => {
  const { next, prev } = pageContext;
  let prevLink =
    prev === false ? null : (
      <Link
        to={`euler${prev.fields.slug}`}
        className="btn btn-primary"
        role="button"
      >
        Previous
      </Link>
    );
  let nextLink =
    next === false ? null : (
      <Link
        to={`euler${next.fields.slug}`}
        className="btn btn-primary"
        role="button"
      >
        Next
      </Link>
    );
  return (
    <Layout title={mdx.frontmatter.title}>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <EulerCode />
      <EulerNotes />
      <div className="d-flex justify-content-between">
        {prevLink}
        {nextLink}
      </div>
    </Layout>
  );
};

export default Euler;
