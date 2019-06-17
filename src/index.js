import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.3.0";

// pages for this product
import HairCutsPage from "views/HairCutPage/HairCutsPage.jsx";
import AboutUsPage from "views/AboutUsPage/AboutUsPage";

import SectionsPage from "views/SectionsPage/SectionsPage.jsx";
import PresentationPage from "views/PresentationPage/PresentationPage.jsx";

import SignupPage from "views/SignupPage/SignupPage.jsx";
import ErrorPage from "views/ErrorPage/ErrorPage.jsx";
import ShavesPage from "./views/ShavesPage/ShavesPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/haircuts" component={HairCutsPage} />
      <Route path="/shaves" component={ShavesPage} />
      <Route path="/blog-post" component={SectionsPage} />
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/signup-page" component={SignupPage} />
      <Route path="/error-page" component={ErrorPage} />
      <Route exact path="/" component={PresentationPage} />
      <Redirect to = "/error-page"/>
    </Switch>
  </Router>,
  document.getElementById("root")
);
