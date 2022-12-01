import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Palette } from "@universemc/react-palette";
import GreenlightBanner from "../components/greenlight-components";
import PointsGrid from "../components/greenlight-components/PointsGrid";
import NewIdeas from "../components/greenlight-components/NewIdeas";
import Whatlive from "../components/greenlight-components/greenlight-shows/Whatlive";
import Production from "../components/greenlight-components/greenlight-shows/Production";

const ProduceThat = () => {
  return (
    <Palette src={"top_banner_full.jpg"}>
      {({ data, loading, error }) => {
        console.log("palette-data", data, loading, error);
        return (
          <Box
            sx={{
              background: "#141414;",
            }}
          >
            <GreenlightBanner />
            <PointsGrid />
            <NewIdeas />
            <Whatlive />
            <Production />
          </Box>
        );
      }}
    </Palette>
  );
};

export default ProduceThat;
