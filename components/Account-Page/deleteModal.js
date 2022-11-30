import React from 'react'
import { Box } from '@mui/system'
import Router from 'next/router'
import { Typography, Button } from '@mui/material'
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { USER_CONTEXT } from "../../context/MainContext";
import { useState, useContext , useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Amplify, Auth } from 'aws-amplify';



const DeleteModal = ({ open, setOpen }) => {

  // const [open, setOpen] = React.useState(false);
  const { AuthenticatedUser,displayName ,subCode,setSubCode } = useContext(USER_CONTEXT); 
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setIsCopied(false)
    setCode('')
  };
  
  //form handling

//states
const[code , setCode ] = useState('')
const[error , setError ] = useState('')
const[isCopied , setIsCopied ] = useState(false)


const handleForm = (e)  =>{
  e.preventDefault()

  const codeObj = {
    code : code
  }  

  
if(codeObj.code != subCode){
  try{
   throw new Error('code does not match')

  }catch(err){
    console.log(err.message)
toast.error(err.message, {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
   }


}else{
   deleteUser()
}


//reset the input
   setCode(" ")
}



//delele user
async function deleteUser() {
    try {

      const result =  await Auth.deleteUser();

      console.log(result);
    } catch (err) {
      console.log('Error deleting user', error.message);

      if(err.message == 'Signout timeout fail'){

return toast.success(`user succesfully deleted`, {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});

}else{

return toast.error(err.message, {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
      }


    }
  }


const copy = ()=>{
   setCode(subCode)
   setIsCopied(true)
}



  return (
<>
    <Box sx={open ? styles.container : styles.none} >

      <Box sx={styles.modalCover}>
        <Box sx={styles.head}>
          <Box>
            <Typography fontSize={10} sx={{ margin: '5px 0' }} className={'active-tv-font'} color="error">Warning user will be deleted!</Typography>
          </Box>

        </Box>
        <Box sx={styles.body}>
          <form  onSubmit={handleForm}>
            <Typography className={'active-tv-font'} variant="h6" fontSize={8} color="#fff">deletion code :</Typography>
            <Box sx={{display:'flex', alignItems:'center', height:30, gap:3,padding:'30px, 0 10px, 0'}}>
                       <Typography variant="h6" className={'active-tv-font'} color='#fff' fontSize={11} fontWeight={'bold'} >{subCode}</Typography>
                      <Button onClick={copy}><AssignmentIcon sx={{color:"darkgrey"}}/></Button>
                      <span style={{color:'green', fontSize:10}}>{isCopied?'Copied!' : ''}</span>
            </Box>
           
            <input className={'active-tv-font'} value={code} onChange={(e)=>setCode(e.target.value)} style={styles.input} type={'text'} placeholder={'Enter the code above'} required />

            <Typography fontSize={8} sx={{ margin: '10px ' }} className={'active-tv-font'} color="#fff">all user data will be lost</Typography>


        <Box style={{marginTop:45}} sx={styles.footer}>
        <Button onClick={handleClose} style={styles.deleteBtn} variant="outlined" color="error">cancel</Button>
          <Button type="submit" style={styles.deleteBtn} variant="outlined" color="success">confirm</Button>
          </Box>
          </form>

        </Box>
      </Box>
    </Box>
    <ToastContainer />
    </>
  )
}

export default DeleteModal



const styles = {

  container: {
    position: 'fixed',
    zIndex: 100,
    height: 'calc(100vh - 72px)',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(6px)',
    background: 'rgba(0,0,0,0.2)'
  },

  modalCover: {
    minHeight: '50%',
    width: '50%',
    border: '1px solid #444',
    backgroundColor:'rgba(0,0,0,0.8)',
    padding:'0 20px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start'
  },
  none: {
    display: 'none'
  },
  head: {
    // border:'1px solid yellow',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px'

  },
  deleteBtn: {
    borderRadius: '40px'
  },
  body: {
    // border:'1px solid yellow',
    height: '150px',
    // display:'flex',
    alignItems: 'center',
    // justifyContent:'space-between',
    padding: '25px 10px',

  },
  footer: {
    // border:'1px solid yellow',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    // justifyContent:'space-between',
    padding: '0 10px',
    gap: 5
  },
  input: {
    width: '400px',
    height: '40px',
    margin: '5px 0',
    padding: '0px',
    background: 'transparent',
    color: '#fff',
    borderColor: '#333',
    borderRight: 'none',
    borderLeft: 'none',
    borderTop: 'none',
    fontSize:'10px'
  }

}