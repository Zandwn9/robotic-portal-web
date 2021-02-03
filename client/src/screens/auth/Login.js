import React, { useState } from "react";
import { Grid, Box, ButtonGroup, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { loginWithEmail } from "../../firebase/auth";
import TextField from "../../components/form/TextField";
import SubmitButton from "../../components/form/SubmitButton";
import AppText from "../../components/AppText";
import LogoContainer from "../../components/LogoContainer";
import AppLink from "../../components/AppLink";
import * as Yup from "yup";
import Form from "../../components/form";

export default function Login() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is invalid.").email().label("Email"),
    password: Yup.string()
      .required()
      .min(6, "Password must have at least 6 characters")
      .label("Password"),
  });

  const initialValues = { email: "", password: "" };
  const history = useHistory();
  const [loginError, setLoginError] = useState("");

  function handleOnLogin(values) {
    const { email, password } = values;
    loginWithEmail(email, password)
      .then((token) => {
        console.log(token);
        history.push("/");
      })
      .catch((e) => {
        console.log(e);
        setLoginError(e.message);
      });
  }

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
        <Form
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleOnLogin}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <AppText variant={"h5"} text="Portal Login" />
            </Grid>
            <Grid item>
              <TextField label="email" name="email" type="email" />
            </Grid>
            <Grid item>
              <TextField label="password" name="password" type="password" />
            </Grid>
            {loginError && (
              <Grid item>
                <AppText error text={loginError} />
              </Grid>
            )}
            <Grid item>
              <SubmitButton type="submit" label="Log in" />
            </Grid>
            <Grid item>
              <ButtonGroup variant="text" color="primary">
                <Button>
                  <AppLink to="/forgot-password" text="Forgot Password?" />
                </Button>
                <Button>
                  <AppLink to="/register" text="Create an Account" />
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Form>
      </LogoContainer>
    </Box>
  );
}
