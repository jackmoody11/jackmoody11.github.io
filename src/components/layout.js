import React from "react";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import Head from "./head";
import "../styles/styles.sass";

export default props => (
  <>
    <Head />
    <Navigation />
    <div className="container py-5">{props.children}</div>
    <Footer />
  </>
);
