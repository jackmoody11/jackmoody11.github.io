import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";

interface ICard {
  title: string;
  tags?: string[];
  text?: string | React.ReactNode;
  textMuted?: string;
  children?: any;
}

export default (props: ICard) => (
  <Row>
    <Card id="card-left-border">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {props.tags !== undefined
          ? props.tags.map((tag: string) => (
              <Badge variant="light">{tag}</Badge>
            ))
          : null}
        <p className="card-text mt-1">{props.text}</p>
        <p className="card-text">
          <small className="text-muted">{props.textMuted}</small>
        </p>
        {props.children}
      </Card.Body>
    </Card>
  </Row>
);
