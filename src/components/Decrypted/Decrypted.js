import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CustomTextfield from "../CustomTextfield/CustomTextfield";
import classes from "./Decrypted.module.css";

export default function Decrypted({encryptedJoke}) {
  const [decrypted, setDecrypted] = useState("");
  const handleDecryption = (encryptedJoke) => {
    let decryptedString = "";
    for (let i = 0; i < encryptedJoke.length; i++) {
      if (
        encryptedJoke[i] === "a" ||
        encryptedJoke[i] === "e" ||
        encryptedJoke[i] === "i" ||
        encryptedJoke[i] === "o" ||
        encryptedJoke[i] === "u" ||
        encryptedJoke[i] === "A" ||
        encryptedJoke[i] === "E" ||
        encryptedJoke[i] === "I" ||
        encryptedJoke[i] === "O" ||
        encryptedJoke[i] === "U" ||
        encryptedJoke[i] === "1" ||
        encryptedJoke[i] === "2" ||
        encryptedJoke[i] === "3" ||
        encryptedJoke[i] === "4" ||
        encryptedJoke[i] === "5" ||
        encryptedJoke[i] === "6" ||
        encryptedJoke[i] === "7" ||
        encryptedJoke[i] === "8" ||
        encryptedJoke[i] === "9" ||
        encryptedJoke[i] === "0"
      ) {
        decryptedString = decryptedString + encryptedJoke[i];
      } else if (encryptedJoke[i] === " ") {
        decryptedString = decryptedString + encryptedJoke[i];
      } else {
        decryptedString = decryptedString + encryptedJoke[i];
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
              onClick={() => handleDecryption(encryptedJoke)}
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
