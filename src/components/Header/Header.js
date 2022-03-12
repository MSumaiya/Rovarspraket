import React from 'react'
import classes from './Header.module.css'
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <>
        <Box p={1} className={classes.header}>
            <Typography sx={{fontWeight:"bold"}} variant='h2'>Rövarspråk game</Typography>
        </Box>
    </>
  )
}

