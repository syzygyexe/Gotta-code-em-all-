import React from "react";
import { MainPage } from "./containers/main";
import { BrowseContainer } from "./containers/browse";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/browse' component={BrowseContainer} />
      </Switch>
    </Router>
  );
}
