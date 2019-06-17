import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionOffice from "views/HairCutPage/Sections/SectionOffice.jsx";
import PricingPage from 'views/SectionsPage/Sections/SectionPricing.jsx';

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.jsx";
import SectionContacts from 'views/SectionsPage/Sections/SectionContacts';
import Footer from "../../components/Footer/Footer";

class HairCutPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          brand="Butch Barber"
          links={<HeaderLinks dropdownHoverColor="danger" />}
          fixed
          color="danger"
          changeColorOnScroll={{
            height: 10,
            color: "white"
          }}
        />
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem
                md={8}
                sm={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
             
              </GridItem>
            </GridContainer>
          </div>
        <div className={classNames(classes.main)}>
          <div className={classes.container}>
            <PricingPage/>
            <SectionOffice />
          </div>
          <SectionContacts/>
        </div>
          <Footer/>

    
      </div>
    );
  }
}

export default withStyles(aboutUsStyle)(HairCutPage);
