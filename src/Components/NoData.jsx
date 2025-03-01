import { Box, Typography } from "@mui/material";
import React from "react";

export default function NoData() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ p: 4 }}>
        <img
          alt="green iguana"
          height="100%"
          style={{ objectFit: "contain" }}
          width={"100%"}
          src={
            "https://static.vecteezy.com/system/resources/previews/001/857/111/non_2x/error-404-page-not-found-landing-page-concept-for-mobile-and-pc-free-vector.jpg" 
          }
        />
        <Box>
          <Typography
            gutterBottom
            variant="overline"
            fontWeight={"bolder"}
            component="div"
          >
            Sorry, no results found!
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Please check the spelling or try searching for something else ABOUT
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
