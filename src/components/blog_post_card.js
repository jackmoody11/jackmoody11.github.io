import React from "react";
import { Link } from "gatsby";

const BlogPostCard = ({ edge }) => (
  <div className="card">
    <img
      className="card-img-top"
      src="https://via.placeholder.com/640x360"
      alt="Relevant Blog Post Content"
    />
    <div className="card-body">
      <h5 className="card-title">{edge.node.frontmatter.title}</h5>
      {/* {% for tag in page.tags %}
              <span className="badge badge-light">{{ tag }}</span>
          {% endfor %} */}
      <p className="card-text">{edge.node.excerpt}</p>
      <p className="card-text">
        <small className="text-muted">{}</small>
      </p>
      <p className="card-text">
        <Link to={`/blog/${edge.node.fields.slug}`}>Continue Reading</Link>
      </p>
    </div>
  </div>
);

export default BlogPostCard;
