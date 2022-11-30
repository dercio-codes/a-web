import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Link from "next/link";

const Card = ({ img, link }) => {
  return (
    <Link href={link}>
      <Box
        sx={{
          ...styles.cardContainer,
        }}
      >
        <img src={img} alt="img" style={styles.cardImage} />
      </Box>
    </Link>
  );
};



const NewIdeas = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography
          className={'active-tv-font'}
          sx={{ fontWeight: "bold" }}
          color="#fff"
          fontSize={18}
          variant="h3"
          textTransform={"uppercase"}
          letterSpacing={"2px"}
        >
          New Ideas
        </Typography>
      </Box>
      <Box sx={styles.cardWrapper}>
    {/*map throught the new ideas , displaying the cards*/}
    
        <Card link={'https://www.google.com"'} img={"img-a.jpg"} />
        <Card link={'https://www.google.com"'} img={"img-b.jpg"} />
      </Box>
    </Box>
  );
};

export default NewIdeas;

const styles = {
  container: {
    backgroundPosition: "top",
    backgroundSize: "cover",
    minHeight: "550px",
    // border: "1xpx solid red",
    padding: "0px 100px 40px",
  },
  cardContainer: {
    height: "450px",
    width: "250px",
    cursor: "pointer",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "10px",
  },
  header: {
    // border:'1px solid red' ,
    minHeight: "75px",
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
  },
  cardWrapper: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    gap: 5,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "c",
    objectPosition: "",
    borderRadius: "10px",
  },
};
