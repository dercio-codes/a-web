import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";


const input = {
  width: "400px",
  height: "40px",
  margin: "10px 0 50px 0",
  paddingLeft: "10px",
  background: "transparent",
  color: "#fff",
  borderColor: "#333",
  borderRight: "none",
  borderLeft: "none",
  borderTop: "none",
  fontSize: "10px",
}


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          sx={{ fontSize: "13px" }}
          className={"active-tv-font"}
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Redeem Code
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <input
            className={"active-tv-font"}
            // value={code}
            // onChange={(e) => setCode(e.target.value)}
            style={input}
            type={"text"}
            placeholder={"Enter the code above"}
            required
          />
          <Typography
            sx={{ fontSize: "10px", color: "black" }}
            className={"active-tv-font"}
            gutterBottom
          >
            By clicking Redeem, you agree to the Gift Card & Promotional Code{" "}
            <Link href="/">
              <span style={{ color: "#FFFA00" }}>Terms and Conditions</span>
            </Link>
            , as applicable.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ fontSize: "10px", color: "black" }}
            className={"active-tv-font"}
            autoFocus
            variant="outlined"
            color="error"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{
              fontSize: "10px",
              color: "black",
              background: "yellow !important",
            }}
            className={"active-tv-font"}
            autoFocus
            variant="contained"
            // color="success"
            onClick={handleClose}
          >
            Redeem
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
