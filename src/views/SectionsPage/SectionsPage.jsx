import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";

import SectionBlogs from "./Sections/SectionBlogs.jsx";


import sectionsPageStyle from "assets/jss/material-kit-pro-react/views/sectionsPageStyle.jsx";

class SectionsPage extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          color="danger"
          brand="Butch Barber"
          links={<HeaderLinks dropdownHoverColor="danger" />}
          fixed
          changeColorOnScroll={{
            height: 10,
            color: "white"
          }}
        />
        <div className={classes.main}>

          <SectionBlogs id="blogs" />

        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(sectionsPageStyle)(SectionsPage);
