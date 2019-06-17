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

function SectionPricing({ ...props }) {
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
                Find the Best Cut for you 
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
                  <h3 className={classes.cardCategoryWhite}>Butch's Buzz Cut</h3>
                  <h1 className={classes.cardTitleWhite}>
                    <small>$</small> 20
                  </h1>
                  <ul>
                    <li>
                      One Length Cut
                    </li>
                    <li>
                      <b>No Tapering</b>
                    </li>
                    <li>
                      Hot Towel Shave
                    </li>
                      <li>
                      <b>10-15 minutes</b>
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
                  <h3 className={classes.cardCategoryWhite}>Butch's Classic Cut</h3>
                  <h1 className={classes.cardTitleWhite}>
                    <small>$</small> 25-40
                  </h1>
                  <ul>
                    <li>
                      Shampoo
                    </li>
                    <li>
                      <b>Classic clipper/scissor cut</b>
                    </li>
                    <li>
                       Style
                    </li>
                      <li>
                      <b>20-45 minutes</b>
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
                  <h3 className={classes.cardCategoryWhite}>Butch's Signature </h3>
                  <h1 className={classes.cardTitleWhite}>
                    <small>$</small> 30-50
                  </h1>
                  <ul>
                    <li>
                      Shampoo
                    </li>
                    <li>
                      <b>Classic clipper/scissor cut</b>
                    </li>
                    <li>
                       Hot Style Shave + Style + Beverage
                    </li>
                      <li>
                      <b>25-50 minutes</b>
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

export default withStyles(pricingStyle)(SectionPricing);
