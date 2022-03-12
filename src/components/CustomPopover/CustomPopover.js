import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export default function CustomPopover(props) {
  return (
    <>
      <Popover
        id={props.id}
        open={props.open}
        anchorEl={props.anchorEl}
        onClose={props.onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>Copied</Typography>
      </Popover>
    </>
  );
}
