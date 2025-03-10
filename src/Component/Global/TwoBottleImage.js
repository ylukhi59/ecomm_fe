
import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import img from "../../Assets/Images/bottleImage.jpg";

function TwoBottleImage() {
  return (
    <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
      {/* First Bottle Section */}
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Box sx={{ position: "relative", textAlign: "left" }}>
          <img 
            src={img} 
            style={{ width: "100%", height: "auto", objectFit: "cover" }} 
            alt="Bottle with wooden cork" 
          />
          <Box 
            sx={{ 
              position: "absolute", 
              top: {xl: "30%" , lg: "15%" , md: "7%" , sm: "10%" , xs: "0%"}, 
              left: {xl: "10%" , lg: "5%" ,  md: "4%" , sm: "3%" ,xs: "3%" }, 
              color: "#000", 
              maxWidth: " 70%" 
            }}
          >
            <Typography variant="h6" sx={{ paddingBottom: {xl: "10px" , lg: "8px" , md: "5px", sm: "20px" , xs: "0px"} , fontSize: {xl: "30px", lg: "25px" , md: "20px" , sm: "25px", xs: "15px"} }}>
              Bottle with wooden cork
            </Typography>
            <Typography variant="subtitle1" sx={{ paddingBottom: {xl: "20px" , lg: "8px" , md: "5px", sm: "20px" , xs: "0px"}, fontSize: {xl: "30px", lg: "25px" , md: "20px" , sm: "25px", xs: "15px"}  }}>
              Product Essential
            </Typography>
            <Typography variant="body2" sx={{fontSize: {xl: "15px", lg: "10px" ,  md: "7px" , sm: "15px" , xs: "10px" }}}>
              The Newton sofa range is the first product Jonas Wagell has
              designed for Zaozuo, but one of the last to be finalized and launched.
            </Typography>
            <Button 
                 
              sx={{ marginTop: "20px", padding: {xl: "10px 20px" , lg: "10px 20px" , md: "7px 20px" , sm: "10px 20px" , xs: "5px 20px"}, color: "black", border: "2px solid black" }}
            >
              Buy Now / <span style={{color: "#C89B6B"}}> $196.98</span>
            </Button>
          </Box>
        </Box>
      </Grid>
      
      {/* Second Bottle Section */}
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Box sx={{ position: "relative", textAlign: "left" }}>
          <img 
            src={img} 
            style={{ width: "100%", height: "auto", objectFit: "cover" }} 
            alt="Bottle with wooden cork" 
          />
          <Box 
            sx={{ 
              position: "absolute", 
              top: {xl: "30%" , lg: "15%" , md: "7%" , sm: "10%" , xs: "0%"}, 
              left: {xl: "10%" , lg: "5%" ,  md: "4%" , sm: "3%" ,xs: "3%" }, 
              color: "#000", 
              maxWidth: " 70%" 
            }}
          >
            <Typography variant="h6" sx={{ paddingBottom: {xl: "10px" , lg: "8px" , md: "5px", sm: "20px" , xs: "0px"} , fontSize: {xl: "30px", lg: "25px" , md: "20px" , sm: "25px", xs: "15px"} }}>
              Bottle with wooden cork
            </Typography>
            <Typography variant="subtitle1" sx={{ paddingBottom: {xl: "20px" , lg: "8px" , md: "5px", sm: "20px" , xs: "0px"}, fontSize: {xl: "30px", lg: "25px" , md: "20px" , sm: "25px", xs: "15px"}  }}>
              Product Essential
            </Typography>
            <Typography variant="body2" sx={{fontSize: {xl: "15px", lg: "10px" ,  md: "7px" , sm: "15px" , xs: "10px" }}}>
              The Newton sofa range is the first product Jonas Wagell has
              designed for Zaozuo, but one of the last to be finalized and launched.
            </Typography>
            <Button 
                 
              sx={{ marginTop: "20px", padding: {xl: "10px 20px" , lg: "10px 20px" , md: "7px 20px" , sm: "10px 20px" , xs: "5px 20px"}, color: "black", border: "2px solid black" }}
            >
              Buy Now / <span style={{color: "#C89B6B"}}> $196.98</span>
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default TwoBottleImage;


