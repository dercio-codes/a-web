import { Typography, Box } from "@mui/material";

const ShowsCard = ({ background, img, height, width , logo , title}) => {
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
        backgroundSize: height == "LG" ? "cover" : height == "MD" ? "cover" : "cover",
        backgroundRepeat: "no-repeat",
        border: "2px #757575 solid",
        position: "relative",
        borderRadius: "12px",
        marginRight: "12px",
        "&:hover": {
          cursor:'pointer',
          border: "2px lightgray solid",
          transition: "0.6s",
          transform: "scale(1.1)",
          backgroundImage:`url("${background}")`,
          backgroundRepeat: "repeat",
          backgroundSize:'contain'
          // "url('https://i.ytimg.com/an_webp/3ECOCed1dSo/mqdefault_6s.webp?du=3000&sqp=CKzZ45oG&rs=AOn4CLDrM8yN2mCqI-F0MWXo91tzXlE-zw')",
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
              // src="https://images.watchcorridor.com/i/bfaab7bf-711f-4c59-9dea-75e994342147.jpg"
            />
          </Box>
          <Box>
            <Typography
              sx={{
                color: "white",
                fontWeight:'600'
              }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ShowsCard;
