import React from "react";
import {
  Box,
  Paper,
  Grid,
  IconButton,
  Typography,
  Fade,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import { USER_CONTEXT } from "../../context/MainContext";

const Categories = [
  "Home",
  "Shop All",
  "Apparel",
  "Accessories",
  "Footwear",
  "Mystery Items",
];

const MerchNavbar = ({ card }) => {
  const { selectedCategory, setSelectedCategory } =
    React.useContext(USER_CONTEXT);

  const [openSearchField, setSearchField] = React.useState(false);
  const [searchField, setSeachField] = React.useState(null);

  const handleSearchClick = () => {
    setSearchField(!openSearchField);
  };

  const handleSearchField = (e) => {
    setSeachField(e.target.value);
  };

  return (
    <Box
      sx={{
        padding: "32px 16px",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
      <Box
        sx={{
          height: "50px",
          display: "flex",
          alignItems: "center",
          padding: "12px 12px 12px 12px",

          background: "rgba(1,1,1,.1)",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={5}
            md={6}
            sx={{
              // width: "50%",
              padding: "12px 0px 12px 12px",
              background: "",
              display: "flex",
              alignItems: "center",
              // justifyContent: "flex-end",
            }}
          >
            <Typography
              className="active-tv-font"
              sx={{
                fontSize: {
                  xs: "12px",
                  lg: "24px",
                },
                fontWeight: 550,
                color: "rgba(1,1,1,.9)",
              }}
            >
              Active Store
            </Typography>
          </Grid>
          <Grid
            item
            xs={7}
            md={6}
            sx={{
              padding: "12px 0px 12px 12px",
              background: "",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Fade in={openSearchField}>
              <InputBase
                sx={{
                  ml: 1,
                  width: "100%",
                  color: "#111",
                  fill: "rgba(0,0,0,.3)",
                  background: "rgba(0,0,0,.3)",
                  padding: "8px",
                  display: openSearchField ? "flex" : "none",
                }}
                value={searchField}
                onChange={handleSearchField}
                placeholder="Search Your Desired Products..."
                inputProps={{ "aria-label": "Search Your Desired Products..." }}
              />
            </Fade>

            <IconButton
              onClick={handleSearchClick}
              sx={{ p: "10px", fill: "#111" }}
              aria-label="search"
            >
              <SearchIcon sx={{ fill: "#111 !important" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Paper
        sx={{
          height: "40px",
          background: "",
          display: "flex",
          justifyContent: "flex-end",
          padding: "21px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            background: "",
            width: "70%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {Categories.map((item, index) => {
            return (
              <IconButton
                onClick={() => {
                  setSelectedCategory(item);
                }}
                sx={{
                  fontSize: "12px",
                  padding: "8px",
                  transform: "scale(.80)",
                  "&:hover": { transform: "scale(.82)" },
                }}
                className={"active-tv-font"}
                key={index}
              >
                {item}
              </IconButton>
            );
          })}
        </Box>
        <ShoppingBasket />
      </Paper>
    </Box>
  );
};

export default MerchNavbar;
