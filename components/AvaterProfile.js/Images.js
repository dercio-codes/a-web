import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { USER_CONTEXT } from "../../context/MainContext";

export default function Images() {
  const { avaters, setAvaters, imgProfile, setImgProfile, setIsContained ,updatePictureAttribute } =
    useContext(USER_CONTEXT);

  const handleImage = async (url) => {
    const response = await fetch(
      "https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/store-users",
      {
        method: "POST",
        body: JSON.stringify({
          imageProfile: url,
          email: "kisibugrady3980@gmail.com",
        }),
      }
    );
    console.log(await response.json());
  };

  async function getAvters() {
    const response = await fetch(
      "https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-profile-pictures",
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );

    const data = await response.json();
    const parseData = data;
    const removedData = parseData.profilePictureUrls.shift();

    console.log(parseData, "what is in the array");
    setAvaters(parseData.profilePictureUrls);
  }

  useEffect(() => {
    getAvters();
    console.log(avaters, "official data");
  }, []);

   const handleConfirm = async (avaters)=>{
    
         const accepted =  window.confirm('are you sure you want to update profile picture?')
         
         if(accepted){
              setImgProfile(avaters);
              updatePictureAttribute(avaters)
              setIsContained(true);
         }
    
  }


  


  return (
    <Box style={container}>
      {avaters.map((profile, index) => {
        return (
          <Box key={index}>
            <img
              src={profile}
              alt="avaterImage"
              width={70}
              height={70}
              style={images}
              onClick={() => {
                handleConfirm(profile)
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
}

const container = {
  display: "flex",
  width:"100%",
  gap:10,
  height:"100%",
  // border:"1px solid red",
  overflowX: "auto",
  flexWrap:'wrap'
};

const images = {
  borderRadius: "100%",
  cursor: "pointer",

};
