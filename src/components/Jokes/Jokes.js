import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomTextfield from "../CustomTextfield/CustomTextfield";
import Encrypted from "./../Encrypted/Encrypted";
import CustomButton from "../CustomButton/CustomButton";

export default function Jokes() {
  const url = "http://api.icndb.com/jokes/random";
  const [isLoading, setIsLoading] = useState(false);
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(null);
  const [userInput, setUserInput] = useState("");

  /* New */
  const [userInputPressed, setuserInputPressed] = useState(false);
  const [generateJokeButtonPressed, setGenerateJokeButtonPressed] =
    useState(false);
  /* New */

  const handleChange = (event) => {
    setUserInput(event.target.value);
    setJoke("");
    setuserInputPressed(!userInputPressed);
  };

  function generateRandomJoke() {
    setIsLoading(true);
    setUserInput("");
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
        setUserInput("");
      });

    /* New */
    setGenerateJokeButtonPressed(!generateJokeButtonPressed);
    /* New */
  }

  return (
    <>
      <Box m={3}>
        {error && <Typography variant="h5">{error}</Typography>}
        {isLoading && <Typography variant="h5">Loading...</Typography>}
        <CustomTextfield
          onChange={handleChange}
          label="Write a text or press the 'Generate a Joke' button below to get Joke of the day"
          value={joke || userInput}
        />
        <CustomButton
          onClick={generateRandomJoke}
          buttonName="Generate a Joke"
        />
      </Box>
      <Encrypted
        joke={joke || userInput}
        userInputPressed={userInputPressed}
        generateJokeButtonPressed={generateJokeButtonPressed}
      />
    </>
  );
}
