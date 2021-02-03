import React from "react";
import { Grid, Box, Paper } from "@material-ui/core";
import TextField from "../../components/form/TextField";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import AppLink from "../../components/AppLink";

export default function SignIn() {
  return (
    <Box
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        style={{
          height: "100vh",
          maxWidth: "600px",
          backgroundColor: "#000",
          padding: "0 8rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          container
          component="form"
          direction="column"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <AppText variant={"h5"} text="Create an Account" />
          </Grid>
          <Grid item>
            <TextField label="Full Name" type="text" />
          </Grid>
          <Grid item>
            <TextField label="Email" type="email" />
          </Grid>
          <Grid item>
            <TextField label="Company" type="text" />
          </Grid>
          <Grid item>
            <TextField label="Password" type="password" />
          </Grid>
          <Grid item>
            <TextField label="Retype Password" type="password" />
          </Grid>
          <Grid item>
            <AppButton label="Register" primary onClick={() => {}} />
          </Grid>
          <Grid item>
            <AppLink to="/login" text="Already have an account?" />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
