import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { USER_CONTEXT } from "../../context/MainContext";

export default function Images() {
  const { avaters, setAvaters, imgProfile, setImgProfile, setIsContained } =
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

  const changeAvatorHandler = () => {
    console.log("hello");
  };

  return (
    <Box style={container} onClick={changeAvatorHandler}>
      {avaters.map((profile, index) => {
        return (
          <div key={index}>
            <img
              src={profile}
              alt="avaterImage"
              width={70}
              height={70}
              style={images}
              onClick={() => {
                setImgProfile(profile);
                setIsContained(true);
                handleImage(profile);
              }}
            />
          </div>
        );
      })}
    </Box>
  );
}

const container = {
  display: "flex",
  overflowY: "auto",
};

const images = {
  borderRadius: "10px",
  cursor: "pointer",
};
