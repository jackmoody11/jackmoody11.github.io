import React from "react";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import Head from "./head";

export default props => (
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
