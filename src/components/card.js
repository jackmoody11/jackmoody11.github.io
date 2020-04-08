import React from "react";
import { Link } from "gatsby";

const Card = (props) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      {props.tags.map((tag) => (
        <span className="badge badge-light">{tag}</span>
      ))}
      <p className="card-text mt-1">{props.text}</p>
      <p className="card-text">
        <small className="text-muted">{props.textMuted}</small>
      </p>
      {props.children}
    </div>
  </div>
);
