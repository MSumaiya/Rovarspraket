import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CustomTextfield from "../CustomTextfield/CustomTextfield";
import classes from "./Decrypted.module.css";

export default function Decrypted(props) {
  const [decrypted, setDecrypted] = useState("");
  const handleDecryption = (EncryptedJoke) => {
    let decryptedString = "";
    for (let i = 0; i < EncryptedJoke.length; i++) {
      if (
        EncryptedJoke[i] === "a" ||
        EncryptedJoke[i] === "e" ||
        EncryptedJoke[i] === "i" ||
        EncryptedJoke[i] === "o" ||
        EncryptedJoke[i] === "u" ||
        EncryptedJoke[i] === "A" ||
        EncryptedJoke[i] === "E" ||
        EncryptedJoke[i] === "I" ||
        EncryptedJoke[i] === "O" ||
        EncryptedJoke[i] === "U" ||
        EncryptedJoke[i] === "1" ||
        EncryptedJoke[i] === "2" ||
        EncryptedJoke[i] === "3" ||
        EncryptedJoke[i] === "4" ||
        EncryptedJoke[i] === "5" ||
        EncryptedJoke[i] === "6" ||
        EncryptedJoke[i] === "7" ||
        EncryptedJoke[i] === "8" ||
        EncryptedJoke[i] === "9" ||
        EncryptedJoke[i] === "0"
      ) {
        decryptedString = decryptedString + EncryptedJoke[i];
      } else if (EncryptedJoke[i] === " ") {
        decryptedString = decryptedString + EncryptedJoke[i];
      } else {
        decryptedString = decryptedString + EncryptedJoke[i];
        i += 2;
      }
    }
    setDecrypted(decryptedString);
  };

  return (
    <>
      <Box m={3}>
        <CustomTextfield value={decrypted} />
        <Box className={classes.button} m={2}>
          <Box width="150px">
            <Button
              onClick={() => handleDecryption(props.joke)}
              fullWidth
              variant="contained"
            >
              Decryption
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
