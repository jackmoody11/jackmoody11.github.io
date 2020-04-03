import React from "react";
import Logo from "../../static/img/jackmoody_logo.png";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import "../styles/styles.sass";
export default props => (
  <>
    <Navigation />
    {props.children}
    <Footer />
  </>
);
