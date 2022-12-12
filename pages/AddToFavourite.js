import React from "react";
import {
  FavouriteShowsContext
} from "../context/addFavouriteContext";
import { Box, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Link from "next/link"

export default function Store() {
  
  const {state,dispatch} = React.useContext(FavouriteShowsContext)
  const item = state

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  if (item.length === 0) {
    return (
      <Box sx={container}>
        <Typography
          className={"active-tv-font"}
          variant="p"
          color="#fff"
          fontSize={20}
        >
          No Show has been added to your favoruites
        </Typography>
      </Box>
    );
  }
  return (

    <Box sx={favouritesContainer}>
      {item.map((items, index) => (
        <Box key={index} sx={showsIndex}>
        <Link href={`/shows-episodes/${items.Title}`} key={index}>
          <a>
          <Box><img src={items.CoverArtLarge} width={253} height={129} style={{borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}/></Box>
        </a>
        </Link>
          <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", justifyContent:"space-around"}}>
          <Typography
          className={"active-tv-font"}
          variant="p"
          color="#fff"
          fontSize={10}
          >{items.Title}</Typography>
          <button onClick={() => handleRemove(index)} style={{border:"none", background:"#121212", marginTop:"3px"}}><DeleteIcon color="error" sx={{fontSize:"15px", cursor:"pointer"}}/></button>
          </Box>
        </Box>
      ))}
    </Box>

  );
}

const container = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#121212",
};

const favouritesContainer = {
  width: "100%",
  height: "100vh",
  background: "#121212",
  color: "#fff",
  display: "flex",
  flexWrap: "wrap",
  overflow: "auto"
};

const showsIndex = {
//   border:"1px solid red",
  background: "black",
  color: "white",
  width: "254px",
  height: "164px",
  marginLeft: "10px",
  marginTop:"10px",
  borderRadius:"10px",
};
