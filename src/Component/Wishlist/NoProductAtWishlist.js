import { Box, Typography, Grid } from "@mui/material";
import React from "react";

function NoProductAtWishlist() {
  return (
    <Grid 
      container 
      justifyContent="center" 
      alignItems="center" 
      minHeight="50vh"
    >
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Box
          sx={{
            backgroundColor: "#CFF4FC",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <Typography 
            sx={{ color: "#056DAC", fontSize: "18px", fontWeight: "500", whiteSpace: "normal" }}
          >
            There are no products in your wishlist.
          </Typography>
          <Typography 
            sx={{ marginTop: "10px", fontSize: "16px", fontWeight: "600" }}
          >
            <a 
              href="/shop" 
              style={{ color: "black", textDecoration: "none" }}
            >
              Continue Shopping
            </a>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default NoProductAtWishlist;
