import React from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Link from 'next/link';
import { Box } from "@mui/system";
import { Typography } from '@mui/material';

const main = {
  backgroundImage: "url('https://active-tv-app-public-content.s3.us-east-2.amazonaws.com/video-thumbnails/The%2520Nerve%2520of%2520Asking%2520A%2520Girl%2520Out%2520%257C%2520Episode%25204-fd95f404-39e2-4da4-8113-af4eb92fa843.jpg')",
  backgroundSize: "cover",
  width: "100%",
  minHeight: "600px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  flexDirection: "column",
  color: "white",
  // padding: "50px 0",
  // lineHeight: "30px",
  fontSize: "12px"
}

function MerchSection() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <Box style={main}  className="active-tv-font">
    <Box sx={{ 
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  flexDirection: "column",
  background:'rgba(0,0,0,0.7)',
  minHeight:'600px',
  padding: "50px 0",
  width:'100%',

}}>
      <Typography variant='h3' fontSize={30} className='active-tv-font' align="center" data-aos="fade-up">ALL MERCH 15% OFF & FIRST DIBS</Typography>
      <Typography variant="p" fontSize={13} sx={{ mt: 2, mb: 2 }} className='active-tv-font' data-aos="fade-up">Site members get 15% off all product and the first</Typography>
      <Typography variant="p" fontSize={13} sx={{ mt: 2, mb: 2 }} className='active-tv-font' data-aos="fade-up">opportunity to buy new product before the general public.</Typography>
      <Link href="/merch" passHref={true}>
        <button style={{
          border: "none",
          width: "250px",
          height: "50px",
          color: "#000",
          background: "#FFF203",
          fontWeight: "bold",
          cursor: "pointer",
          borderRadius: "25px",
          fontSize: "10px"
        }}
        className="active-tv-font"
          data-aos="fade-up"
        >SEE IT IN ACTION</button>
      </Link>
      </Box>
    </Box>
  )
}

export default MerchSection