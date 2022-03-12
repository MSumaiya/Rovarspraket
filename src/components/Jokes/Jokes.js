import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import classes from "./Jokes.module.css";
import CustomPopover from "../CustomPopover/CustomPopover";

export default function Jokes() {
  const url = "http://api.icndb.com/jokes/random";
  const [isLoading, setIsLoading] = useState(true);
  const [joke, setjoke] = useState("");
  const [encrypted, setEncrypted] = useState("");
  const [decrypted, setDecrypted] = useState("");
  const [errorMessage, setErrorMessage] = useState(false)
  const [message, setMessage] = useState('')

  async function generateRandomJoke() {
    setIsLoading(true);
    /* const response = await fetch(url);
    const data = await response.json(); */

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setjoke(data.value.joke);
        setIsLoading(false);
        setErrorMessage(false)
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorMessage(true)
        /* console.log(err.message); */
        setMessage("Something")
      });
  }

  useEffect(() => {
    setTimeout(() => {
      generateRandomJoke();
    }, 1000);
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

  /* Enryption */
  const handleEncryption = (joke) => {
    /* setEncrypted(joke) */

    let encryptedString = "";

    // Run till length of string
    for (let i = 0; i < joke.length; i++) {
      // checking if character is vowel,
      // if yes then append it as it is
      if (
        joke[i] === "a" ||
        joke[i] === "e" ||
        joke[i] === "i" ||
        joke[i] === "o" ||
        joke[i] === "u" ||
        joke[i] === "A" ||
        joke[i] === "E" ||
        joke[i] === "I" ||
        joke[i] === "O" ||
        joke[i] === "U" ||
        joke[i] === "1" ||
        joke[i] === "2" ||
        joke[i] === "3" ||
        joke[i] === "4" ||
        joke[i] === "5" ||
        joke[i] === "6" ||
        joke[i] === "7" ||
        joke[i] === "8" ||
        joke[i] === "9" ||
        joke[i] === "0"
      ) {
        encryptedString = encryptedString + joke[i];
      }

      // if space then append as it is
      else if (joke[i] === " ") {
        encryptedString = encryptedString + joke[i];
      }

      // else double the consonant and put o in between
      else {
        encryptedString = encryptedString + joke[i] + "o" + joke[i];
      }
    }

    /*  // return translated string
    return res; */

    setEncrypted(encryptedString);
  };

  const handleDecryption = (joke) => {
    let lowercaseJoke = joke.toLowerCase();
    console.log(lowercaseJoke);
    let decryptedString = "";

    /* for (let i = 0; i < lowercaseJoke.length; i++) {
      
      console.log(i);
      if (
        lowercaseJoke[i] === "b" ||
        lowercaseJoke[i] === "c" ||
        lowercaseJoke[i] === "d" ||
        lowercaseJoke[i] === "f" ||
        lowercaseJoke[i] === "g" ||
        lowercaseJoke[i] === "h" ||
        lowercaseJoke[i] === "j" ||
        lowercaseJoke[i] === "k" ||
        lowercaseJoke[i] === "l" ||
        lowercaseJoke[i] === "m" ||
        lowercaseJoke[i] === "n" ||
        lowercaseJoke[i] === "p" ||
        lowercaseJoke[i] === "q" ||
        lowercaseJoke[i] === "r" ||
        lowercaseJoke[i] === "s" ||
        lowercaseJoke[i] === "t" ||
        lowercaseJoke[i] === "v" ||
        lowercaseJoke[i] === "w" ||
        lowercaseJoke[i] === "x" ||
        lowercaseJoke[i] === "y" ||
        lowercaseJoke[i] === "z"
      ) {
        decryptedString = decryptedString + lowercaseJoke[i];
        i = i + 2;
        console.log(decryptedString + "---" + i);
      }

      // if space then append as it is
      else if (lowercaseJoke[i] === " ") {
        decryptedString = decryptedString + lowercaseJoke[i];
        
        console.log(decryptedString + "---" + i);
      }

      // else double the consonant and put o in between
      else {
        decryptedString = decryptedString + lowercaseJoke[i];
        
        console.log(decryptedString + "---" + i);
      }
    } */

    for (let i = 0; i < lowercaseJoke.length; i++) {
      console.log(i);
      if (
        lowercaseJoke[i] === "a" ||
        lowercaseJoke[i] === "e" ||
        lowercaseJoke[i] === "i" ||
        lowercaseJoke[i] === "o" ||
        lowercaseJoke[i] === "u"
      ) {
        /* decryptedString = decryptedString + lowercaseJoke[i];
        i = i + 2;
        console.log(decryptedString + "---" + i); */
        decryptedString = decryptedString + lowercaseJoke[i];

        console.log(decryptedString + "---" + i);
      }

      // if space then append as it is
      else if (lowercaseJoke[i] === " ") {
        decryptedString = decryptedString + lowercaseJoke[i];

        console.log(decryptedString + "---" + i);
      }

      // else double the consonant and put o in between
      else {
        /* decryptedString = decryptedString + lowercaseJoke[i];
        
        console.log(decryptedString + "---" + i); */
        decryptedString = decryptedString + lowercaseJoke[i];
        i = i + 2;
        console.log(decryptedString + "---" + i);
      }
    }

    setDecrypted(decryptedString);
  };

  return (
    <>
      <Box m={3}>
        {isLoading ? (
          <Typography variant="h5">Loading...</Typography>
        ) : (
          <TextField
            fullWidth
            id="filled-basic"
            label="Jokes of the day"
            multiline
            rows={4}
            value={joke}
          />
        )}
        {errorMessage && 
          <>
            <Typography variant="h5">{message}</Typography>
          </>
        }
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
          <Box width="150px" pl={1}>
            <Button
              onClick={() => handleEncryption(joke)}
              fullWidth
              variant="contained"
            >
              Encryption
            </Button>
          </Box>
        </Box>
      </Box>
      <TextField
        fullWidth
        id="filled-basic"
        label="Jokes of the day"
        multiline
        rows={4}
        value={encrypted}
      />
      <Box width="150px" pl={1}>
        <Button
          onClick={() => handleDecryption(encrypted)}
          fullWidth
          variant="contained"
        >
          Decryption
        </Button>
      </Box>
      <TextField
        fullWidth
        id="filled-basic"
        label="Jokes of the day"
        multiline
        rows={4}
        value={decrypted}
      />
    </>
  );
}
