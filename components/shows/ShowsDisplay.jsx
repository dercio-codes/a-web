import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Box from "@mui/material/Box";
import ShowCard from "./ShowCard";
import Typography from "@mui/material/Typography";
import { useEffect, useState, useContext } from "react";
import { USER_CONTEXT } from "../../context/MainContext";
import Link from "next/link";
import { ShowsContext } from "../../context/ShowContext";
import { useDispatchFavourite } from "../../context/addFavouriteContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import axios from "axios";
import { RadioButtonCheckedTwoTone } from "@mui/icons-material";



export default function ShowsDisplay({shows}) {

  //states
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [empty, setEmpty] = useState(true);
  const [spinner, setSpinner] = useState(null);
  const { showsDetails, setShowsDetails } = useContext(USER_CONTEXT);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#FFFFFF");
  const { show, getShow } = useContext(ShowsContext);
  
  const [episodes,setEpisodes] = useState([])

  // const dispatch = useDispatchFavourite();
  // const addToFavourite = (bucket) => {
  //   dispatch({type: "ADD", bucket})
  // };
  
//  const getEpisodes = async (show) => {
//     const response = await axios.get(`${show.showsMetaData}`)
//     console.log("episode here : " , response)
//     setEpisodes(response.data.episodes)
//   }
  

// useEffect(() => {
//   getEpisodes(show);
// },[])


// useEffect ((show) => {
// async function getEpisodes (show) {
//     const episodeResponse = await axios.get(`${show.showsMetaData}`)
//     setEpisodes(episodeResponse.data.episodes)
//     return episodeResponse;
//  } 
//  getEpisodes(show)
// },[show.showsMetaData])

// console.log(episodes,"hello episodes")


  // const [episodes,setEpisodes] = useState([])

  // const loadData = async (show) => {
  //   const response = await axios.get(`${show.showsMetaData}`);
  //   setEpisodes(response.data.episodes);
  // }

  // useEffect(() => {
  //   loadData();
  // })

  // console.log(response.data.episodes, "data response")
  // const [value, setValue] = React.useState(0);
  // const mediaUrl =
  //   "https://active-studio-content-bucket.s3.us-east-2.amazonaws.com/Shows/";
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // let numOfEp = props.episodes.map(({ seasonNum }) => seasonNum);
  

  return (
    <Box>
      <Box>
        {shows.map((show, index) => {
          //  getEpisodes(show);

          return(
            <Box>
                <Box>
            {/* The shows header title */}
 
            <Box
              className="active-tv-font"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                textTransform: "capitalize",
                paddingRight: "220px",
                marginBottom: "20px",
              }}
            >
              {show.Title.replace(/-/g, " ")}
            </Box>
            {/* The shows with available episodes */}
            <Box sx={{ display: "flex", width: "100%" }}>

              {/* The shows image */}
              <Box
                sx={{
                  position: "relative",
                  width: "290px",
                  border: "2px lightgrey solid",
                  borderRadius: "12px",
                  marginBottom: "70px",
                }}
              >
                <a>
                  <ShowCard
                    color={show.color}
                    openModal={handleOpen}
                    img={show.CoverArtLarge}
                    text={show.Title}
                  />

                  <Box
                    className="active-tv-font"
                    fontSize={10}
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                      padding: "10px",
                      textTransform: "capitalize",
                      background: "rgba(0,0,0,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      justifyContent: "space-between",
                      height: "43px",
                    }}
                  >
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                      src={show.CoverArtLarge}
                    />
                    {show.Title.replace(/-/g, " ")}
                    {/* <button>add to favourite</button> */}
                  </Box>
                </a>
              </Box>

              {/* The shows Episodes */}
              <Box
                sx={{
                  width: "70%",
                  marginLeft: "30px",
                  height: "220px",
                }}
              >

                <Box sx={{ height:"220px", display:"flex", alignItems:"center", justifyContent:"Center",flexDirection:"column"}}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Link
                    passHref={true}
                    key={index}
                    href={`/shows-episodes/${show.Title}`}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        padding: "10px",
                        textTransform: "capitalize",
                        background: "#000",
                        borderRadius: "17px",
                        fontSize: "12px",
                        cursor: "pointer",
                        "&:hover": {
                          background: "white",
                          color: "#000",
                          transition: "1s",
                        },
                      }}
                    >
                      View more
                    </Typography>
                  </Link>
                </Box>
     
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                  >
                      <SwiperSlide>
                      {/* {
                      episodes.map((item , index)=>{
                        return( 
                          <Box key={index} sx={{border:"1px solid red", marginLeft:"50px"}}>
                            <p>{item.Title}</p>
                          </Box>
                        )})}   */}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                   </SwiperSlide>
               
                    </Swiper>
                </Box>

              </Box>
            </Box>
          </Box>
              


            </Box>
        )})}
      </Box>
    </Box>
  );
}
const styles = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "98%",
    height: "98%",
    bgcolor: "background.paper",
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
  },
  topShowContainer: {
    height: "40%",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "",
  },
  bottomShowContainer: {
    // border: 1,
    height: "60%",
    width: "100%",
  },
  emptyBox: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    background: "#111",
  },
  episodesContainer: {
    width: "100%",
    height: "100%",
    background: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  fadeContainer: {
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    zIndex: 100,
  },
  cancelBtn: {
    borderRadius: "50px",
    background: "rgba(0,0,0,0.5)",
    color: "#fff",
    fontSize: "15px",
    width: "50px",
    height: "60px",
    fontWeight: "bold",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "10px",
  },
};
