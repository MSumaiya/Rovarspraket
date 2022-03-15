import React, { useState } from "react";
import Box from "@mui/material/Box";
import CustomTextfield from "../CustomTextfield/CustomTextfield";
import Decrypted from "../Decrypted/Decrypted";
import CustomButton from "../CustomButton/CustomButton";

export default function Encrypted({joke}) {
  const [encrypted, setEncrypted] = useState("");
  const handleEncryption = (joke) => {
   const regex = /[b-df-hj-np-tv-z]+/i;
    let encryptedString = "";
    for (let i = 0; i < joke.length; i++) {
      if (regex.test(joke[i])) {
        encryptedString = encryptedString + joke[i] + "o" + joke[i];
      } else {
        encryptedString = encryptedString + joke[i];
      }
    }
    setEncrypted(encryptedString);
  };
  return (
    <>
      <Box m={3}>
        <CustomTextfield label="Encoded" value={encrypted} />
        <CustomButton onClick={() => handleEncryption(joke)} buttonName="Encode"/>
      </Box>
      <Decrypted encryptedJoke={encrypted}/>
    </>
  );
}
