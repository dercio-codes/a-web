import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Images from './Images';


const style = {
  position: 'absolute',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "720px",
  height:"453px",
  bgcolor: '#1b1b1a',
  boxShadow: 24,
  padding:"10px",
  borderRadius:"10px",
  border:"1px solid #121212",
  paddingLeft:"30px"
};

const cancelBtn = {
  // background:"red",
  marginTop:"10px",
  color:"red",
  fontWeight:"bold",
  border:"1px solid red",
  height:"30px"
}

const confirmBtn = {
  // background:"green",
  marginTop:"10px",
  color:"green",
  fontWeight:"bold",
  border:"1px solid green",
  height:"30px"

}

const images = {
  width:"610px",
  height:"320px",
  background:"#222",
  borderRadius:"15px",
  marginTop:"-10px",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  color:"white",
  fontWeight:"bold",
  padding:"15px",
  marginLeft:"22px",
}

const buttons = {
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  justifyContent:"space-evenly",
  width:"200px",
  marginLeft:"448px"
}

const imgBackground = {
  color:"white",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
}

export default function AvaterPicChanger({ grady }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box

      onClick={handleOpen}
        sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width:"40px",
        height: "40px",
        marginBottom: "10px",
        marginTop: "-45px",
        fontWeight: "bold",
        cursor: "pointer",
        marginLeft: "30px",
        borderRadius:"25px",
        background:"#444",
        // boxShadow:'2px 2px 2px 2px #444'
      }}
      >
       <CameraAltIcon/>
      </Box>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
        <Box className={"active-tv-font"} sx={imgBackground}>
          <h4>Select a profile Image</h4>
        </Box>
        <Box style={images}>
        <Images/>
        </Box>

        <Box style={buttons}>
          <Button style={confirmBtn} onClick={handleClose}>confirm</Button>
          <Button onClick={handleClose} style={cancelBtn}>close</Button>
        </Box>

        </Box>
      </Modal>
    </div>
  );
}
