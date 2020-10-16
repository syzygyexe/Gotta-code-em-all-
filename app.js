import React from "react";
import { MainPage } from "./containers/main";
import { BrowseContainer } from "./containers/browse";
import * as ROUTES from "./constants/routes";

// RE-DO to NPM FORMAT(!!!!!!!!!!!)
const Router = window.ReactRouterDOM.BrowserRouter;
const Route = window.ReactRouterDOM.Route;
const Link = window.ReactRouterDOM.Link;
const Prompt = window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
      </Switch>
      <Switch>
        <Route path="/browse" exact component={BrowseContainer} />
      </Switch>
    </Router>
  );
}
