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
  const [joke, setjoke] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [message, setMessage] = useState("");

  async function generateRandomJoke() {
    setIsLoading(true);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setjoke(data.value.joke);
        setIsLoading(false);
        setErrorMessage(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorMessage(true);
        setMessage("Something went wrong");
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
        {isLoading ? (
          <Typography variant="h5">Loading...</Typography>
        ) : (
          <CustomTextfield value={joke} />
        )}
        {errorMessage && (
          <>
            <Typography variant="h5">{message}</Typography>
          </>
        )}

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
