import { Typography, Box } from "@mui/material";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatchFavourite } from "../../context/addFavouriteContext";
import AddIcon from '@mui/icons-material/Add';
import { USER_CONTEXT } from "../../context/MainContext";
import { useContext } from "react";


const ShowsCard = ({ background, img, height, width, logo, title , item}) => {


  const dispatch = useDispatchFavourite();

  const addToFavourite = (bucket) => {
    dispatch({ type: "ADD", bucket });
  };


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
  
  return (
    <Box
      sx={{
        width: `${
          width == "LG" ? "367px" : width == "MD" ? "300.55px" : "250px"
        }`,
        height: `${
          height == "LG" ? "408.55px" : height == "MD" ? "308.55px" : "208px"
        }`,
        background: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize:
          height == "LG" ? "cover" : height == "MD" ? "cover" : "cover",
        backgroundRepeat: "no-repeat",
        border: "2px #757575 solid",
        position: "relative",
        borderRadius: "12px",
        marginRight: "12px",
        "&:hover": {
          cursor: "pointer",
          border: "2px lightgray solid",
          transition: "0.9s",
          // transform: "scale(0.95)",
          backgroundImage: `url("${background}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          borderRadius: "12px",
          top: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position:"absolute",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            padding: "8px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              background: "#00000080",
              paddingLeft: "6px",
              paddingRight: "6px",
            }}
          >
            49:50
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px",
            background: "rgba(0,0,0,0.8)",
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
            }}
          >
            <img
              style={{ width: "45px", height: "45px", borderRadius: "50%" }}
              src={logo}
            />
          </Box>
          <Box sx={{ display:"flex", alignItems:"center", justifyContent:"center", justifyContent:"space-evenly", width:"200px"}}>
            <Typography
              sx={{
                color: "white",
                fontWeight: "600",
              }}
            >
              {title}
            </Typography>

            {loggedIn && 
                <Box
                  onClick={() => addToFavourite(item)}
                  className="active-tv-font"
                  sx={{
                    cursor: "pointer",
                    height: "35px",
                    width: "35px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#000",
                    color: "#fff",
                    marginTop: "5px",
                    borderRadius: "50px",
                    fontSize: "9px",
                  }}
                >
                  <AddIcon sx={{ width: "20px", height: "20px" }} />
                </Box>}
               
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ShowsCard;
