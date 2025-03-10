// import { Box, Container, Grid, Typography } from "@mui/material";
// import React from "react";
// import Shipping_Image from "../../Assets/Images/Shipping.png";
// import Shipping_Back_Image from "../../Assets/Images/Shipping_background.jpg";

// function Shipping() {
//   return (
//     <Box
//       sx={{
//         background: `url(${Shipping_Back_Image})`,
//         minHeight: "50vh",
//         margin: "50px 0px 0px 0px"
    
        
//       }}
//     >
//       <Container>
//         <Grid sx={{textAlign: "center"}}>
//             <img src={Shipping_Image} style={{margin: "100px 0px 0px 0px"}}/>
//             <Typography style={{color: "white", fontSize: "50px", margin: "20px 0px 0px 0px"}}>All Orders Are Free Shipping</Typography>
//             <Typography sx={{color: "white", margin: "20px 0px 0px 0px"}}>Donec vehicula cursus vestibulum lectus, sit eros integer varius cum turpis et quam congue accumsan ac bibendum ac in erat. Donec posuere consectetuer volutpat rutrum ac sollicitudin quam quisque at interdum dignissim fringilla elit risus lorem condimentum eros mollis.</Typography>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default Shipping;




import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Shipping_Image from "../../Assets/Images/Shipping.png";
import Shipping_Back_Image from "../../Assets/Images/Shipping_background.jpg";

function Shipping() {
  return (
    <Box
      sx={{
        background: `url(${Shipping_Back_Image}) center/cover no-repeat`,
        minHeight: "50vh",
        marginTop: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Fluid Container */}
      <Container maxWidth={false}>
        <Grid container justifyContent="center" textAlign="center">
          <Grid item xs={12}>
            <Box
              component="img"
              src={Shipping_Image}
              alt="Shipping"
              sx={{ marginTop: "100px", maxWidth: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "30px", md: "50px" },
                marginTop: "20px",
                fontWeight: "bold",
              }}
            >
              All Orders Are Free Shipping
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              sx={{
                color: "white",
                marginTop: "20px",
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              Donec vehicula cursus vestibulum lectus, sit eros integer varius
              cum turpis et quam congue accumsan ac bibendum ac in erat. Donec
              posuere consectetuer volutpat rutrum ac sollicitudin quam quisque
              at interdum dignissim fringilla elit risus lorem condimentum eros
              mollis.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Shipping;
