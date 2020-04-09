import React from "react";
import { Link } from "gatsby";
import moment from "moment";

const BlogPostCard = ({ edge: { node } }) => (
  <div className="card">
    <img
      className="card-img-top"
      src="https://via.placeholder.com/640x360"
      alt="Relevant Blog Post Content"
    />
    <div className="card-body">
      <h5 className="card-title">{node.frontmatter.title}</h5>
      {node.frontmatter.tags.map((tag) => (
        <span className="badge badge-light">{tag}</span>
      ))}
      <p className="card-text mt-1">{node.excerpt}</p>
      <p className="card-text">
        <small className="text-muted">
          <i className="far fa-clock mr-1"></i>
          {moment(node.frontmatter.date).format("MMM D, YYYY")}
        </small>
      </p>
      <p className="card-text">
        <Link to={`/blog/${node.fields.slug}`}>Continue Reading</Link>
      </p>
    </div>
  </div>
);

export default BlogPostCard;
