import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

export default function SubmitButton({ label }) {
  const { submitForm, values } = useFormikContext();

  return <AppButton label={label} type="submit" onClick={() => submitForm()} />;
}
