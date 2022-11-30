import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ReactPlayer from "react-player";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState, useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"



const GreenlightBanner = () => {
  const [showImage, setShowImage] = useState(true);
  const [showPlayer, setShowPlayer] = useState(false);
  const [player, setPlayer] = useState(false);

  useEffect(() => {
    setShowImage(true);
    setShowPlayer(false);

    //
    Aos.init({ duration: 2000 });

  }, []);

  const playVideo = () => {
    setShowPlayer(true);
    setShowImage(false);
    setPlayer(true); 
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      {/* the image banner */}
      <Box sx={showImage ? styles.introImage : styles.none}>
      
        
      <Box sx={{background:'rgba(0,0,0,.4)'}}>
        <Grid container>
          <Grid sx={styles.gridItem} item md={4} sm={4} xs={12}>
            <Box sx={{ ...styles.content }}>
              <Typography
              className={"active-tv-font"}
                sx={{
                  ...styles.bannerHeading,
                  ...styles.textDecorate,
                  display: "flex",

                  fontWeight: "300",
                  fontStyle: "italic",
                  fontSize: {
                    md: 40,
                    sm: 24,
                    xs: 24,
                  },
                }}
                variant="h1"
                color="#32a453"
              >
                <span
                  style={{
                    fontWeight: "200",
                    textDecorationColor: "darkgreen",
                    textDecoration: "line-through",
                    textDecorationStyle: "dotted",
                    textDecorationThickness: "2px",
                    textShadow: "800",
                  }}
                >
                  PRODUCE
                </span>
                <b style={{ display: "flex" }}>
                  <img data-aos="fade-right" className="bulb" src="green-light.png" alt="bulb" />

                  <span style={{ color: "#fff" }}> THAT! </span>
                </b>
              </Typography>
              <Typography
               className={"active-tv-font"}
                sx={{
                  ...styles.bannerHeading,
                  fontWeight: "700",
                  marginTop: "20px",
                  letterSpacing:'0px',
                  fontSize: {
                    md: 16,
                    sm: 14,
                    xs: 16,
                  },
                }}
                variant="h3"
                color="#fff"
              >
                Be a Producer
              </Typography>
              <Typography
               className={"active-tv-font"}
                variant="h6"
                color="#fff"
                sx={{
                  ...styles.bannerHeading,
                  fontWeight: "200",
                  marginTop: "20px",
                  letterSpacing:'2px',
                  lineHeight:'24px',
                  fontSize: {
                    md: 10,
                    sm: 8,
                    xs: 6,
                  },
                }}
              >
                Directly control <br /> what your subscription <br /> dollars
                are spent on by <br /> using your Producer Points
              </Typography>
            </Box>
          </Grid>
          <Grid sx={styles.gridItem} item md={4} sm={4} xs={12}>
            <Box
              sx={{
                ...styles.content,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                // variant="contained"
                sx={{
                  padding: "20px",
                  cursor: "pointer",
                  borderRadius: "100%",
                }}
                onClick={playVideo}
              >
                <img
                  style={styles.playIcon}
                  // src="play-design.png"
                  src="play-circle-final.png"
                  alt="play-svg"
                />
              </Button>
            </Box>
          </Grid>
          <Grid sx={{...styles.gridItem ,height:{xs:'10px!important'}}} item md={4} sm={4} xs={12}></Grid>
        </Grid>
        </Box>
      </Box>

      {/* the player */}
      <Box sx={showPlayer ? styles.playerContainer : styles.none}>
        <ReactPlayer
          controls={true}
          playing={player}
          //  playing={false}
          width="100%"
          height="100%"
          style={styles.player}
          url="produce-vid.webm"
        
        />
      </Box>

    </Box>
  );
};

export default GreenlightBanner;

const styles = {
  container: {
    minHeight: "100vh",
    width: "100%",
    background: "red",
  },
  playerContainer: {
    height: {
      md: "100vh",
      sm: "70vh",
      xs: "85vh",
    },
    width: "100%",
    padding: "0 30px 30px",
    display: "flex",
    justifyContent: "center",
  },
  player: {
    height: "100%",
    width: "100%",
  },
  introImage: {
    // border: "1px solid blue",
    maxHeight: {
      md: "100vh",
      sm: "100vh",
      xs: "80vh",
    },
    width: "100%",
    // background: "url('top_banner_full.jpg')",
    background:"url('banner-test.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  none: {
    display: "none",
  },
  content: {
    // border: "1px solid red",

    minHeight: {
      md: "400px",
      sm: "200px",
      xs: "100px",
    },
    width: "100%",
    padding: "0 50px",
    display: "flex",
    justifyContent: {
      md: "center",
      sm: "flex-start",
      xs: "flex-end",
    },
    flexDirection: "column",
  },
  gridItem: {
    minHeight: {
      md: "100vh",
      sm: "50vh",
      xs: "30vh",
    },
    // border: '1px solid blue' ,
    display: "flex",
    alignItems: "center",
  },
  playIcon: {
    height: 150,
    // border:'1px solid red'
  },
  bannerHeading: {
    fontSize: {
      lg: 40,
    },
  },
};
