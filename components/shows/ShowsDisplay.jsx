import * as React from "react";
import Box from "@mui/material/Box";
import ShowCard from "./ShowCard";
import Typography from "@mui/material/Typography";
import data from "./test.json";
import ShowHeader from "./ShowsHeader";
import { useEffect, useState, useContext } from "react";
import { USER_CONTEXT } from "../../context/MainContext";
import Link from "next/link";
import axios from "axios";

export default function ShowsDisplay({ shows }) {
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
    <Box>
      <ShowHeader title="Shows" />
      <Box
        sx={{
          display: "flex",
          gap: 5,
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {shows.map((show, index) => (
          <Link
            passHref={true}
            key={index}
            href={`/shows-episodes/${show.Title}`}
          >
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
                }}
              >
                {show.Title}
              </Typography>
            </a>
          </Link>
        ))}
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
