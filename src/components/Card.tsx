import React from "react";

interface ICard {
  title: string;
  tags?: string[];
  text?: string | React.ReactNode;
  textMuted?: string;
  children?: any;
}

export default (props: ICard) => (
  <div className="row">
    <div className="card" id="card-left-border">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        {props.tags !== undefined
          ? props.tags.map((tag: string) => (
              <span className="badge badge-light">{tag}</span>
            ))
          : null}
        <p className="card-text mt-1">{props.text}</p>
        <p className="card-text">
          <small className="text-muted">{props.textMuted}</small>
        </p>
        {props.children}
      </div>
    </div>
  </div>
);
