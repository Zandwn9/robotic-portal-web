import React, { useContext } from "react";
import Layout from "../components/Layout";
import { ProjectContext } from "../context/ProjectProvider";
import { Grid, Paper } from "@material-ui/core";

export default function FileExplorer() {
  const { projects } = useContext(ProjectContext);
  return (
    <Layout>
      <Grid container>
        {projects.map((project) => (
          <Grid>
            <Paper>{project.name}</Paper>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
