// // import { Box, Container, Grid, Typography } from "@mui/material";
// // import React from "react";
// // import HatImage from "../../Assets/Images/HatCollection.jpg";
// // import VasImage from "../../Assets/Images/VasCollection.jpg";
// // import ChairImage from "../../Assets/Images/ChairCollection.jpg";
// // import CrocsImage from "../../Assets/Images/CrocsCollection.jpg";
// // import HeadphoneImage from "../../Assets/Images/HeadphoneCollection.jpg";
// // import LampImage from "../../Assets/Images/LampCollection.jpg";
// // import img1 from '../../Assets/Images/Product_1.jpg'
// // import img2 from '../../Assets/Images/Product_2.jpg'
// // import img3 from '../../Assets/Images/Product_3.jpg'
// // import img4 from '../../Assets/Images/Product_4.jpg'
// // import img5 from '../../Assets/Images/Product_5.jpg'

// // import 'swiper/css';
// // import { Swiper, SwiperSlide } from 'swiper/react';



// // function ProductSlider() {
// //   const firstGridImages = [
// //     {image: HatImage },
// //     {image: VasImage },
// //     {image: ChairImage },
// //     {image: CrocsImage },
// //     {image: HeadphoneImage },
// //     {image: LampImage },
// //   ];

// //   const firstSliderImage = [
// //     {image: img1,hoverImage: img2,details: "Scarificial chair design",price: "100$-120$",},
// //     {image: img2,hoverImage: img1,details: "Scarificial chair design",price: "100$-120$",},
// //     {image: img3,hoverImage: img4,details: "Scarificial chair design",price: "100$-120$",},
// //     {image: img4,hoverImage: img3,details: "Scarificial chair design",price: "100$-120$",},
// //     {image: img5,hoverImage: img5,details: "Scarificial chair design",price: "100$-120$",}
// //   ]

// //   return (
// //     <Container>
// //       <Box>
// //         <Grid container spacing={2}>
// //           <Grid item xl={4} lg={6} md={6} sm={12} xs={12}>
// //             <Box>
// //               {firstGridImages.map((item, index) => (
// //                 <Box key={index} sx={{ marginBottom: 2 }}>
// //                   {item.name && <Typography variant="h4" sx={{margin: "2px 0px 15px 0px"}}>{item.name}</Typography>}
// //                   <img
// //                     src={item.image}
// //                     alt={`Product ${index + 1}`}
// //                     style={{ width: "100%", borderRadius: "8px" }}
// //                   />
                 
// //                 </Box>
// //               ))}
// //             </Box>
// //           </Grid>
// //           <Grid item xl={8} lg={6} md={6} sm={12} xs={12} sx={{margin: "50px 0px 0px 0px"}}>
// //            <Box>


// //     <Swiper
// //       spaceBetween={50}
// //       slidesPerView={4}
// //       onSlideChange={() => console.log('slide change')}
// //       onSwiper={(swiper) => console.log(swiper)}
// //       breakpoints={{
// //             320: {
// //               slidesPerView: 2, // For small screens
// //             },
// //             600: {
// //               slidesPerView: 3, // For medium screens
// //             },
// //             960: {
// //               slidesPerView: 4, // For larger screens
// //             },
// //             1280: {
// //               slidesPerView: 4, // For extra large screens
// //             },
// //             }}
// //             loop = {true}
// //     >
    

// //              { firstSliderImage.map((item,index) => {
// //                   return(
// //                     <SwiperSlide key={index}>
// //                      <img
// //                        src={item.image}
// //                        alt={item.name}
// //                        style={{ width: "100%", borderRadius: "8px" }}
// //                      />
// //                       <Typography sx={{whiteSpace: "nowrap"}}>{item.details}</Typography>
// //                       <Typography>{item.price}</Typography>
// //                    </SwiperSlide>
// //                   )
// //               })}

     
      
// //     </Swiper>
  
// //            </Box>
// //           </Grid>
// //         </Grid>
// //       </Box>
// //     </Container>
// //   );
// // }

// // export default ProductSlider;




// import React, { useState } from "react";
// import { Box, Container, Grid, Typography } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// // Import images
// import HatImage from "../../Assets/Images/HatCollection.jpg";
// import VasImage from "../../Assets/Images/VasCollection.jpg";
// import ChairImage from "../../Assets/Images/ChairCollection.jpg";
// import CrocsImage from "../../Assets/Images/CrocsCollection.jpg";
// import HeadphoneImage from "../../Assets/Images/HeadphoneCollection.jpg";
// import LampImage from "../../Assets/Images/LampCollection.jpg";
// import img1 from "../../Assets/Images/Product_1.jpg";
// import img2 from "../../Assets/Images/Product_2.jpg";
// import img3 from "../../Assets/Images/Product_3.jpg";
// import img4 from "../../Assets/Images/Product_4.jpg";
// import img5 from "../../Assets/Images/Product_5.jpg";

