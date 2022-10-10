import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Box } from "@mui/system";
import { Auth } from 'aws-amplify';
import { Typography } from "@mui/material";
import {Button} from "@mui/material";

const background = {
  backgroundColor: "#111",
  width: "100%",
  minHeight: "calc(100vh - 70px)",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  background: "url('active-tv-login-test1.png')",
};

const container = {
  // border: "1px solid yellow",
  width: "800px",
  height: "440px",
  flexDirection: "column",
  paddingLeft: "50px",
  paddingTop: "30px",
  background: "rgba(0,0,0,0.6)",

};

const InputContainer = {
  display: "flex",
  flexDirection: "column",
  marginTop: "30px",
  fontSize: "10px",
};

const inputBox = {
  width: "700px",
  // height: "30px",
  fontSize: "13px",
  outline:'none',
  padding:'10px',
  border:'none',
  marginTop:'10px'
};

const ButtonStyle = {
  border: "1px solid yellow",
  background: "transparent",
  color: "yellow",
  marginTop: "30px",
  width: "180px",
  cursor: "pointer",
  fontSize: "10px",
  padding:10
};

const ButtonTwo = {
  border: "1px solid white",
  background: "transparent",
  color: "white",
  marginTop: "20px",
  width: "250px",
  cursor: "pointer",
  fontSize: "10px",
};

function Changepassword() {

  const [oldPassword, setoldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");



  const AuthResetPassword = async (oldPassword, newPassword) => {
    try {
      Auth.currentAuthenticatedUser()
        .then(user => {
          return Auth.changePassword(user, oldPassword, newPassword);
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));

    } catch (err) {
      console.log(err.message , 'error after password reset')
    }

  }



  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword, oldPassword) {

      // const passwordDetails = {
      //   oldPassword: oldPassword,
      //   newPassword: newPassword
      // }
      AuthResetPassword(oldPassword, newPassword)

      //reset the inputs to null
      setoldPassword("")
      setnewPassword("")
    }


  };



  return (
    <Box className="active-tv-font" style={background}>

      <form style={container} onSubmit={handleSubmit}>
        <Typography className="active-tv-font" variant="h4" fontSize={18}>CHANGE PASSWORD</Typography>
        <hr style={{ marginRight: "20px" }} />

        <Box style={InputContainer}>
          <Typography variant="p">New Password</Typography>
          <input
            type="text"
            name="oldPassword"
            placeholder="Enter current password..."
            style={inputBox}
            value={oldPassword}
            onChange={(e) => setoldPassword(e.target.value)}
          />
          <br />
          <br />
          <Typography variant="p">Confirm Password</Typography>
          <input
            type="text"
            name="newPassword"
            placeholder="Confirm new password..."
            style={inputBox}
            value={newPassword}
            onChange={(e) => setnewPassword(e.target.value)}
          />
        </Box>

        <Box style={{ display: "flex", flexDirection: "column" }}>

          <Button type="submit" style={ButtonStyle} className="active-tv-font">
            <Typography variant="p" className="changepassword">Change Password</Typography>
          </Button>

          <Link href="/account" passHref={true}>
            <Button style={ButtonTwo} className="active-tv-font">
              <p className="backtoyouraccount">Back To Your Account</p>
            </Button>
          </Link>
        </Box>
      </form>
    </Box>
  );
}

export default Changepassword;
