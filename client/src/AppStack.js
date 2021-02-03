import React from "react";
import { Box, Paper, Button } from "@material-ui/core";
import { logout } from "./firebase/auth";
import { Switch, Route, Redirect } from "react-router-dom";
import ProjectsList from "./screens/ProjectsList";
import FileExplorer from "./screens/FileExplorer";
export default function AppStack() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/projects" />
      </Route>
      <Route path="/projects/:id">
        <FileExplorer />
      </Route>
      <Route path="/projects">
        <ProjectsList />
      </Route>
    </Switch>
  );
}
