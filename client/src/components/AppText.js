import React from "react";
import { Typography } from "@material-ui/core";
import theme from "../styles/theme";

export default function CustomText({ variant, text, center, error }) {
  return (
    <Typography
      color={error ? theme.palette.error : "primary"}
      style={{
        fontFamily: theme.typography.fontFamily,
        textAlign: center && "center",
      }}
      variant={variant}
    >
      {text}
    </Typography>
  );
}
