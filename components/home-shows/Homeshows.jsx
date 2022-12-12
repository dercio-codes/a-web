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

const Homeshows = ({ latestVid, title, height, width,  }) => {
  // const [showsContainer, setShowsContainer] = useState([]);
  const { shows } = useContext(ShowsContext);
  const { state, dispatch } = useContext(FavouriteShowsContext);
  const {userAccount} = useContext(USER_CONTEXT)
  const banners = [
    "https://i.ytimg.com/an_webp/aBGGdza5biM/mqdefault_6s.webp?du=3000&sqp=CNLB45oG&rs=AOn4CLB8wsjheT5oGrhDRTU6TtYl-PLUdQ",
    "https://i.ytimg.com/an_webp/R8hXryB4fXM/mqdefault_6s.webp?du=3000&sqp=CPHK45oG&rs=AOn4CLA72vS_k2HdbA0gKQVpTg1hACbKug",
    "https://i.ytimg.com/an_webp/xXjSv-XirFE/mqdefault_6s.webp?du=3000&sqp=CMK-45oG&rs=AOn4CLByt9DUn9D9-hGl2Sod3oasGxSyUg",
    "https://i.ytimg.com/an_webp/Kpl1mWZiZbI/mqdefault_6s.webp?du=3000&sqp=CIyO45oG&rs=AOn4CLB0oVo3wY4IEhKU-dZ6KiYdyaJ4zQ",
  ];


  // useEffect(() => {
  //   getShows();
  // }, []);

  const {
    loggedIn,
    setLoggedIn,
    setUser,
    ForceReload,
    setAvaters,
    imgProfile,
    setImgProfile,
    isContained,
    setIsContained,
    picture,
    setPicture,
  } = useContext(USER_CONTEXT);

  async function signOut() {
    if (loggedIn) {
      try {
        await Auth.signOut();
        await Router.push("/login");
        setUser("Activetv@gmail.com");
        ForceReload();
      } catch (error) {
        console.log("error signing out: ", error);
      }
    } else {
      Router.push("/login");
      console.log("there is no user logged in at thr currentSeession");
    }
  }

  
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

  // const addToFavourite = (bucket) => {
  //   console.log("state", state);
  //   dispatch({ type: "ADD", bucket,userAccount });
  // };

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
              paddingRight: "12px",
              width: "30%",
            }}
          >
              <ShowsCard
                background={banners[index]}
                height={height}
                width={width}
                item={item}
                title={item?.Title}
                logo={item?.CoverArtLarge}
                img={item?.CoverArtLarge}
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Homeshows;
