import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import SectionContacts from 'views/SectionsPage/Sections/SectionContacts';

// Sections for this page
import SectionProduct from "./Sections/SectionProduct.jsx";
import SectionTeam from "./Sections/SectionTeam.jsx";
import SectionWork from "./Sections/SectionWork.jsx";

class AboutUsPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          brand="Butch Barber"
          links={<HeaderLinks dropdownHoverColor="danger" />}
          fixed
          changeColorOnScroll={{
            height: 300,
            color: "danger"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg8.jpg")} filter="dark">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>Every Cut has as Story.</h1>
                <h4>
                Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter pursla
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main,classes.mainRaised)}>
          <div className={classes.container}>
            <SectionProduct />
          </div>
    
        </div>
        <div style = {{padding: '2rem'}}></div>
        <SectionContacts/>
  
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(AboutUsPage);
