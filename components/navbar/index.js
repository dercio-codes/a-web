import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Dropdown from "./dropdown";
import Link from "next/link";
import axios from "axios";
import { USER_CONTEXT } from "../../context/MainContext";
import { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { isEmpty } from "@aws-amplify/core";

const Navbar = () => {
  const pages = ["Home", "Shows", "Greenlight", "Merch", "Learn More"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const UserContext = React.useContext(USER_CONTEXT);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  // destructuring the authenticated user from context
  const { AuthenticatedUser, authorisedJWT, loggedIn, setLoggedIn } =
    React.useContext(USER_CONTEXT);
  // //user initial
  const currentUser = AuthenticatedUser.name;
  const userIntial = currentUser.charAt(0);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [logged, setLogged] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    const loadingPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-shows"
      );

      setPosts(response.data);
      setLoading(false);
    };
    loadingPosts();
  }, []);

  const endpoint = `http://127.0.0.1:3000/store-users`;
  const tokenHandler = async () => {
    // const response = await axios({
    //   method: "POST",
    //   url: endpoint,
    //   data :AuthenticatedUser,
    //   // BearerToken: authorisedJWT,
    //   // mode: 'no-cors',
    //   });
    const response = await axios.get(endpoint, authorisedJWT, {
      "Content-Type": "application/json",
    });
    console.log("RESPONSE=>", response);
  };

  const limit = 5;

  return (
    <AppBar
      position="sticky"
      sx={{
        // background: "#111",
        // background:'linear-gradient(to bottom, #131313, #111, #181818)',
        background: "black",
        height: "70px",
        // padding:'10px 0'
      }}
    >
      <Container maxWidth="xl" sx={{ paddingTop: "0px" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex", sm: "" } }}
          >
            {/* <img
              src="https://www.activetvonline.co.za/static/media/logo.718a6dab.png"
              alt=""
              height="70px"
            /> */}
            <Box
              sx={{
                height: "60px",
                width: "70px",
                backgroundImage: 'url("ATV_logo.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              paddingTop: 0,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img
              src="https://www.activetvonline.co.za/static/media/logo.718a6dab.png"
              alt="active-logo"
              height="50px"
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              paddingTop: "0px",
              height: "70px",
              // border: "0.1px solid #32a453",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <a>
                <Button
                  className={"active-tv-font"}
                  onClick={handleCloseNavMenu}
                  sx={{
                    m: 2,
                    color: "#eee",
                    display: "block",
                    fontSize: "12px",
                    "&:hover": {
                      color: "#32a453",
                      borderBottom: "1px solid #32a453",
                    },
                  }}
                >
                  Home
                </Button>
              </a>
            </Link>

            <Link href="/shows">
              <a>
                <Button
                  className={"active-tv-font"}
                  onClick={handleCloseNavMenu}
                  sx={{
                    m: 2,
                    color: "#eee",
                    display: "block",
                    fontSize: "12px",
                    "&:hover": {
                      color: "#32a453",
                      borderBottom: "1px solid #32a453",
                    },
                  }}
                >
                  Shows
                </Button>
              </a>
            </Link>

            <Link href="/produce">
              <a>
                <Button
                  className={"active-tv-font"}
                  onClick={handleCloseNavMenu}
                  sx={{
                    m: 2,
                    color: "#eee",
                    display: "block",
                    fontSize: "12px",
                    "&:hover": {
                      color: "#32a453",
                      borderBottom: "1px solid #32a453",
                    },
                  }}
                >
                  {/* Greenlight */}
                  Produce THAT!
                </Button>
              </a>
            </Link>

            <Link href="https://activetvstore.com/">
              <a target="_blank">
                <Button
                  onClick={handleCloseNavMenu}
                  className={"active-tv-font"}
                  sx={{
                    m: 2,
                    color: "#eee",
                    display: "block",
                    fontSize: "12px",
                    "&:hover": {
                      color: "#32a453",
                      borderBottom: "1px solid #32a453",
                    },
                  }}
                >
                  Merch
                </Button>
              </a>
            </Link>
            {!loggedIn && (
              <Link href="/account">
                <a>
                  <Button
                    className={"active-tv-font"}
                    onClick={handleCloseNavMenu}
                    sx={{
                      m: 2,
                      color: "#eee",
                      display: "block",
                      fontSize: "12px",
                      "&:hover": {
                        color: "#7A9EA3",
                        borderBottom: "1px solid #7A9EA3",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </a>
              </Link>
            )}
          </Box>

          {/* Shows search input should only display once a user is signed up or logged in */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {loggedIn && (
              <Box
                className="outer"
                sx={{ minWidth: { xs: "50px", sm: "100px", md: "300px" } }}
              >
                <a className="anchr">
                  <SearchIcon />
                </a>
                <input
                  type="text"
                  name=""
                  className="search_box"
                  placeholder="Search shows..."
                  onChange={(e) => setSearchTitle(e.target.value)}
                />

                <Box sx={{ marginTop: "55px" }}>
                  {posts
                    .slice(0, limit)
                    .filter((value) => {
                      if (searchTitle === "") {
                        return null;
                      } else if (
                        value.Title.toLowerCase().includes(
                          searchTitle.toLowerCase()
                        )
                      ) {
                        return value;
                      }
                    })
                    .slice(0, limit)
                    .map((item, index) => (
                      <Link href={`/shows-episodes/${item.Title}`} key={index}>
                        <a>
                          <div
                            style={{
                              background: "#333333",
                              width: "400px",
                              height: "60px",
                              display: "flex",
                              marginRight: "500px",
                              borderBottom: "1px solid #121212",
                              padding: "5px",
                              borderRadius: "5px",
                              cursor: "pointer",
                            }}
                          >
                            <img
                              src={item.CoverArtLarge}
                              width={50}
                              height={50}
                            />
                            <Box sx={{ flexDirection: "column" }}>
                              <p
                                style={{
                                  paddingLeft: "10px",
                                  fontSize: "10px",
                                }}
                                className={"active-tv-font"}
                              >
                                {item.Title}
                              </p>
                              <p
                                style={{
                                  paddingLeft: "10px",
                                  fontSize: "8px",
                                  color: "lightgrey",
                                }}
                                className={"active-tv-font"}
                              >
                                {item.description}
                              </p>
                            </Box>
                          </div>
                        </a>
                      </Link>
                    ))}
                </Box>
              </Box>
            )}
          </Box>

          {/* coin system below */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Box sx={{ ...coinContainer }}>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                fontSize={16}
                sx={{ width: "16px" }}
              >
                {"0"}
              </Typography>
              <Box sx={{ width: "20px" }}>
                <img src="coin.gif" alt="coin" width={18} height={18} />
              </Box>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Dropdown user={currentUser} userInitial={userIntial} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

const coinContainer = {
  // border: "1px solid red",
  width: "100px",
  minHeight: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
};
