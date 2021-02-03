import React from "react";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Welcome from "./screens/Welcome";
import { Switch, Route } from "react-router-dom";
export default function AuthStack() {
  return (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
}
