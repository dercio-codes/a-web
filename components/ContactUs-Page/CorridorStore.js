import react from "react";
import { Box } from "@mui/system";
import { Link, Typography } from "@mui/material";

const CorridorStore = () => {
  return (
    <Box sx={{ fontSize: "8px", margin: "50px 0 0 0" }}>
      <Typography
        className={"active-tv-font"}
        sx={{ fontSize: "9px", lineHeight: "20px" }}
      >
        Our store purchases are handled by a third party, Merchline, for order
        support please contact{" "}
        <Link sx={{ fontSize: "9px", color: "yellow", cursor: "pointer" }}>
          support@merchline.com
        </Link>
      </Typography>
    </Box>
  );
};
export default CorridorStore;
