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
      fields {
        slug
      }
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
};

const Euler = ({ data: { mdx }, pageContext }: EulerProps) => {
  const { next, prev } = pageContext;
  let prevLink =
    prev === null ? null : (
      <Link
        to={`euler${prev.fields.slug}`}
        className="btn btn-primary mr-auto"
        role="button"
      >
        Previous
      </Link>
    );
  let nextLink =
    next === null ? null : (
      <Link
        to={`euler${next.fields.slug}`}
        className="btn btn-primary ml-auto"
        role="button"
      >
        Next
      </Link>
    );

  /*
   * Slug will be of the form "/problem-xyz/"
   * Split at "-" leaving ["/problem", "xyz/"] then take xyz from second item in array
   */
  let problemNumber: string = mdx.fields.slug.split("-")[1].slice(0, -1);

  return (
    <Layout title={mdx.frontmatter.title}>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <EulerCode problemNumber={problemNumber} />
      <EulerNotes />
      <div className="row">
        {prevLink}
        {nextLink}
      </div>
    </Layout>
  );
};

export default Euler;
