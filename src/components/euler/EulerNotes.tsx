import React from "react";
import Card from "../Card";

export default () => {
  const message: React.ReactNode = (
    <p>
      The full <code>utils</code> module can be found on{" "}
      <a
        href="https://github.com/jackmoody11/project-euler-solutions/tree/master/python/utils.py"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i> GitHub here
      </a>
    </p>
  );
  return <Card title="Notes" text={message}></Card>;
};
