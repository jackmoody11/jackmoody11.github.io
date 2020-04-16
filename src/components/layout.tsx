import React from "react";
import Footer from "./footer";
import Navigation from "./navigation";
import Head from "./head";
import "../styles/styles.sass";

export default (props: any) => (
  <>
    <Head {...props} />
    <div id="page-container">
      <Navigation />
      <div className="container py-5">
        <div className="mb-5">{props.children}</div>
      </div>
      <Footer />
    </div>
  </>
);
