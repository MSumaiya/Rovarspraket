import React, { useState } from "react";
import Box from "@mui/material/Box";
import CustomTextfield from "../CustomTextfield/CustomTextfield";
import CustomButton from "../CustomButton/CustomButton";

export default function Decrypted({encryptedJoke}) {
  const [decrypted, setDecrypted] = useState("");
  const handleDecryption = (encryptedJoke) => {
    const regex = /[b-df-hj-np-tv-z]+/i;
    let decryptedString = "";
    for (let i = 0; i < encryptedJoke.length; i++) {
      if (
        regex.test(encryptedJoke[i])
      ) {
        decryptedString = decryptedString + encryptedJoke[i];
        i += 2;
      } else {
        decryptedString = decryptedString + encryptedJoke[i];
      }
    }
    setDecrypted(decryptedString);
  };

  return (
    <>
      <Box m={3}>
        <CustomTextfield label="Decoded" value={decrypted} />
        <CustomButton onClick={() => handleDecryption(encryptedJoke)} buttonName="Decode"/>
      </Box>
    </>
  );
}
