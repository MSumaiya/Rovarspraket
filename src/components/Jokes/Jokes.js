import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import classes from "./Jokes.module.css";
import CustomPopover from "../CustomPopover/CustomPopover";
import CustomTextfield from "../CustomTextfield/CustomTextfield";

export default function Jokes() {
  const url = "http://api.icndb.com/jokes/random";
  const [isLoading, setIsLoading] = useState(true);
  const [joke, setjoke] = useState("");

  async function generateRandomJoke() {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setjoke(data.value.joke);
    setIsLoading(false);
  }

  useEffect(() => {
    setTimeout(() => {
      generateRandomJoke();
    }, 1500);
  }, []);

  /* Popover functionality */
  const [anchorEl, setAnchorEl] = React.useState(null);
  const popoverHandleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Box m={3}>
        {isLoading ? (
          <Typography variant="h5">Loading...</Typography>
        ) : (
          <CustomTextfield
            value={joke}
          />
        )}
        <Box className={classes.button} m={2}>
          <Box width="200px" pr={1}>
            <Button onClick={generateRandomJoke} fullWidth variant="contained">
              Generate Jokes
            </Button>
          </Box>
          <CopyToClipboard text={joke}>
            <Box width="150px" pl={1}>
              <Button
                onClick={popoverHandleClick}
                fullWidth
                variant="contained"
              >
                Copy
              </Button>
            </Box>
          </CopyToClipboard>
          <CustomPopover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
          ></CustomPopover>
        </Box>
      </Box>
      <CustomTextfield/>
    </>
  );
}
