import React from "react";
import { MainPage } from "./containers/main";

// RE-DO TO NPM FORMAT
// const Router = window.ReactRouterDOM.BrowserRouter;
// const Route = window.ReactRouterDOM.Route;
// const Link = window.ReactRouterDOM.Link;
// const Prompt = window.ReactRouterDOM.Prompt;
// const Switch = window.ReactRouterDOM.Switch;
// const Redirect = window.ReactRouterDOM.Redirect

export function App() {
  return (
    <Router>
      <Switch>
        <MainPage />
      </Switch>
    </Router>
  )
}
