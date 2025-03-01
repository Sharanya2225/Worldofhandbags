import { Box, Typography } from "@mui/material";
import React from "react";
import bag1 from '../Assets/bag1.jpg'
export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${bag1})`
       
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          
        //backgroundImage: "no-repeat"
          
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "black",
          }}
          gutterBottom
        >
          Welcome to World of Handbags
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "20px", color: "black" }}
        >
          {/* sub title or tagile
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "black" }}
        >
          A "handbag" is a larger accessory that holds objects beyond currency, such as personal items. */}
        </Typography>
      </Box>
    </Box>
  );
}
