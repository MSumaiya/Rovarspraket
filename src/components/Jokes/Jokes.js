import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomTextfield from "../CustomTextfield/CustomTextfield";
import Encrypted from "./../Encrypted/Encrypted";
import CustomButton from "../CustomButton/CustomButton";

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
        {joke && <CustomTextfield label="Joke of the day" value={joke} />}
        <CustomButton
          onClick={generateRandomJoke}
          buttonName="Generate Jokes"
        />
      </Box>
      <Encrypted joke={joke} />
    </>
  );
}
