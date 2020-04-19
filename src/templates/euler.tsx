import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/Layout";
import EulerNotes from "../components/euler/EulerNotes";
import EulerCode from "../components/euler/EulerCode";

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

type EulerProps = {
  data: any;
  pageContext: any;
}

const Euler = ({ data: { mdx }, pageContext }: EulerProps) => {
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
