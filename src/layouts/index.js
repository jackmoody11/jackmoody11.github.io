import React, { Component } from "react";
import Helmet from "react-helmet";
import Logo from "../../static/img/jackmoody_logo.png";
import Styles from "../../static/css/styles.min.css";

class DefaultLayout extends Component {
  render() {
    return (
      <Helmet>
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
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={Styles} />

        <link rel="icon" href={Logo} />
      </Helmet>
    );
  }
}

export default DefaultLayout;
