import React, { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import TabsEpisode from "../../components/shows/TabsEpsiode";
import { ShowsContext } from "../../context/ShowContext";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

const ShowsEpisodes = () => {
  const router = useRouter();
  const title = router.query.id;
  console.log(router, { title });
  const { show, getShow } = useContext(ShowsContext);
  console.log({ show });

  useEffect(() => {
    getShow(title);
  }, []);

  return (
    <Box
      style={{ background: "#111", flexDirection: "column" }}
    >
      <Box
        sx={{
          width: "100%",
          height: "70vh",
          backgroundImage: `url('${show?.showItem?.Item?.CoverArtLarge}')`,
          backgroundSize: "cover",
          backgroundPosition: "top-center",
          backgroundRepeat: "no-repeat",
          paddingTop: "100px",
        }}></Box>
      <Box>
        {show?.showJson?.episodes.length === 0 ? (
          <Box sx={{ textAlign: "center", padding: "24px 0px" }}>
            <Typography className="active-tv-font" color="#eee" variant="h3">
              This Show has no episdoes yet
            </Typography>
          </Box>
        ) : (
          <TabsEpisode
            show={show?.showItem?.Item}
            episodes={show.showJson.episodes}
          />
        )}
      </Box>
    </Box>
  );
};

export default ShowsEpisodes;
