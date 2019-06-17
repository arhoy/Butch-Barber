import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Map from "@material-ui/icons/Map";
import Star from "@material-ui/icons/Star";

import InfoArea from "components/InfoArea/InfoArea.jsx";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.jsx";
import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

const style = {
  ...productStyle,
  justifyContentCenter: {
    justifyContent: "center"
  }
};

class SectionTeam extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4}>
          <InfoArea style = {{marginBottom:'0rem'}}
            title="Like on Facebook"
            description="Like us on Facebook and get $5 of your next cut!"
            icon={Favorite}
            iconColor="info"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <InfoArea style = {{marginBottom:'0rem'}}
            title="Local"
            description="We are not a big name franchise, but a local barbershop with an average of 10 years Barber experience."
            icon={Map}
            iconColor="success"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <InfoArea style = {{marginBottom:'0rem'}}
            title="Highly Rated"
            description="Our customers love us! Check out some of our rating on Google Review or Facebook."
            icon={Star}
            iconColor="danger"
            vertical
          />
        </GridItem>
      </GridContainer>
      
    </div>

    );
  }
}

export default withStyles(style)(SectionTeam);
