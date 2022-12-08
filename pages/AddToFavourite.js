import React from "react";
import { useFavourite, useDispatchFavourite } from "../context/addFavouriteContext";
import { Box } from "@mui/material";


export default function Store() {
  const item = useFavourite();
  const dispatch = useDispatchFavourite();


  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  if (item.length === 0) {
    return (
      <main>
        <p>Cart is empty</p>
      </main>
    );
  }
  return (
    <Box sx={{display:"flex"}}>
      {item.map((items, index) => (
        <Box key={index} sx={{border:"1px solid red", background:"black", color:"white", width:"204px", marginLeft:"10px"}}>
            <img src={items.CoverArtLarge} alt="showsImage" width={200} />
            <h5>{items.Title}</h5>
            <button onClick={() => handleRemove(index)}>Remove</button>
        </Box>
      ))}
    </Box>
  );
}