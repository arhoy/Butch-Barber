import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/coßre components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";

import carouselStyle from "assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx";

import image1 from "assets/img/bg.png";
import image2 from "assets/img/bg2.png";
import image3 from "assets/img/bg3.png";
import image4 from "assets/img/bg_refer_friend.png";

function SectionCarousel() {
//   const { classes } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div 
    //    className={classes.section} 
        id="carousel"
      //  style = {{maxWidth: '100vh'}}
    >
      <div 
        // className={classes.container}
        >
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} style = {{margin: '0 auto', maxWidth: '100vh'}}>
            <Card>
              <Carousel {...settings}>
                <div>
                  <img
                    src={image1}
                    alt="First slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img
                    src={image3}
                    alt="Third slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img
                    src={image4}
                    alt="Fourth Slide"
                    className="slick-image"
                  />
                    <div className="slick-caption">
                    <h4 style = {{color:'black'}}>
                      * Friend must be a new customer, some restrictions may apply
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default withStyles(carouselStyle)(SectionCarousel);