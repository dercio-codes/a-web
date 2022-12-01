import { Typography, Box } from "@mui/material";
import React, { useContext } from "react";
import { USER_CONTEXT } from "../../context/MainContext";
import { ShowsContext } from "../../context/ShowContext";
const ShowCard = ({ img, text, openModal }) => {
  const { setShowsDetails } = useContext(USER_CONTEXT);
  const { getShow } = useContext(ShowsContext);

  return (
    <>
      <Box
        onClick={() => {
          getShow(text);
          setShowsDetails({
            title: text,
            img: img,
          });
        }}
        style={{
          ...styles.container,
          // background: `url(${img})`,
          borderRadius: "10px 10px 0 0",
          backgroundSize: "cover",
          backgroundPosition: "",
        }}
      >
        <img
          src={img}
          style={{
            objectFit: "cover",
            objectPosition: "top",
            borderRadius: "10px 10px 0 0",
          }}
          alt="img"
          width={"100%"}
          height={"100%"}
        />
      </Box>
    </>
  );
};
const styles = {
  container: {
    height: "200px",
    width: "200px",
    backgroundSize: "cover",
    backgroundPosition: "top",
    cursor: "pointer",
  },
};
export default ShowCard;
