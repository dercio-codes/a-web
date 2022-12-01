import React from "react";
import { Box, Typography, Paper, TextField } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";

const LiveChatComponent = () => {
  return (
    <Paper
      elevation={2}
      sx={{ height: "100%", width: "100%", background: "rgba(1,1,1,.5)" }}
    >
      <Paper
        elevation={2}
        sx={{
          height: "10%",
          display: "flex",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Typography
          className="active-tv-font"
          fontSize={"16px"}
          fontWeight={"550"}
        >
          {" "}
          Live Chat
        </Typography>
      </Paper>

      <Box sx={{ height: "75%", background: "" }}></Box>
      <Paper
        elevation={3}
        sx={{
          height: "15%",
          background: "",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <EmojiEmotionsIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Comment Here"
            inputProps={{ "aria-label": "Comment Here" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SendIcon />
          </IconButton>
        </Paper>
      </Paper>
    </Paper>
  );
};

export default LiveChatComponent;
