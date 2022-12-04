import React from "react";
import { Box, Grid } from "@mui/material";
import LiveStream from "../components/live-components/live-stream";
import LiveChatComponent from "../components/live-components/live-chat-component";

const Live = () => {
  return (
    <Box>
      <Grid container>
        <Grid
          item
          md={8}
          sx={{
            height: "89vh",
            background: "",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LiveStream />
        </Grid>
        <Grid
          item
          md={4}
          sx={{ height: "89vh", background: "", padding: "8px" }}
        >
          <LiveChatComponent />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Live;
