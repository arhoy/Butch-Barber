import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";

import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import contactsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.jsx";

import city from "assets/img/examples/city.jpg";

class SectionContacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
  }
  onSubmitSendMessageHandler(e){
    e.preventDefault();
    console.log('I was submitted!')
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
        <Fragment>
      
        <div className="cd-section" {...rest}>
          {/* Contact us 1 START */}
          <div> 
            
          </div>
          <div
            className={`${classes.contacts} ${classes.section}`}
            style={{ backgroundImage: `url(${city})` }}
          >
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <h2 className={classes.title}>Give Us A Shout!</h2>
                  <h5 className={classes.description}>
                    Looking for more info? Send us a message and we will get back to you shortly!
                    For booking an appointment online please visit <Link className = "custom__link" to = '/booking'> Booking </Link>
                  </h5>
                  <a href = "https://goo.gl/maps/QE6oe5Fj5kPyRwEE8" target = "_blank"> 
                    <InfoArea
                      className={classes.infoArea}
                      title="11211 142 St NW"
                      description={
                        <span>
                          Edmonton AB  
                          <br /> T5M 4A1
                        </span>
                      }
                      icon={PinDrop}
                    />
                  </a>

                  <a href = "https://goo.gl/maps/8YuPffw7SuEGJr8r9" target = "_blank"> 
                    <InfoArea
                      className={classes.infoArea}
                      title="8882 170 St NW"
                      description={
                        <span>
                          Edmonton AB  
                          <br />  T5T 4M2
                        </span>
                      }
                      icon={PinDrop}
                    />
                  </a>
        
                </GridItem>
                <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
                  <Card className={classes.card1}>
                    <form 
                      method = "POST" 
                      onSubmit = {this.onSubmitSendMessageHandler}
                      data-netlify = "true"
                    >
                      <CardHeader
                        contact
                        color="danger"
                        className={classes.textCenter}
                      >
                        <h4 className={classes.cardTitle}>Contact Us</h4>
                      </CardHeader>
                      <CardBody>
                        <GridContainer>
                          <GridItem xs={12} sm={6} md={6}>
                            <CustomInput
                              labelText="First Name"
                              id="first"
                              name = "FirstName"
                              formControlProps={{
                                fullWidth: true
                              }}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={6} md={6}>
                            <CustomInput
                              labelText="Last Name"
                              name = "LastName"
                              id="last"
                              formControlProps={{
                                fullWidth: true
                              }}
                            />
                          </GridItem>
                        </GridContainer>
                        <CustomInput
                          labelText="Email Address"
                          id="email-address"
                          name = "emailAddress"
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                        <CustomInput
                          labelText="Your Message"
                          id="message"
                          name = "message"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            multiline: true,
                            rows: 5
                          }}
                        />
                      </CardBody>
                      <CardFooter className={classes.justifyContentBetween}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              tabIndex={-1}
                              onClick={() => this.handleToggle(1)}
                              checkedIcon={
                                <Check className={classes.checkedIcon} />
                              }
                              icon={<Check className={classes.uncheckedIcon} />}
                              classes={{
                                checked: classes.checked,
                                root: classes.checkRoot
                              }}
                            />
                          }
                          classes={{ label: classes.label }}
                          label="I'm not a robot"
                          data-netlify-recaptcha= "true"
                        />
                        <Button
                           color="danger" 
                           className={classes.pullRight}
                           type = "submit"
                        >
                          Send Message
                        </Button>
                      </CardFooter>
                    </form>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
          {/* Contact us 1 END */}
      
        </div>

      </Fragment>
    
    );
  }
}

export default withStyles(contactsStyle)(SectionContacts);
