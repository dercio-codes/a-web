import React from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";

const Sizes = ({ size, num1, num2 }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        mb: 2,
        fontSize: "9px",
        heigght: "30px",
      }}
    >
      <Typography className="active-tv-font" sx={{ fontSize: "9px" }}>
        {size}
      </Typography>
      <Typography className="active-tv-font" sx={{ fontSize: "9px" }}>
        {num1}
      </Typography>
      <Typography className="active-tv-font" sx={{ fontSize: "9px" }}>
        {num2}
      </Typography>
    </Box>
  );
};

export default Sizes;
