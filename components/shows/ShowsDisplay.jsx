import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Box from "@mui/material/Box";
import ShowCard from "./ShowCard";
import Typography from "@mui/material/Typography";
import data from "./test.json";
import ShowHeader from "./ShowsHeader";
import { useEffect, useState, useContext } from "react";
import { USER_CONTEXT } from "../../context/MainContext";
import Link from "next/link";
import axios from "axios";
import Whatlive from '../greenlight-components/greenlight-shows/Whatlive';



export default function ShowsDisplay({ shows,background, img, height, width , logo , title }) {

  

  //states
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [empty, setEmpty] = useState(true);
  const [spinner, setSpinner] = useState(null);
  const { showsDetails, setShowsDetails } = useContext(USER_CONTEXT);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#FFFFFF");



  const getEpisodes = () => {
    setTimeout(() => {
      setEmpty(false);
    }, 3000);
  };
  return (
    <Box sx={{height:"100vw"}}>
      <ShowHeader title="Shows"/>
      <Box sx={{width:"100%", height:"250px"}}>
      <Carousel
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={30}
      >
        {shows.map((show, index) => (
          <Box 
          sx={{
            width:"290px",
            border: "1px lightgrey solid",
            borderRadius: "12px",
            "&:hover": {
              cursor:'pointer',
              filter:"blur(1px)",
              border: "2px #757575 solid",
              transition: "0.8s",
              transform: "scale(0.9)",
              backgroundRepeat: "repeat",
              backgroundSize:'contain',
            },
          }}
          >
            <Link passHref={true} key={index} href={`/shows-episodes/${show.Title}`}>
             <a>
            <ShowCard
              color={show.color}
              openModal={handleOpen}
              img={show.CoverArtLarge}
              text={show.Title}
            />

            
            <Typography
              className="active-tv-font"
              fontSize={10}
              sx={{
                color: "#fff",
                fontWeight: "bold",
                padding: "10px",
                textTransform: "capitalize",
                background: "rgba(0,0,0,0.3)",
                display:"flex", 
                alignItems:"center",
                justifyContent:"center",
                justifyContent:"space-between",
                height:"43px"
              }}
            >
              <img
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              src={show.CoverArtLarge}
            />
              {show.Title}
            </Typography>
            
            </a>
          </Link>
          </Box>
        ))} 
      </Carousel>
      </Box>



      <Box sx={{marginTop:"50px"}}>
      <ShowHeader title="React series"/>
      <Box sx={{width:"100%", height:"250px"}}>
      <Carousel
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={30}
      >
        {shows.map((show, index) => (
          <Box 
          sx={{
            width: `${
              width == "LG" ? "367px" : width == "MD" ? "300.55px" : "250px"
            }`,
            height: `${
              height == "LG" ? "408.55px" : height == "MD" ? "308.55px" : "208px"
            }`,
            height:"185px",
            backgroundSize: height == "LG" ? "cover" : height == "MD" ? "cover" : "cover",
            marginLeft:"30px",
            border: "1px lightgrey solid",
            borderRadius: "12px",
            "&:hover": {
              cursor:'pointer',
              filter:"blur(1px)",
              border: "2px #757575 solid",
              transition: "0.8s",
              transform: "scale(0.9)",
              backgroundRepeat: "repeat",
              backgroundSize:'contain',
            },
          }}
          >
            <Link passHref={true} key={index} href={`/shows-episodes/${show.Title}`}>
             <a>
            <ShowCard
              color={show.color}
              openModal={handleOpen}
              img={show.CoverArtLarge}
              text={show.Title}
            />

            
            <Typography
              className="active-tv-font"
              fontSize={10}
              sx={{
                color: "#fff",
                fontWeight: "bold",
                padding: "10px",
                textTransform: "capitalize",
                background: "rgba(0,0,0,0.3)",
                display:"flex", 
                alignItems:"center",
                justifyContent:"center",
                justifyContent:"space-between",
                height:"43px",
              }}
            >
              <img
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              src={show.CoverArtLarge}
            />
              {show.Title}
            </Typography>
            
            </a>
          </Link>
          </Box>
        ))} 
      </Carousel>
      </Box>
      </Box>

      <ShowHeader title="Shows"/>
      <Box sx={{width:"94%", height:"300px",background: "url('	https://images.watchcorridor.com/i/5973731a-e7b7-465f-b14f-f993daae6890.jpg')",backgroundSize:"cover", position:"absolute",}}>
      <Carousel
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={30}
      >
        {shows.map((show, index) => (
          <Box 
          sx={{
            position:"relative",
            marginTop:"160px",
            width:"320px",
            height:"220px",
            border: "1px lightgrey solid",
            borderRadius: "12px",
            boxShadow:"  0px 0px 5px 5px rgba(0,0,0,0.75)",
            "&:hover": {
              cursor:'pointer',
              border: "2px #757575 solid",
              transition: "0.8s",
              transform: "scale(0.9)",
              backgroundRepeat: "repeat",
              backgroundSize:'contain',
            },
          }}
          >
            <Link passHref={true} key={index} href={`/shows-episodes/${show.Title}`}>
             <a>
            <ShowCard
              color={show.color}
              openModal={handleOpen}
              img={show.CoverArtLarge}
              text={show.Title}
            />

            
            <Typography
              className="active-tv-font"
              fontSize={10}
              sx={{
                color: "#fff",
                fontWeight: "bold",
                padding: "10px",
                textTransform: "capitalize",
                background: "rgba(0,0,0,0.3)",
                display:"flex", 
                alignItems:"center",
                justifyContent:"center",
                justifyContent:"space-between",
                height:"43px"
              }}
            >
              <img
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              src={show.CoverArtLarge}
            />
              {show.Title}
            </Typography>
            
            </a>
          </Link>
          </Box>
        ))} 
      </Carousel>
      </Box>

    </Box>
  );
}
const styles = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "98%",
    height: "98%",
    bgcolor: "background.paper",
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
  },
  topShowContainer: {
    height: "40%",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "",
  },
  bottomShowContainer: {
    // border: 1,
    height: "60%",
    width: "100%",
  },
  emptyBox: {
    width: "100%",
    height: "100%",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#111",
  },
  episodesContainer: {
    width: "100%",
    height: "100%",
    background: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  fadeContainer: {
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    zIndex: 100,
  },
  cancelBtn: {
    borderRadius: "50px",
    background: "rgba(0,0,0,0.5)",
    color: "#fff",
    fontSize: "15px",
    width: "50px",
    height: "60px",
    fontWeight: "bold",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "10px",
  },
};
