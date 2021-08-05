import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { Navbar } from "../common/Navbar";
import { Login } from "../features/login/Login";
import { Profile } from "../features/profile/Profile";
import { Questions } from "../features/questions/Questions";

export function Router(props) {
  return (
    <BrowserRouter>
      <Navbar {...props} />
      <div className="wrapper">
        <div className="content">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/question" component={Questions} />
            <Route path="/profile/:id" component={Profile} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
