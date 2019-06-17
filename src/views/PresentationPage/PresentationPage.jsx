import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { Link } from 'react-router-dom';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/Header.jsx";
import FooterContent from "../../components/Footer/FooterContent";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

// sections for this page
import SectionDescription from "views/PresentationPage/Sections/SectionDescription.jsx";

import PricingPage from 'views/SectionsPage/Sections/SectionPricing.jsx';
import SectionContacts from 'views/SectionsPage/Sections/SectionContacts';
import SectionCarousel from 'views/PresentationPage/Sections/SectionCarousel';
import SectionTestimonials from 'views/SectionsPage/Sections/SectionTestimonials.jsx';
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.jsx";


class PresentationPage extends React.Component {
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
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "danger"
          }}
        />
        <Parallax
          image={require("assets/img/bg5.jpg")}
          className={ classNames( { [classes.parallax] : true }  )}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <div className = "PresentationPage__header">
                    <h1 className = "PresentationPage__header-1">Butch Barber</h1>
                    <h3 className = "PresentationPage__header-message">
                        Hot shaves cool cuts, at an original guys barbershop. Check-in online at any location.
                    </h3>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionDescription />
        </div>
  
        <PricingPage />
        <SectionTestimonials/>
        <SectionCarousel/>
        <SectionContacts/>
        <Footer/>
       
  
      </div>
      //  end of
    );
  }
}

export default withStyles(presentationStyle)(PresentationPage);
