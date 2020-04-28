import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import footerStyles from "./footer.module.sass";

export default () => {
  return (
    <footer className={footerStyles.footer}>
      <Container>
        <Row className="d-flex">
          <Col xs={{ span: 6 }} className="text-left">
            <span className="text-muted">&copy; Jack Moody 2020</span>
          </Col>
          <Col
            xs={{ span: 6 }}
            className={`text-right ${footerStyles.socialIcons}`}
          >
            <a
              href="https://github.com/jackmoody11"
              target="_blank"
              className="mr-3"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/jacklmoody"
              target="_blank"
              className="mr-3"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://stackoverflow.com/users/8206432/jack-moody"
              target="_blank"
              className="mr-3"
              rel="noopener noreferrer"
            >
              <i className="fab fa-stack-overflow"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
