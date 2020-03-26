import React from "react";
import Logo from "../../static/img/jackmoody_logo.png";
import Styles from "../../static/css/styles.min.css";
import Footer from "../component/footer";
import Navigation from "../component/navigation";

export default ({ children }) => (
  <>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="Jack Moody is a student at the University of North Carolina - Chapel Hill. See some of his work here."
    />
    <title>Jack Moody</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href={Styles} />

    <link rel="icon" href={Logo} />

    <Navigation />
    {children}
    <Footer />
  </>
);
