import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Grid } from "@mui/material"; // Import MUI Grid
import img1 from "../../Assets/Images/logo_slider_image_1.jpg";
import img2 from "../../Assets/Images/logo_slider_image_2.jpg";
import img3 from "../../Assets/Images/logo_slider_image_3.jpg";
import img4 from "../../Assets/Images/logo_slider_image_4.jpg";
import img5 from "../../Assets/Images/logo_slider_image_5.jpg";

function RoundLogoSlider() {
  return (
    <Grid container justifyContent="center" spacing={2} sx={{marginTop: "50px"}} >
      <Grid item xs={12}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4} // Adjust slides per view dynamically
          breakpoints={{
            320: {
              slidesPerView: 2, // For small screens
            },
            600: {
              slidesPerView: 3, // For medium screens
            },
            960: {
              slidesPerView: 4, // For larger screens
            },
            1280: {
              slidesPerView: 5, // For extra large screens
            },
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {[img1, img2, img3, img4, img5 , img3].map((image, index) => (
            <SwiperSlide key={index}>
              <a href="#">
                <img
                  src={image}
                  alt={`Logo ${index + 1}`}
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
}

export default RoundLogoSlider;
