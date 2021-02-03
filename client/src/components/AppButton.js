import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../styles/theme";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
      },
      "&:hover fieldset": {
        borderWidth: "2px",
        borderColor: theme.palette.primary.main,
      },
    },
    "& label": {
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.primary.main,
      textTransform: "none",
    },
  },
});
export default function CustomButton({
  secondary,
  label,
  onClick,
  ...otherProps
}) {
  const classes = useStyles();
  return (
    <Button
      className={classes.root}
      color="primary"
      variant={secondary ? "outlined" : "contained"}
      onClick={onClick}
      {...otherProps}
    >
      <Typography variant={"h6"} style={{ textTransform: "none" }}>
        {label}
      </Typography>
    </Button>
  );
}
