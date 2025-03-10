import { Box, Container, Grid } from "@mui/material";
import React from "react";
import img1 from "../../Assets/Images/PhotoGrid1.jpg";
import img2 from "../../Assets/Images/PhotoGrid2.jpg";
import img3 from "../../Assets/Images/PhotoGrid3.jpg";
import img4 from "../../Assets/Images/PhotoGrid4.jpg";
import img5 from "../../Assets/Images/PhotoGrid5.jpg";

function PhotoGrid() {
  return (
    <Box>
      <Container>
        <Grid container spacing={2} sx={{margin: "0px 0px 50px 0px"}}>
          {/* Left Section */}
          <Grid item xs={12} md={8} container spacing={2}>
            <Grid item xs={12}>
              <img src={img1} width="100%" style={{ borderRadius: "8px" }} />
            </Grid>
            <Grid item xs={6}>
              <img src={img4} width="100%" style={{ borderRadius: "8px" }} />
            </Grid>
            <Grid item xs={6}>
              <img src={img5} width="100%" style={{ borderRadius: "8px" }} />
            </Grid>
          </Grid>
          
          {/* Right Section */}
          <Grid item xs={12} md={4} container spacing={2}>
            <Grid item xs={12}>
              <img src={img2} width="100%" style={{ borderRadius: "8px" }} />
            </Grid>
            <Grid item xs={12}> 
              <img src={img3} width="100%" height="100%" style={{ borderRadius: "8px" }} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default PhotoGrid;
