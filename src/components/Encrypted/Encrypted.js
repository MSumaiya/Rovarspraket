import React, { useState } from "react";
import Box from "@mui/material/Box";
import CustomTextfield from "../CustomTextfield/CustomTextfield";
import Decrypted from "../Decrypted/Decrypted";
import CustomButton from "../CustomButton/CustomButton";

export default function Encrypted({joke}) {
  const [encrypted, setEncrypted] = useState("");
  const handleEncryption = (joke) => {
    let encryptedString = "";
    for (let i = 0; i < joke.length; i++) {
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
      } else if (joke[i] === " ") {
        encryptedString = encryptedString + joke[i];
      } else {
        encryptedString = encryptedString + joke[i] + "o" + joke[i];
      }
    }
    setEncrypted(encryptedString);
  };
  return (
    <>
      <Box m={3}>
        <CustomTextfield label="Encrypted Joke" value={encrypted} />
        <CustomButton onClick={() => handleEncryption(joke)} buttonName="Encrypt the joke"/>
      </Box>
      <Decrypted encryptedJoke={encrypted}/>
    </>
  );
}
