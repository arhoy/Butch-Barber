import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Map from "@material-ui/icons/Map";
import Star from "@material-ui/icons/Star";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

class SectionProduct extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={8}>
            <h2 className={classes.title}> About Us </h2>
            <h5 className={classes.description} style = {{textAlign:'left'}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue libero nisl, sed cursus ex luctus at. Fusce ullamcorper nunc id lacus molestie, vel lobortis odio pulvinar. Pellentesque efficitur fringilla nisl, at lacinia magna pulvinar quis. Vivamus rhoncus a justo vitae auctor. Duis ipsum risus, molestie eget bibendum et, consectetur ac ante. Cras tempus sit amet eros vitae rhoncus. Aenean convallis lorem sit amet dui vulputate sollicitudin. Etiam felis felis, iaculis in lectus ut, tempus consequat ligula. Mauris eleifend ante velit. Aenean id vestibulum diam.
<br/><br/>
Donec eget interdum ex, sollicitudin dictum mauris. Suspendisse fringilla sapien ut magna efficitur varius. Suspendisse vitae elit augue. Nullam eleifend, est non finibus dignissim, tellus lacus volutpat metus, in vehicula elit quam in justo. Etiam eu lobortis erat, quis iaculis ipsum. Maecenas aliquam egestas venenatis. Suspendisse cursus tempus posuere. Quisque eget est lectus. Donec nec diam eu libero cursus sollicitudin. Curabitur sollicitudin commodo augue ut dignissim. Donec eu tincidunt diam. Maecenas volutpat sed nunc non elementum. Nam at lectus sodales, malesuada neque sed, sodales lorem. Etiam augue nisi, dictum et magna vitae, tempus efficitur augue. Sed tempor, mi quis mattis porttitor, ipsum arcu vestibulum nunc, eget iaculis quam augue et ante.
<br/><br/>
Aliquam pellentesque ante ac quam finibus, vel egestas eros laoreet. Proin ultricies lacinia tincidunt. Donec vel pulvinar metus. Sed id pulvinar erat, ac hendrerit tortor. Phasellus ut enim lobortis, luctus risus porttitor, gravida ipsum. Nam vehicula magna ut ante cursus congue. Maecenas faucibus dolor nec nunc facilisis, nec placerat erat ornare. Nunc dictum in lorem aliquet consectetur. Integer ultricies ac elit mattis rhoncus. Donec pretium magna odio, a fermentum velit egestas in.
            </h5>
          </GridItem>
        </GridContainer>
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
   
      </div>
    );
  }
}

export default withStyles(productStyle)(SectionProduct);
