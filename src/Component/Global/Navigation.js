import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../../Assets/Images/logo_dark.svg";

function Navigation() {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid item>
          <Box>
            <img src={Logo} style={{ width: "50%" }} />
          </Box>
        </Grid>
        <Grid item>
          <Box>
          <ul style={{display: "flex", justifyContent: "space-between"}}>
            <li style={{padding: "0px 30px 0px 0px"}}><a href="/home">Home</a></li>
            <li style={{padding: "0px 30px 0px 0px"}}><a href="/Shop">Shop</a></li>
            <li style={{padding: "0px 30px 0px 0px"}}><a href="/Product">Product</a></li>
            <li style={{padding: "0px 30px 0px 0px"}}><a href="/Collection">Collection</a></li>
            <li style={{padding: "0px 30px 0px 0px"}}><a href="/Blog">Blog</a></li>
            <li style={{padding: "0px 0px 0px 0px"}}> <a href="/Page">Pages</a></li>
          </ul>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            {/* <Typography></Typography> */}
          </Box>

        </Grid>
      </Box>
    </Container>
  );
}

export default Navigation;
