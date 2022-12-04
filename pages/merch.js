import { Box, Typography } from "@mui/material";
import React from "react";
import MerchNavbar from "../components/merch/merch-navbar";
import Popup from "../components/products/Popup";
import ProductCard from "../components/products/ProductCard";
import Produts from "../components/products/Produts";
import { USER_CONTEXT } from "../context/MainContext";

const Merch = () => {
  const { selectedCategory, setSelectedCategory } =
    React.useContext(USER_CONTEXT);

  return (
    <Box>
      <MerchNavbar />
      <Box sx={{ height: "200vh" }}>
        <Typography
          className="active-tv-font"
          fontSize={"24px"}
          fontWeight={"550"}
          margin={"8px 0"}
          textAlign={"center"}
          color={"rgba(1,1,1,.9)"}
        >
          {selectedCategory}
        </Typography>
        <Produts />
      </Box>
    </Box>
  );
};

export default Merch;
