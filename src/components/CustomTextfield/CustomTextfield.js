import React from "react";
import TextField from "@mui/material/TextField";

export default function CustomTextfield({label, value}) {
  return (
    <>
      <TextField
        fullWidth
        id="filled-basic"
        label={label}
        multiline
        rows={2}
        value={value}
      />
    </>
  );
}
