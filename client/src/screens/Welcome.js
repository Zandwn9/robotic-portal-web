import React from "react";
import { Grid, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import GoogleButton from "react-google-button";
import LogoContainer from "../components/LogoContainer";

export default function Welcome() {
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
      <LogoContainer>
        <Grid
          container
          component="form"
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <AppText variant={"h4"} center text={"Robotic Imaging Portal"} />
          </Grid>
          <Grid item>
            <Link to={"/login"}>
              <AppButton label="Log In" />
            </Link>
          </Grid>
          <Grid item>
            <Link to={"/register"}>
              <AppButton label="Create an Account" secondary />
            </Link>
          </Grid>
          <Grid item>
            <AppText variant={"body1"} text={"Or"} />
          </Grid>
          <Grid item>
            <GoogleButton />
          </Grid>
        </Grid>
      </LogoContainer>
    </Box>
  );
}
