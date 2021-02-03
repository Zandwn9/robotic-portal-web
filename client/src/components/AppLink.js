import React from "react";
import { Link as MuiLink } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import theme from "../styles/theme";

export default function CustomLink({ variant, text, to }) {
  return (
    <RouterLink to={to} style={{ textDecoration: "none" }}>
      <MuiLink
        color="primary"
        style={{
          fontFamily: theme.typography.fontFamily,
          textTransform: "none",
          textDecoration: "none",
        }}
        variant={variant}
      >
        {text}
      </MuiLink>
    </RouterLink>
  );
}
