import { Avatar, Stack, Typography, Box } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export const FreeToWatchItem = ({ image, showTitle }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        width: "100%",
        height: "200px",
        borderRadius: "25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        position: "relative",
        alignItems: "flex-end",
        "&:hover": {
          backgroundImage:
            "url('https://media1.giphy.com/media/rMGzvqcF2Seq28J1FL/giphy.gif?cid=ecf05e4772yypkchdidj9e8rnp4je84j95244mf5dwgskwyw&rid=giphy.gif&ct=g')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPostion: "center",
          transitionDuration: "0.1ms",
          cursor: "pointer",
        },
      }}
    >
      <Box
        sx={{
          background: "rgba(1,1,1,.7)",
          padding: "6px 8px",
          color: "#eee",
          minWidth: "50px",
          position: "absolute",
          top: "12px",
          right: "12px",
          fontSize: "14px",
          textAlign: "center",
        }}
      >
        09:05
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "50px",
          width: "100%",
          background: "rgba(1,1,1,.9)",
          borderRadius: "0px 0px 23px 23px",
          padding: "8px",
        }}
      >
        <Stack direction="row"></Stack>
        <Avatar alt="" src="yellocc.jpg" />
        <Typography
          className={"active-tv-font"}
          sx={{
            color: "white",
            fontSize: "8px",
            fontWeight: "bolder",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: {
              lg: "flex",
            },
            alignItems: "center",
            justifyContent: "center",
            lineClamp: "3",
            boxOrient: "vertical",
            textAlign: "center",
            padding: "0px 16px",
          }}
        >
          {showTitle}
        </Typography>
        <PlayCircleOutlineIcon sx={{ fill: "#eee" }} />
      </Box>
    </Box>
  );
};
