import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Title } from "@mui/icons-material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { display } from "@mui/system";

export const Episode = ({ img, thumb, duration, title, year }) => {
  const [thumbnail, setThumbnail] = useState(false);

  const showThumbnail = (val) => {
    setThumbnail(val);
  };

  const hideThumbnail = (val) => {
    setThumbnail(val);
  };

  return thumbnail ? (
    <Box onMouseLeave={() => hideThumbnail(false)} sx={{ ...styles.thumbnail }}>
      <Box
        sx={{
          backgroundSize: "cover",
          ...styles.thumbContainer,
          background: `url(${thumb})`,
        }}
      >
        <Box sx={{ ...styles.duration }}>
          <Typography
            variant="p"
            sx={{
              backgroundColor: "rgba(0,0,0,0.4)",
              padding: "5px",
            }}
            textOverflow={"ellipsis"}
            fontWeight={"bold"}
            color="#fff"
          >
            {duration}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ ...styles.content }}>
        <Box
          sx={{
            ...styles.title,
            height: "100%",
            width: "80%",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            fontWeight={"bold"}
            variant="h3"
            fontSize={14}
            sx={{ textOverflow: "ellipsis" }}
            color="#fff"
          >
            {title}
          </Typography>

          <Typography
            fontWeight={"500"}
            variant="h3"
            fontSize={14}
            sx={{ textOverflow: "ellipsis" }}
            color="#707070"
          >
            {year}
          </Typography>
        </Box>
        <Box sx={styles.playThumb}>
          <PlayCircleFilledIcon sizes={40} sx={{ color: "#fff" }} />
        </Box>
      </Box>
    </Box>
  ) : (
    <Box
      onMouseEnter={() => showThumbnail(true)}
      sx={{
        ...styles.episode,
        background: `url(${img})`,
        backgroundSize: "cover",
      }}
    >
      <Box sx={{ ...styles.duration }}>
        <Typography
          variant="p"
          sx={{ backgroundColor: "rgba(0,0,0,0.4)", padding: "5px" }}
          textOverflow={"ellipsis"}
          fontWeight={"bold"}
          color="#fff"
        >
          {duration}
        </Typography>
      </Box>
      <Box sx={{ ...styles.title, borderRadius: "0 0 10px 10px" }}>
        <Typography
          fontWeight={"bold"}
          variant="h3"
          fontSize={14}
          sx={{
            display: "inline-block",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
          color="#fff"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

const GreenlightSwiper = () => {
  const thumbnail = "apes.gif";
  const img = "crew-image1.webp";
  const duration = "04:00";
  const title = "Guy This is super Illegal (secret illegal Russian)";
  const year = "2022";

  return (
    //extract this code if code is not dynamic enough
    <Box sx={styles.swiperCover}>
      <Box sx={styles.wrapper}>
        <Episode
          img={img}
          thumb={thumbnail}
          duration={duration}
          title={title}
          year={year}
        />
        <Episode
          img={img}
          thumb={thumbnail}
          duration={duration}
          title={title}
          year={year}
        />{" "}
        <Episode
          img={img}
          thumb={thumbnail}
          duration={duration}
          title={title}
          year={year}
        />{" "}
        <Episode
          img={img}
          thumb={thumbnail}
          duration={duration}
          title={title}
          year={year}
        />{" "}
        <Episode
          img={img}
          thumb={thumbnail}
          duration={duration}
          title={title}
          year={year}
        />{" "}
        <Episode
          img={img}
          thumb={thumbnail}
          duration={duration}
          title={title}
          year={year}
        />{" "}
        <Episode
          img={img}
          thumb={thumbnail}
          duration={duration}
          title={title}
          year={year}
        />{" "}
        <Episode
          img={img}
          thumb={thumbnail}
          duration={duration}
          title={title}
          year={year}
        />{" "}
        <Episode
          img={img}
          thumb={thumbnail}
          duration={duration}
          title={title}
          year={year}
        />
      </Box>
    </Box>
  );
};

export default GreenlightSwiper;

const styles = {
  swiperCover: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    minHeight: "250px",
    overflowX: "auto",
    padding: "10px 10px",
  },
  episode: {
    // border: "1px solid red",
    height: "150px",
    width: "230px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  thumbnail: {
    height: "250px",
    width: "230px",
    borderRadius: "10px",
    cursor: "pointer",
    background: "#32a453",
  },
  wrapper: {
    width: "auto",
    display: "flex",
    gap: 8,
    height: "250px",
  },
  episodeImg: {
    width: "100%",
    height: "100%",
    borderRadius: "inherit",
  },
  content: {
    background: "#000",
    height: "40%",
    borderRadius: "0 0 10px 10px",
    padding: "10px",
    display: "flex",
  },
  title: {
    textOverflow: "ellipsis",
    height: "30px",
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
  },
  duration: {
    width: "100%",
    padding: "2px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  thumbContainer: {
    height: "60%",
    backgroundSize: "cover",
    borderRadius: "10px 10px 0 0",
  },
  playThumb: {
    width: "20%",
    display: "flex",
    justifyContent: "center",
  },
};
