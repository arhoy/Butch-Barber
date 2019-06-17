/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import Info from "@material-ui/icons/Info";
import Phone from "@material-ui/icons/Phone";
import ViewDay from "@material-ui/icons/ViewDay";
import Dns from "@material-ui/icons/Dns";
import Build from "@material-ui/icons/Build";
import ListIcon from "@material-ui/icons/List";
import People from "@material-ui/icons/People";
import Assignment from "@material-ui/icons/Assignment";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Chat from "@material-ui/icons/Chat";
import Call from "@material-ui/icons/Call";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccountBalance from "@material-ui/icons/AccountBalance";
import ArtTrack from "@material-ui/icons/ArtTrack";
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import LocationOn from "@material-ui/icons/LocationOn";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Store from "@material-ui/icons/Store";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Layers from "@material-ui/icons/Layers";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import LineStyle from "@material-ui/icons/LineStyle";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { classes, dropdownHoverColor } = props;
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Services"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/haircuts" className={classes.dropdownLink}>
              <LineStyle className={classes.dropdownIcons} /> Haircuts
            </Link>,
            <Link to="/shaves" className={classes.dropdownLink}>
              <Layers className={classes.dropdownIcons} />
              Shaves
            </Link>
          ]}
        />
      </ListItem>
   
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="About Us"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={ViewCarousel}
          dropdownList={[
            <Link to="/about-us" className={classes.dropdownLink}>
              <Info className={classes.dropdownIcons} /> About Us
            </Link>,
            <Link to="/blog-post" className={classes.dropdownLink}>
              <ArtTrack className={classes.dropdownIcons} /> Blog 
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Locations"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Dns}
          dropdownList={[
 
            <a href = "https://goo.gl/maps/Dg7v3vV8E6QoRsTm7" target = "_blank" className={classes.dropdownLink} >
                 <AccountBalance className={classes.dropdownIcons} /> #23 Kubrik Drive, Edmonton AB
            </a>     
            ,
            <a href = "https://goo.gl/maps/3JZZBdgf8bgDnw4V8" target = "_blank" className={classes.dropdownLink} >
                 <AccountBalance className={classes.dropdownIcons} />  10113 141st, Edmonton AB
            </a>
          ]}
        />
      </ListItem>


      <ListItem className={classes.listItem}>
        <Button
          href="tel:5875017726"
          color={window.innerWidth < 960 ? "danger" : "white"}
          className={classes.navButton}
          round
        >
          <Phone className={classes.icons} /> 1 888 444 4447
        </Button>
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "danger"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};

export default withStyles(headerLinksStyle)(HeaderLinks);
