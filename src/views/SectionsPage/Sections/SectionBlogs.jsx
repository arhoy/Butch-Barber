import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Watch from "@material-ui/icons/Watch";
import DeviceHub from "@material-ui/icons/DeviceHub";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Info from "components/Typography/Info.jsx";
import Danger from "components/Typography/Danger.jsx";
import Success from "components/Typography/Success.jsx";

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx";
import SectionContacts from 'views/SectionsPage/Sections/SectionContacts';

import cardBlog4 from "assets/img/examples/card-blog4.jpg";
import office2 from "assets/img/office2.jpg";


function SectionBlogs({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      {/* Blogs 1 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <h2 className={classes.title}>Latest Blogposts</h2>
              <br />
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablito" onClick={e => e.preventDefault()}>
                        <img src={cardBlog4} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardBlog4})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <Info>
                     <DeviceHub/> <h6 className={classes.cardCategory}>LIFESTYLE</h6>
                    </Info>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                            Skin Fades are back and bigger than ever
                      </a>
                    </h3>
                    <p className={classes.description1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue libero nisl, sed cursus ex luctus at. Fusce ullamcorper nunc id lacus molestie, vel lobortis odio pulvinar. Pellentesque efficitur fringilla nisl, at lacinia magna pulvinar quis. Vivamus rhoncus a justo vitae auctor. Duis ipsum risus...
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        {" "}
                        Read More{" "}
                      </a>
                    </p>
                    <p className={classes.author}>
                      by{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <b>Butch Kassidy</b>
                      </a>{" "}
                      , 2 days ago
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={7} md={7}>
                    <Danger>
                      <h6 className={classes.cardCategory}>
                        <Watch />
                        HISTORY
                      </h6>
                    </Danger>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                       A brief history of the word `Barber`
                      </a>
                    </h3>
                    <p className={classes.description1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue libero nisl, sed cursus ex luctus at. Fusce ullamcorper nunc id lacus molestie, vel lobortis odio pulvinar. Pellentesque efficitur fringilla nisl, at lacinia magna pulvinar quis. Vivamus rhoncus a justo vitae auctor. Duis ipsum risus...
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        {" "}
                        Read More{" "}
                      </a>
                    </p>
                    <p className={classes.author}>
                      by{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <b>Butch Kassidy</b>
                      </a>{" "}
                      , 2 weeks ago
                    </p>
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablito" onClick={e => e.preventDefault()}>
                        <img src={office2} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${office2})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablito" onClick={e => e.preventDefault()}>
                        <img src={cardBlog4} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardBlog4})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <Success>
                      <h6 className={classes.cardCategory}>Trendy</h6>
                    </Success>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Celebrities, their go to Barbershop and hairstyles
                      </a>
                    </h3>
                    <p className={classes.description1}>
                    Donec eget interdum ex, sollicitudin dictum mauris. Suspendisse fringilla sapien ut magna efficitur varius.
                     Suspendisse vitae elit augue.
                     Nullam eleifend, est non finibus dignissim, tellus lacus volutpat metus, in vehicula elit quam in justo...
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        {" "}
                        Read More{" "}
                      </a>
                    </p>
                    <p className={classes.author}>
                      by{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <b>Butch Kassidy</b>
                      </a>{" "}
                      , Last Month
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 1 END */}
      <SectionContacts/>
     
    </div>
  );
}

export default withStyles(blogsStyle)(SectionBlogs);