// const firstGridImages = [
//   { image: HatImage, name: "Hat" },
//   { image: VasImage, name: "Vase" },
//   { image: ChairImage, name: "Chair" },
//   { image: CrocsImage, name: "Crocs" },
//   { image: HeadphoneImage, name: "Headphones" },
//   { image: LampImage, name: "Lamp" },
// ];

// const firstSliderImages = [
//   { image: img1, hoverImage: img2, details: "Sacrificial chair design", price: "$100 - $120" },
//   { image: img2, hoverImage: img1, details: "Sacrificial chair design", price: "$100 - $120" },
//   { image: img3, hoverImage: img4, details: "Sacrificial chair design", price: "$100 - $120" },
//   { image: img4, hoverImage: img3, details: "Sacrificial chair design", price: "$100 - $120" },
//   { image: img5, hoverImage: img5, details: "Sacrificial chair design", price: "$100 - $120" },
// ];

// function ProductSlider() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <Container>
//       <Box>
//         <Grid container spacing={2}>
//           {/* Static Grid Section */}
//           <Grid item xl={4} lg={6} md={6} sm={12} xs={12}>
//             {firstGridImages.map((item, index) => (
//               <Box key={index} sx={{ marginBottom: 2 }}>
//                 <Typography variant="h5" sx={{ marginBottom: 1 }}>{item.name}</Typography>
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   style={{ width: "100%", borderRadius: "8px" }}
//                 />
//               </Box>
//             ))}
//           </Grid>

//           {/* Swiper Slider Section */}
//           <Grid item xl={8} lg={6} md={6} sm={12} xs={12} sx={{ marginTop: "50px" }}>
//             <Swiper
//               spaceBetween={20}
//               loop={true}
//               breakpoints={{
//                 320: { slidesPerView: 2 },
//                 600: { slidesPerView: 3 },
//                 960: { slidesPerView: 4 },
//                 1280: { slidesPerView: 4 },
//               }}
//             >
//               {firstSliderImages.map((item, index) => (
//                 <SwiperSlide key={index}>
//                   <Box
//                     onMouseEnter={() => setHoveredIndex(index)}
//                     onMouseLeave={() => setHoveredIndex(null)}
//                     sx={{
//                       textAlign: "center",
//                       cursor: "pointer",
//                       transition: "all 0.3s ease-in-out"
//                     }}
//                   >
//                     <img
//                       src={hoveredIndex === index ? item.hoverImage : item.image}
//                       alt={`Product ${index + 1}`}
//                       style={{ width: "100%", borderRadius: "8px", transition: "0.3s" }}
//                     />
//                     <Typography sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}>{item.details}</Typography>
//                     <Typography>{item.price}</Typography>
//                   </Box>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </Grid>
//         </Grid>
//       </Box>
//     </Container>
//   );
// }

// export default ProductSlider;





































// import { Box, Container, Grid, Typography } from "@mui/material";
// import React from "react";
// import HatImage from "../../Assets/Images/HatCollection.jpg";
// import VasImage from "../../Assets/Images/VasCollection.jpg";
// import ChairImage from "../../Assets/Images/ChairCollection.jpg";
// import CrocsImage from "../../Assets/Images/CrocsCollection.jpg";
// import HeadphoneImage from "../../Assets/Images/HeadphoneCollection.jpg";
// import LampImage from "../../Assets/Images/LampCollection.jpg";
// import img1 from '../../Assets/Images/Product_1.jpg'
// import img2 from '../../Assets/Images/Product_2.jpg'
// import img3 from '../../Assets/Images/Product_3.jpg'
// import img4 from '../../Assets/Images/Product_4.jpg'
// import img5 from '../../Assets/Images/Product_5.jpg'

// import 'swiper/css';
// import { Swiper, SwiperSlide } from 'swiper/react';



// function ProductSlider() {
//   const firstGridImages = [
//     {image: HatImage },
//     {image: VasImage },
//     {image: ChairImage },
//     {image: CrocsImage },
//     {image: HeadphoneImage },
//     {image: LampImage },
//   ];

//   const firstSliderImage = [
//     {image: img1,hoverImage: img2,details: "Scarificial chair design",price: "100$-120$",},
//     {image: img2,hoverImage: img1,details: "Scarificial chair design",price: "100$-120$",},
//     {image: img3,hoverImage: img4,details: "Scarificial chair design",price: "100$-120$",},
//     {image: img4,hoverImage: img3,details: "Scarificial chair design",price: "100$-120$",},
//     {image: img5,hoverImage: img5,details: "Scarificial chair design",price: "100$-120$",}
//   ]

