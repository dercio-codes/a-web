import { Typography, Box } from "@mui/material";
import ShowsCard from "./ShowsCard";
import ShowsHeader from "./ShowsHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatchFavourite } from "../../context/addFavouriteContext";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from 'next/link'
import { Pagination, Navigation, Autoplay } from "swiper";
import { useEffect, useState } from "react";
import axios from "axios";
import TurnedInIcon from '@mui/icons-material/TurnedIn';

const Homeshows = ({ latestVid, title, height, width, shows }) => {
  const [showsContainer, setShowsContainer] = useState([]);
  const getShows = async () => {
    const getShowsResponse = await axios.get(
      "https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-shows"
    );
    const results = getShowsResponse.data;
    setShowsContainer(results);
  };

  const banners = [
    "https://i.ytimg.com/an_webp/aBGGdza5biM/mqdefault_6s.webp?du=3000&sqp=CNLB45oG&rs=AOn4CLB8wsjheT5oGrhDRTU6TtYl-PLUdQ",
    "https://i.ytimg.com/an_webp/R8hXryB4fXM/mqdefault_6s.webp?du=3000&sqp=CPHK45oG&rs=AOn4CLA72vS_k2HdbA0gKQVpTg1hACbKug",
    "https://i.ytimg.com/an_webp/xXjSv-XirFE/mqdefault_6s.webp?du=3000&sqp=CMK-45oG&rs=AOn4CLByt9DUn9D9-hGl2Sod3oasGxSyUg",
    "https://i.ytimg.com/an_webp/Kpl1mWZiZbI/mqdefault_6s.webp?du=3000&sqp=CIyO45oG&rs=AOn4CLB0oVo3wY4IEhKU-dZ6KiYdyaJ4zQ",
  ];

  useEffect(() => {
    getShows();
  }, []);

  const dispatch = useDispatchFavourite();

  const addToFavourite = (bucket) => {
    dispatch({ type: "ADD", bucket})
  }
 
  return (
    <Box
      sx={{
        padding: "16px 40px 32px",
      }}
    >
      <ShowsHeader title={title} />
      <Swiper
        slidesPerView={2}
        navigation={false}
        breakpoints={{
          769: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        style={{
          zIndex: 0,
          height: "auto",
          paddingTop: "21px",
          paddingBottom: "21px",
        }}
      >
        {showsContainer.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              marginRight: "10px",
              paddingRight: "12px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
           <ShowsCard
              background={banners[index]}
              height={height}
              width={width}
              title={item.Title}
              logo={item.CoverArtLarge}
              img={item.CoverArtLarge}
            />
            <button onClick={() => addToFavourite(item)} style={{cursor:"pointer", width:"30px",height:"30px", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", paddingRight:"40px"}}><TurnedInIcon/></button>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Homeshows;
