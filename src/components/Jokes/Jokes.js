import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import classes from "./Jokes.module.css";
import CustomTextfield from "../CustomTextfield/CustomTextfield";
import Encrypted from "./../Encrypted/Encrypted";

export default function Jokes() {
  const url = "http://api.icndb.com/jokes/random";
  const [isLoading, setIsLoading] = useState(true);
  const [joke, setJoke] = useState(null);
  const [error, setError] = useState(null);

  function generateRandomJoke() {
    setIsLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setJoke(data.value.joke);
        setIsLoading(false);
        setError("");
      })
      .catch((err) => {
        setJoke(null);
        setIsLoading(false);
        setError(err.message);
      });
  }

  useEffect(() => {
    setTimeout(() => {
      generateRandomJoke();
    }, 1000);
  }, []);

  return (
    <>
      <Box m={3}>
        {error && <Typography variant="h5">{error}</Typography>}
        {isLoading && <Typography variant="h5">Loading...</Typography>}
        {joke && <CustomTextfield value={joke} />}

        <Box className={classes.button} m={2}>
          <Box width="200px" pr={1}>
            <Button onClick={generateRandomJoke} fullWidth variant="contained">
              Generate Jokes
            </Button>
          </Box>
        </Box>
      </Box>
      <Encrypted joke={joke} />
    </>
  );
}
