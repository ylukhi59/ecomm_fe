import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function GetDiscount() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ marginTop: "100px", marginBottom: "50px" }}
    >
      {/* First Box: Heading and Text */}
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "50px", // Space between the two boxes
        }}
      >
        <Typography sx={{ fontSize: "35px", paddingBottom: "25px" }}>
          Get Discount Info
        </Typography>
        <Typography sx={{ fontSize: "15px" }}>
          Subscribe to the Outstock mailing list to receive updates on new
          arrivals, special offers
          <br />
          and other discount information.
        </Typography>
      </Box>

      {/* Second Box: Email Input */}
      <Box
        sx={{
          textAlign: "center",
          position: "relative",
          marginBottom: "50px"
        }}
      >
        <Box
          component="input"
          type="email"
          placeholder="Enter your email"
          sx={{
            border: "none",
            borderBottom: "2px solid #d8d5d2", // Fixed border height
            textAlign: "center",
            padding: "10px", // Padding for input
            width: {
              xs: "200px", // Extra small screens
              sm: "300px", // Small screens
              md: "400px", // Medium screens
              lg: "500px", // Large screens
              xl: "600px", // Extra large screens
            },
          }}
        />

      </Box>
      <Box>
      <button 
  style={{ 
    padding: "12px 40px", 
    borderRadius: "3px", 
    backgroundColor: "#fff", 
    border: "2px solid #ccc", 
    color: "#000", 
  }}
  onMouseEnter={(e) => {
    e.target.style.border = "2px solid #BD8448"; 
    e.target.style.color = "#BD8448"; 
  }}
  onMouseLeave={(e) => {
    e.target.style.border = "2px solid #ccc";
    e.target.style.color = "black"; 
  }}
>
  Subscribe
</button>


      </Box>
    </Grid>

  );
}

export default GetDiscount;
