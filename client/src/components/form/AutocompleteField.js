import React from "react";
import { Autocomplete } from "@material-ui/lab";
import TextField from "./TextField";
import { useFormikContext } from "formik";

export default function AutocompleteField({ name, label, options }) {
  const { setFieldValue } = useFormikContext();
  return (
    <Autocomplete
      freeSolo
      fullWidth={true}
      options={options}
      autoComplete={"new-password"}
      onChange={(e, v) => {
        setFieldValue(name, v);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          inputProps={{
            ...params.inputProps,
            autocomplete: "new-password",
            form: {
              autocomplete: "off",
            },
          }}
          InputProps={{
            ...params.InputProps,
            className: "",
            startAdornment: null,
            endAdornment: null,
          }}
          autoComplete="new-password"
          label={label}
          name={name}
        />
      )}
    />
  );
}
