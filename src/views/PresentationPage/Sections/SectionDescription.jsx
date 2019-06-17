import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

// @material-ui icons
import Apps from "@material-ui/icons/Apps";
import ViewDay from "@material-ui/icons/ViewDay";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.jsx";

class SectionDescription extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={8} sm={8}>
              <h4 className={classes.description}>
                At  <span style = {{fontWeight: '600'}}>Butch Barber</span> we are commited to the highest quality standards and have been serving the Detroit area for over 10 years.
                Our goal is to give you the classic barber shop experience each and every time you walk through our doors.
              </h4>
            </GridItem>
          </GridContainer>
          <div className={classes.features}  style = {{marginTop: '-5rem'}}>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Classic Barber cut"
                  description= "Turning heads with a style that never goes out of style"
                  icon={Apps}
                  iconColor="danger"
                  vertical={true}
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Simple Buzz cut"
                  description=" Shampoo, cut. In and out. Just as you expect. "
                  icon={ViewDay}
                  iconColor="primary"
                  vertical={true}
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Clean Modern Cut"
                  description="Modern stylish barber cut. Clean crisp lines with a modern look"
                  icon={ViewCarousel}
                  iconColor="success"
                  vertical={true}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(descriptionStyle)(SectionDescription);
