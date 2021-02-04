import React, { useContext } from "react";
import PrivateRoute from "./components/PrivateRoute";
import { Switch, Route, Redirect } from "react-router-dom";
import ProjectsList from "./screens/ProjectsList";
import FileExplorer from "./screens/FileExplorer";
import { AuthContext } from "./context/AuthProvider";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Welcome from "./screens/Welcome";

export default function AppStack() {
  const { user } = useContext(AuthContext);
  return (
    <Switch>
      <Route exact path="/">
        {user ? <Redirect to="/projects" /> : <Welcome />}
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <PrivateRoute path="/projects/:id">
        <FileExplorer />
      </PrivateRoute>
      <PrivateRoute path="/projects">
        <ProjectsList />
      </PrivateRoute>
    </Switch>
  );
}
