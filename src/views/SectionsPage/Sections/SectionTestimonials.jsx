import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import FormatQuote from "@material-ui/icons/FormatQuote";
import Star from "@material-ui/icons/Star";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import Muted from "components/Typography/Muted.jsx";
import Warning from "components/Typography/Warning.jsx";

import testimonialsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/testimonialsStyle.jsx";

import dg2 from "assets/img/dg2.jpg";
import cardProfile1Square from "assets/img/faces/card-profile1-square.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import cardProfile3Square from "assets/img/faces/marc.jpg";
import cardProfile4Square from "assets/img/faces/card-profile4-square.jpg";
import cardProfile6Square from "assets/img/faces/card-profile6-square.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import christian from "assets/img/faces/christian.jpg";

function SectionTestimonials({ ...props }) {
  const { classes, ...rest } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className="cd-section" {...rest}>
      {/* Testimonials 1 START */}
      <div
        className={`${classes.testimonials} ${classes.sectionImage}`}
        style={{ backgroundImage: `url(${dg2})` }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            >
              <h2 className={classes.title}>A Cut Above The Rest</h2>
              <h5 className={classes.description}>
               Quality and service you can trust. Here is what some of our valued clients have to say!
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial className={classes.card1}>
                <div className={classes.icon}>
                  <FormatQuote />
                </div>
                <CardBody>
                  <h5 className={classes.cardDescription}>
                   I have been going to Butch for the past 5 years and I can say I always have been really pleased with the service provided. I highly recommend!
                  </h5>
                </CardBody>
                <CardFooter testimonial>
                  <h4 className={classes.cardTitle}>Tim</h4>
                  <h6 className={classes.cardCategory}>Client for 5 years</h6>
                  <CardAvatar testimonial testimonialFooter>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={cardProfile1Square} alt="..." />
                    </a>
                  </CardAvatar>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial className={classes.card1}>
                <div className={classes.icon}>
                  <FormatQuote />
                </div>
                <CardBody>
                  <h5 className={classes.cardDescription}>
                  I often get asked where I get my haircut and I mention it is at Butch Barber Shop. 
                  I have tried so many other places before finally becoming a regular customer here.
                  </h5>
                </CardBody>
                <CardFooter testimonial>
                  <h4 className={classes.cardTitle}>Christian</h4>
                  <h6 className={classes.cardCategory}>Butch Customer for life</h6>
                  <CardAvatar testimonial testimonialFooter>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={cardProfile3Square} alt="..." />
                    </a>
                  </CardAvatar>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial className={classes.card1}>
                <div className={classes.icon}>
                  <FormatQuote />
                </div>
                <CardBody>
                  <h5 className={classes.cardDescription}>
                    Went there for the first time and I
                    love the atmosphere. They play awesome music. Great barbers too. I see any of them and leave with a great looking haircut.
                  </h5>
                </CardBody>
                <CardFooter testimonial>
                  <h4 className={classes.cardTitle}>Alex</h4>
                  <h6 className={classes.cardCategory}>First Time Customer</h6>
                  <CardAvatar testimonial testimonialFooter>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={cardProfile2Square} alt="..." />
                    </a>
                  </CardAvatar>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Testimonials 1 END */}
    
    </div>
  );
}

export default withStyles(testimonialsStyle)(SectionTestimonials);
