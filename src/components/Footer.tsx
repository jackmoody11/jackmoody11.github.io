import React from "react";
import footerStyles from "./footer.module.sass";

export default () => {
  return (
    <footer className={footerStyles.footer}>
      <div className="row text-center">
        <div className="col-6 offset-3">
          <span className="text-muted">&copy; Jack Moody 2020</span>
        </div>
        <div className={"col-3 p-0 " + footerStyles.socialIcons}>
          <a
            href="https://github.com/jackmoody11"
            target="_blank"
            className="mr-3"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" title="GitHub"></i>
          </a>
          <a
            href="https://linkedin.com/in/jacklmoody"
            target="_blank"
            className="mr-3"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" title="LinkedIn"></i>
          </a>
          <a
            href="https://stackoverflow.com/users/8206432/jack-moody"
            target="_blank"
            className="mr-3"
            rel="noopener noreferrer"
          >
            <i className="fab fa-stack-overflow" title="Stack Overflow"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
