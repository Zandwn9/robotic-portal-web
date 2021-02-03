import React, { useContext } from "react";
import Layout from "../components/Layout";
import { ProjectContext } from "../context/ProjectProvider";
import { Grid, Paper } from "@material-ui/core";
import theme from "../styles/theme";

export default function ProjectsList() {
  //const { projects } = useContext(ProjectContext);
  const projects = [
    {
      name: "Some Address",
    },
    { name: "Some other Address" },
  ];
  return (
    <Layout title={"Projects List"}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {projects.map((project) => (
          <Grid item>
            <Paper
              elevation={2}
              style={{
                backgroundColor: theme.palette.primary.main,
                padding: "3rem",
              }}
            >
              {project.name}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
