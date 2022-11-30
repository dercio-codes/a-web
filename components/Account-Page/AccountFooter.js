import React from 'react'


const background = {
  width: "100%",
  background: "#0e0d00",
  color: "white",
  height: "70px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  // fontFamily:"AnjaliOldLipi",
  fontFamily: "Arcade Normal",
  fontSize: "9px",
  lineHeight: "0px"
}
function AccountFooter() {
  return (
    <div style={background} className='active-tv-font'>
      <h3>INSTAGRAM CONTACT</h3>
      <p>2022 © Active Tv</p>
    </div>
  )
}

export default AccountFooter