import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import data from "../../components/shows/Season.json";
// import dataTwo from "../../components/shows/Season Two.json";
// import dataThree from "../../components/shows/SeasonThree.json";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function TabPanel(props) {
  const { children, index, ...other } = props;
  return <div>{children}</div>;
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function TabsEpisode(props) {
  const [value, setValue] = React.useState(0);
  const mediaUrl =
    "https://active-studio-content-bucket.s3.us-east-2.amazonaws.com/Shows/";
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let numOfSeasons = props.episodes.map(({ seasonNum }) => seasonNum);
  let seasonNums = [...new Set(numOfSeasons)];

  return (
    <Box sx={{ width: "100%", background: "#111", height: "100%" }}>
      <Box
        style={{ marginLeft: "130px", display: "flex", marginTop: "50px" }}
        className="active-tv-font"
      >
        <Box
          style={{
            marginRight: "100px",
            textDecoration: "underline",
            color: "white",
            fontSize: "30px",
            paddingTop: "10px",
          }}
        >
          episodes
        </Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          style={{ paddingLeft: "140px" }}
        >
          {seasonNums.map((num, index) => (
            <Tab
              key={index}
              label={`SEASON ${num}`}
              {...a11yProps(index)}
              className="active-tv-font"
              style={{ color: "white" }}
            />
          ))}
        </Tabs>
      </Box>
      <Box>
        {seasonNums.map((num, index) => (
          <TabPanel key={index} value={value} index={index}>
            <Box style={{ marginLeft: "50px", marginTop: "20px" }}>
              <Box
                style={{
                  marginTop: "20px",
                  alignItems: "center",
                  marginLeft: "30px",
                  flexDirection: "colum",
                }}
              >
                {props.episodes
                  .filter((item) => item.seasonNum === num)
                  .map((episode, index) => {
                    console.log({ episode, index });
                    return (
                      <div key={index} style={{ display: "flex" }}>
                        f
                        <div className="Episodehover">
                          <img
                            alt="image"
                            src={`${mediaUrl}${episode.showTitle}/episodes/${episode.Title}/large-${episode.thumbnailFilename}`}
                            style={{
                              width: 400,
                              height: 200,
                              borderRadius: "25px",
                              position: "relative",
                              marginTop: "40px",
                              cursor: "pointer",
                              objectFit: "cover",
                            }}
                          />
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <PlayCircleOutlineIcon
                              style={{
                                color: "white",
                                fontSize: "80px",
                                marginTop: "-190px",
                                zIndex: "1",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          style={{
                            marginLeft: "45px",
                            color: "white",
                            marginTop: "25px",
                          }}
                        >
                          <h4 className="active-tv-font">{episode.Title}</h4>
                          <p
                            className="active-tv-font"
                            style={{ fontSize: "10px" }}
                          >
                            {episode.description}
                          </p>
                          <p
                            className="active-tv-font"
                            style={{ fontSize: "10px" }}
                          >
                            {episode.description}
                          </p>
                          <p
                            className="active-tv-font"
                            style={{ fontSize: "10px" }}
                          >
                            {episode.description}
                          </p>
                          <p
                            className="active-tv-font"
                            style={{ fontSize: "10px" }}
                          >
                            {episode.description}
                          </p>
                          <Box
                            style={{
                              color: "white",
                              fontSize: "13px",
                              marginBottom: "50px",
                              marginLeft: "45px",
                            }}
                          ></Box>
                        </div>
                      </div>
                    );
                  })}
              </Box>
            </Box>
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}
