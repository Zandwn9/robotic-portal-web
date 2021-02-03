import React, { useState } from "react";
import { Grid, Box, Paper } from "@material-ui/core";

import { useHistory } from "react-router-dom";
import { registerWithEmail } from "../../firebase/auth";
import TextField from "../../components/form/TextField";
import SubmitButton from "../../components/form/SubmitButton";
import AutocompleteField from "../../components/form/AutocompleteField";
import AppText from "../../components/AppText";
import AppLink from "../../components/AppLink";
import Spinner from "../../components/Spinner";
import * as Yup from "yup";
import Form from "../../components/form";
import { useFormikContext } from "formik";
import { getClientNamesList } from "../../firebase/firestore/clients";

export default function Register() {
  const [clientsList, setClientsList] = useState(null);
  getClientNamesList().then((clients) => setClientsList(clients));

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is invalid.").email().label("Email"),
    password: Yup.string()
      .required()
      .min(6, "Password must have at least 6 characters")
      .label("Password"),
  });

  const initialValues = { email: "", password: "", password2: "", company: "" };
  const history = useHistory();
  const [loginError, setLoginError] = useState("");

  function handleOnRegister(values) {
    console.log(values);
    registerWithEmail(values)
      .then((token) => {
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
      {clientsList ? (
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
          <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleOnRegister}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <AppText variant={"h5"} text="Create an Account" />
              </Grid>
              <Grid item>
                <TextField label="Full Name" name="fullName" type="text" />
              </Grid>
              <Grid item>
                <TextField label="Email" name="email" type="email" />
              </Grid>
              <Grid item xs={12}>
                <AutocompleteField
                  options={clientsList}
                  label={"Company"}
                  name={"company"}
                />
              </Grid>
              <Grid item>
                <TextField label="Password" name="password" type="password" />
              </Grid>
              <Grid item>
                <TextField
                  label="Retype Password"
                  name="password2"
                  type="password"
                />
              </Grid>
              <Grid item>
                <SubmitButton type="submit" label="Register" />
              </Grid>
              <Grid item>
                <AppLink to="/login" text="Already have an account?" />
              </Grid>
            </Grid>
          </Form>
        </Paper>
      ) : (
        <Spinner />
      )}
    </Box>
  );
}
