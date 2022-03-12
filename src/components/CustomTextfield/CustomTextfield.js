import React from "react";
import TextField from "@mui/material/TextField";

export default function CustomTextfield(props) {
  return (
    <>
      <TextField
        fullWidth
        id="filled-basic"
        label="Jokes of the day"
        multiline
        rows={4}
        value={props.value}
      />
    </>
  );
}
