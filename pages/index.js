import { useContext } from "react";
import HomeBanner from "../components/home-banner";
import { Box } from "@mui/system";
import Homeshows from "../components/home-shows/Homeshows";
import HslPlayer from "../components/streamPlayer";
import latestVid from "../components/home-shows/Latest-video.json";
import { ShowsContext } from "../context/ShowContext";
import { USER_CONTEXT } from "../context/MainContext";
import Navbar from "../components/navbar";

export default function Home() {
  const { configData } = useContext(ShowsContext);
  const homeshow = configData.setCatergorySizeAndType;
  console.log("amazing shows that michee likes!!=>", homeshow);

  return (
    <Box sx={{ background: "#111", paddingBottom: "70px" }}>
      <HomeBanner />
      {homeshow
        ? homeshow.map((item, index) => (
            <Homeshows
              key={index}
              latestVid={latestVid}
              height={item.height}
              width={item.width}
              title={item.categoryName}
            />
          ))
        : ""}
    </Box>
  );
}
