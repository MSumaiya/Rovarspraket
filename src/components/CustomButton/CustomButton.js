import React from "react";
import Box from "@mui/material/Box";
import classes from "./CustomButton.module.css";
import Button from "@mui/material/Button";

export default function CustomButton(props) {
    
  return (
    <>
      <Box className={classes.button} m={2}>
        <Box width="200px" pr={1}>
          <Button
            sx={{ background: "black", color: "#DCAE96" }}
            onClick={props.onClick}
            fullWidth
            variant="contained"
          >
            {props.buttonName}
          </Button>
        </Box>
      </Box>
    </>
  );
}
