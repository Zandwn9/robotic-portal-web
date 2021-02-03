import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../styles/theme";
import { useFormikContext } from "formik";

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
      "& input": {
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.primary.main,
      },
    },
    "& .MuiInputLabel-root": {
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.primary.main,
    },
  },
});

export default function CustomTextField({
  label,
  name,
  type,
  error,
  ...other
}) {
  const { setFieldValue, values } = useFormikContext();
  const handleTextChange = (e) => {
    setFieldValue(name, e.target.value);
  };
  const classes = useStyles();

  return (
    <TextField
      {...other}
      className={classes.root}
      name={name}
      label={label}
      onChange={handleTextChange}
      value={values[name]}
      variant="outlined"
      color="primary"
      type={type}
    />
  );
}
