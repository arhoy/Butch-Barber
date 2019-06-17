import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons



// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import NavPills from "components/NavPills/NavPills.jsx";



import pricingStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/pricingStyle.jsx";


import card1 from "assets/img/examples/barber1.jpg";
import card2 from "assets/img/examples/barber2.jpg";
import card3 from "assets/img/examples/barber3.jpg";

function SectionPricing2({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
  
      {/* Pricing 2 START */}
      <div className={classes.pricing}>
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
              <h2 className={classes.title} 
                style = {{marginBottom:'-2rem',textTransform:'uppercase'}}> 
               Shave Services
              </h2>
      
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
          
            <GridItem xs={12} sm={4} md={4}>
              <Card
                pricing
                raised
                background
                style={{ backgroundImage: `url(${card1})`}}
              >
                <CardBody pricing background>
                  <h3 className={classes.cardCategoryWhite}>Butch's Skin Fade</h3>
                  <h1 className={classes.cardTitleWhite}>
                    <small>$</small> 40
                  </h1>
                  <ul>
                    <li>
                      Any fade to zero
                    </li>
                    <li>
                      <b>Any blade</b>
                    </li>
                    <li>
                      Hot/Cold Towel
                    </li>
                      <li>
                      <b>35 minutes</b>
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="danger" round>
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card
                pricing
                raised
                background
                style={{ backgroundImage: `url(${card2})` }}
              >
                <CardBody pricing background>
                  <h3 className={classes.cardCategoryWhite}>Basic Beard Trim</h3>
                  <h1 className={classes.cardTitleWhite}>
                    <small>$</small> 12
                  </h1>
                  <ul>
                    <li>
                      With Clippers
                    </li>
                    <li>
                      <b>After Shave</b>
                    </li>
                    <li>
                       15 min
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="danger" round>
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
    

            <GridItem xs={12} sm={4} md={4}>
              <Card
                pricing
                raised
                background
                style={{ backgroundImage: `url(${card3})` }}
              >
                <CardBody pricing background>
                  <h3 className={classes.cardCategoryWhite}>Butch's Beard Trim </h3>
                  <h1 className={classes.cardTitleWhite}>
                    <small>$</small> 15
                  </h1>
                  <ul>
                    <li>
                      Hot / Cold Towel
                    </li>
                    <li>
                      <b>After shave + lotion</b>
                    </li>
                    <li>
                       Straight Blade
                    </li>
                      <li>
                      <b>20 minutes</b>
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="danger" round>
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
   
         
    
          </GridContainer>
        </div>
      </div>
      {/* Pricing 2 END */}
  
    </div>
  );
}

export default withStyles(pricingStyle)(SectionPricing2);
