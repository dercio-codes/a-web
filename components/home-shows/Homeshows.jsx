import { Typography, Box } from "@mui/material";
import ShowsCard from "./ShowsCard";
import ShowsHeader from "./ShowsHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { Pagination, Navigation, Autoplay } from "swiper";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ShowsContext } from "../../context/ShowContext";
import { FavouriteShowsContext } from "../../context/addFavouriteContext";
import { USER_CONTEXT } from "../../context/MainContext";
const api = "https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod";

const Homeshows = ({ latestVid, title, height, width,  }) => {
  // const [showsContainer, setShowsContainer] = useState([]);
  const { shows } = useContext(ShowsContext);
  const { state, dispatch } = useContext(FavouriteShowsContext);
  const {userAccount,userSync,setUserSync} = useContext(USER_CONTEXT)
  const banners = [
    "https://i.ytimg.com/an_webp/aBGGdza5biM/mqdefault_6s.webp?du=3000&sqp=CNLB45oG&rs=AOn4CLB8wsjheT5oGrhDRTU6TtYl-PLUdQ",
    "https://i.ytimg.com/an_webp/R8hXryB4fXM/mqdefault_6s.webp?du=3000&sqp=CPHK45oG&rs=AOn4CLA72vS_k2HdbA0gKQVpTg1hACbKug",
    "https://i.ytimg.com/an_webp/xXjSv-XirFE/mqdefault_6s.webp?du=3000&sqp=CMK-45oG&rs=AOn4CLByt9DUn9D9-hGl2Sod3oasGxSyUg",
    "https://i.ytimg.com/an_webp/Kpl1mWZiZbI/mqdefault_6s.webp?du=3000&sqp=CIyO45oG&rs=AOn4CLB0oVo3wY4IEhKU-dZ6KiYdyaJ4zQ",
  ];

  let sortedShows = [];
  console.log(shows)
  switch (title) {
    case "Latest Shows":
      sortedShows = shows.sort((a, b) => {
        return Date.parse(b.timestamp) - Date.parse(a.timestamp);         
      });
      break;
    case 'Popular Shows':
      sortedShows = shows.sort((a,b)=>b.likes - a.likes);
      break;
    case 'Free To Watch':
      sortedShows = shows
      break;
    case 'Favourites':
      sortedShows = userAccount.favourites
      break;
    case "Active TV Originals":
      sortedShows = shows
      break;
    default:
      break;
  }

  const addToFavourite = async (show) => {
    let num = 1
    console.log('click',num++)
    const showExists = userAccount.favourites.some(el => el.Title === show.Title);
    if (showExists){
      console.log('this show exists')
      return
    }
    const showRes = await axios.put(api + "/edit-show", {
      Title: show.Title,
      likes: show.likes ? show.likes+1 : 1,
    });
    const userRes = await axios.put(api + "/edit-account", {
      email: userAccount.email,
      favourites: [...userAccount.favourites, show],
    });
    setUserSync(!userSync)
  };


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
        {sortedShows.map((item, index) => (
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
                title={item?.Title}
                logo={item?.CoverArtLarge}
                img={item?.CoverArtLarge}
                item={item}
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Homeshows;
