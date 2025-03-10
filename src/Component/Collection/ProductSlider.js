// import { Box, Container, Grid } from '@mui/material'
// import React from 'react'
// import HatImage from '../../Assets/Images/HatCollection.jpg'

// function ProductSlider() {
//     const FirstGridIMage = [
//         {
//             image: HatImage
//         }
//     ]
//   return (
//     <Container>
//         <Box>
//             <Grid item container>
//                 <Grid item xl={6} lg={6}>
//                     <Box>
//                         FirstGridIMage.map((item,index) => {
//                             item.image
//                         })
//                     </Box>
//                 </Grid>
//                 <Grid item xl={6} lg={6}></Grid>
//             </Grid>
//         </Box>
//     </Container>
//   )
// }

// export default ProductSlider
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import HatImage from "../../Assets/Images/HatCollection.jpg";
import VasImage from "../../Assets/Images/VasCollection.jpg";
import ChairImage from "../../Assets/Images/ChairCollection.jpg";
import CrocsImage from "../../Assets/Images/CrocsCollection.jpg";
import HeadphoneImage from "../../Assets/Images/HeadphoneCollection.jpg";
import LampImage from "../../Assets/Images/LampCollection.jpg";

function ProductSlider() {
  const firstGridImages = [
    { name: "Best Seller", image: HatImage },
    { name: "Decor Art", image: VasImage },
    { name: "Furniture", image: ChairImage },
    { name: "Home page", image: CrocsImage },
    { name: "Illumination", image: HeadphoneImage },
    { name: "Kitchen Things", image: LampImage },
  ];

  return (
    <Container>
      <Box>
        <Grid container spacing={2}>
          <Grid item xl={4} lg={6}>
            <Box>
              {firstGridImages.map((item, index) => (
                <Box key={index} sx={{ marginBottom: 2 }}>
                  {item.name && <Typography variant="h4" sx={{margin: "2px 0px 15px 0px"}}>{item.name}</Typography>}
                  <img
                    src={item.image}
                    alt={`Product ${index + 1}`}
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xl={8} lg={6}>
            {/* Additional Content Can Be Added Here */}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ProductSlider;
