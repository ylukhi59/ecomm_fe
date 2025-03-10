import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Box, Typography, Grid } from "@mui/material";
import img1 from "../../Assets/Images/BlogSlider_1.jpg";
import img2 from "../../Assets/Images/BlogSlider_2.jpg";
import img3 from "../../Assets/Images/BlogSlider_3.jpg";
import img4 from "../../Assets/Images/BlogSlider_4.jpg";
import img5 from "../../Assets/Images/BlogSlider_5.jpg";

function BlogProductImageSlider() {
  const [hover, setHover] = useState(false);

  return (
    <Grid container justifyContent="center" sx={{ padding: "20px" , marginTop: "30px" }}>
      <Grid item xs={12} md={10} lg={10} xl = "12">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true} // Enable infinite scrolling
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1, // 1 slide on small screens
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2, // 2 slides on medium screens
              spaceBetween: 15,
            },
            960: {
              slidesPerView: 3, // 3 slides on large screens
              spaceBetween: 20,
            },
          }}
        >
          {[img1, img2, img3, img4, img5].map((img, index) => (
            <SwiperSlide key={index}>
              <Box>
                <Box>
                  <img
                    src={img}
                    alt={`Blog Image ${index + 1}`}
                    style={{ height: "300px", width: "100%", objectFit: "cover" }}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "25px",
                      paddingTop: "8px",
                    }}
                  >
                    Anteposuerit litterarum formas.
                  </Typography>
                  <Typography
                    sx={{
                      whiteSpace: "nowrap",
                      fontSize: "12px",
                      paddingBottom: "15px",
                      fontFamily: "Poppins",
                    }}
                  >
                    By{" "}
                    <span style={{ color: "#C89968" }}>Mr.admin</span> / November
                    06, 2017
                  </Typography>
                  <Typography>
                    Diga, Koma and Torus are three kitchen utensils designed for
                    Ommo, a new design-oriented brand introduced at the Ambiente
                    show in February 2016. Minimalist approach...
                  </Typography>
                  <button
                    style={{
                      padding: "10px 40px",
                      marginTop: "20px",
                      backgroundColor: "white",
                      border: `2px solid ${hover ? "#C89968" : "black"}`,
                      color: hover ? "#C89968" : "black",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    Read More
                  </button>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
}

export default BlogProductImageSlider;
