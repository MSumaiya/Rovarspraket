import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classes from "./Jokes.module.css";

export default function Jokes() {
  const test = "jsdhjkhkjsjlkjlkadjcflkadjflkajnl,";
  const [isLoading, setIsLoading] = useState(true)
  const [joke, setjoke] = useState({})

  const generateRandomJoke = () => {
      console.log("clicked")
  }

  return (
    <>
      <Box m={3}>
        <TextField
          fullWidth
          id="filled-basic"
          label="Jokes of the day"
          multiline
          rows={4}
          value={test}
        />
        <Box className={classes.button} m={2}>
          <Box width="150px" pr={1}>
              <button>hello</button>
            {/* <Button onClick={generateRandomJoke} fullWidth variant="contained">
              Generate Jokes
            </Button> */}
          </Box>
          <Box width="150px" pl={1}>
            <Button fullWidth variant="contained">
              Copy
            </Button>
          </Box>
        </Box>
      </Box>
      <button>Hello</button>
    </>
  );
}