//   return (
//     <Container>
//       <Box>
//         <Grid container spacing={2}>
//           <Grid item xl={4} lg={6} md={6} sm={12} xs={12}>
//             <Box>
//               {firstGridImages.map((item, index) => (
//                 <Box key={index} sx={{ marginBottom: 2 }}>
//                   {item.name && <Typography variant="h4" sx={{margin: "2px 0px 15px 0px"}}>{item.name}</Typography>}
//                   <img
//                     src={item.image}
//                     alt={`Product ${index + 1}`}
//                     style={{ width: "100%", borderRadius: "8px" }}
//                   />
                 
//                 </Box>
//               ))}
//             </Box>
//           </Grid>
//           <Grid item xl={8} lg={6} md={6} sm={12} xs={12} sx={{margin: "50px 0px 0px 0px"}}>
//            <Box>


//     <Swiper
//       spaceBetween={50}
//       slidesPerView={4}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//       breakpoints={{
//             320: {
//               slidesPerView: 2, // For small screens
//             },
//             600: {
//               slidesPerView: 3, // For medium screens
//             },
//             960: {
//               slidesPerView: 4, // For larger screens
//             },
//             1280: {
//               slidesPerView: 4, // For extra large screens
//             },
//             }}
//             loop = {true}
//     >
    

//              { firstSliderImage.map((item,index) => {
//                   return(
//                     <SwiperSlide key={index}>
//                      <img
//                        src={item.image}
//                        alt={item.name}
//                        style={{ width: "100%", borderRadius: "8px" }}
//                      />
//                       <Typography sx={{whiteSpace: "nowrap"}}>{item.details}</Typography>
//                       <Typography>{item.price}</Typography>
//                    </SwiperSlide>
//                   )
//               })}

     
      
//     </Swiper>
  
//            </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </Container>
//   );
// }

// export default ProductSlider;




import React, { useState } from "react";
import { Box, Container, duration, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Import images
import HatImage from "../../Assets/Images/HatCollection.jpg";
import VasImage from "../../Assets/Images/VasCollection.jpg";
import ChairImage from "../../Assets/Images/ChairCollection.jpg";
import CrocsImage from "../../Assets/Images/CrocsCollection.jpg";
import HeadphoneImage from "../../Assets/Images/HeadphoneCollection.jpg";
import LampImage from "../../Assets/Images/LampCollection.jpg";
import img1 from "../../Assets/Images/Product_1.jpg";
import img2 from "../../Assets/Images/Product_2.jpg";
import img3 from "../../Assets/Images/Product_3.jpg";
import img4 from "../../Assets/Images/Product_4.jpg";
import img5 from "../../Assets/Images/Product_5.jpg";

// const firstGridImages = [
//   { image: HatImage, name: "Hat" },
//   { image: VasImage, name: "Vase" },
//   { image: ChairImage, name: "Chair" },
//   { image: CrocsImage, name: "Crocs" },
//   { image: HeadphoneImage, name: "Headphones" },
//   { image: LampImage, name: "Lamp" },
// ];

const firstSliderImages = [
  { image: img1, hoverImage: img2, details: "Sacrificial chair design", price: "$100 - $120" },
  { image: img2, hoverImage: img3, details: "Sacrificial chair design", price: "$100 - $120" },
  { image: img3, hoverImage: img1, details: "Sacrificial chair design", price: "$100 - $120" },
  { image: img4, hoverImage: img3, details: "Sacrificial chair design", price: "$100 - $120" },
  { image: img5, hoverImage: img4, details: "Sacrificial chair design", price: "$100 - $120" },
];

function ProductSlider({image}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Container>
      <Box>
        <Grid container spacing={2}>
          {/* Static Grid Section */}
          <Grid item xl={4} lg={6} md={6} sm={12} xs={12}>
          <img src={image} alt="Image" style={{width: "100%", margin: "20px 0px 0px 0px"}}/>
          </Grid>

          {/* Swiper Slider Section */}
          <Grid item xl={8} lg={6} md={6} sm={12} xs={12} sx={{ marginTop: "50px" }}>
          <Typography sx={{fontSize: "14px", margin: "0px 0px 14px 0px"}} >Koma and Torus are two tea infusers, each with an original design and a concealed function. Koma has a round base and a long stainless steel-trimmed handle which offers a comfortable grip and allows</Typography>

            <Swiper
              spaceBetween={20}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 2 },
                600: { slidesPerView: 3 },
                960: { slidesPerView: 4 },
                1280: { slidesPerView: 4 },
              }}
            >
            
              {firstSliderImages.map((item, index) => (
                <SwiperSlide key={index}>
                  <Box
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    sx={{
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "all 0.3s ease-in-out"
                    }}
                  >
                   <Box sx={{display: "block" , justifyContent: "center"}}>
                   <img
                      src={hoveredIndex === index ? item.hoverImage : item.image}
                      alt={`Product ${index + 1}`}
                      style={{ width: "100%", borderRadius: "8px", transition: "0.3s" }}
                    />
                    <Typography sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}>{item.details}</Typography>
                    <Typography>{item.price}</Typography>
                   </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ProductSlider;
