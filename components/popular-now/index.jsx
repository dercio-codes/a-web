import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import SectionHeader from "../utils/SectionHeader";
import { Typography } from "@mui/material";
import { PopularNowItem } from "./popular-item";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "red",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ zIndex: "1" }}>
      <Box sx={{ padding: "8px 48px" }}>
        <SectionHeader text={"Popular Now"} textColor={"#eee"} />
      </Box>
      <Box sx={{ padding: "16px 48px" }}>
        <Grid container spacing={2} columns={12}>
          {[1, 1, 1, 1, 1, 1, 1].map((item, index) => {
            if (index > 0) {
              return (
                <Grid item xs={12} md={6} lg={4}>
                  <PopularNowItem image={index} />
                </Grid>
              );
            }
          })}
        </Grid>
      </Box>
    </Box>
  );
}
