import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import Slider1 from "../../Assets/Images/Homepage_herosection.jpg";
import Slider2 from "../../Assets/Images/Homepage_herosection_2.jpg";
import Slider3 from "../../Assets/Images/Homepage_herosection_3.jpg";
import Aos from "aos";
import 'aos/dist/aos.css'
import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const swiperRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Move useState hook inside the Slider component
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const buttonStyles = {
    color: isHovered ? "#fff" : "#000",
    backgroundColor: isHovered ? "#BD8448" : "transparent",
    // padding: "15px 50px",
    border: "2px solid black",
    // fontSize: "15px",
    fontWeight: "500",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Define desktop and mobile sliders
  const mainSliderDesktop = [Slider1, Slider2, Slider3];
  const mainSliderMobile = [Slider1, Slider2, Slider3];
  const mainSlider = isMobile ? mainSliderMobile : mainSliderDesktop;

  useEffect(() => {
    Aos.init()
  },[])



  return (
    <Box className="mainSlider" sx={{ position: "relative"}}>
      <Swiper
        ref={swiperRef}
        navigation={false}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          renderBullet: (bulletIndex, className) => {
            return (
              <span className={`${className} custom-dot`}>
                <span className="dash"></span>
              </span>
            );
          },
        }}
      >
        {mainSlider.map((item, index) => (
          <SwiperSlide key={index} >
            <Box>
              <Box sx={{ position: "absolute" }}>
                <Container maxWidth="sm">
                  <Box sx={{ margin: { xl: 15, lg: 12, md: 10, sm: 5, xs: 0 }, py:{xl: 15 , lg: 10 , md: 6 , sm: 3 , xs: 1.7} }}>
                    <Box>
                    <Box data-aos="fade-down" data-aos-delay="700">
                    <Typography sx={{ fontSize: { xl: 36, lg: 32, md: 30, sm: 20, xs: 15 }, fontWeight: 500}}>
                        Handmade
                      </Typography>
                    </Box>
                      <Box data-aos="fade-left" data-aos-delay="500">
                      <Typography
                        sx={{
                          fontSize: { xl: 36, lg: 32, md: 30, sm: 20, xs: 15 },
                          fontWeight: 700,
                          whiteSpace: "nowrap",
                        }}
                      >
                        Handmade Curved Coffee
                      </Typography>
                      </Box>
                     <Box data-aos="fade-down" data-aos-delay="300">
                     <Typography
                        sx={{
                          py: 0,
                          fontSize: { xl: 20, lg: 20, md: 18, sm: 15, xs: 10 },
                          fontWeight: 300,
                          whiteSpace: "nowrap",
                        }}
                      >
                        As rich and unique as the coffee beans it is intended for, this little scoop
                        <br />
                        will make your morning ritual a special occasion every day.
                      </Typography>
                     </Box>
                    </Box>

                  <Box data-aos="fade-down" data-aos-delay="100">
                  <Button sx={{fontSize:{xl:19,lg:17,md:14,sm:7,sm:15},p:{xl:2,lg:3,md:2,sm:1},px:{xl:5,lg:4,md:2,sm:1} , marginTop: {xl: "20px", lg: "20px" , md: "10px" , sm: "5px" , xs: "3px"}}}
                      style={buttonStyles}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      DISCOVER NOW
                    </Button>
                  </Box>
                  </Box>
                </Container>
              </Box>
              <img  
                src={item}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  
                  maxHeight: "100vh",
                  borderRadius: "0",
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left Arrow */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          display:{sm:"none",xs:"none",xl:"block",lg:"block",md:"none"},
          top: { lg: "50%", xs: "82%", sm: "90%" },
          left: { xs: "36%", sm: "42%", lg: "50px" },
          transform: "translateY(-50%)",
          zIndex: 10,
          fontSize: { xl: 24, lg: 22, md: 18, sm: 16, xs: 14 },
          color: "black",
        }}
      >
        <KeyboardArrowLeftIcon
          sx={{ fontSize: { xl: 70, lg: 60, md: 50, sm: 40, xs: 35 } }}
        />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: { lg: "50%", xs: "82%", sm: "90%" },
          display:{sm:"none",xs:"none",xl:"block",lg:"block",md:"none"},
          right: { xs: "36%", sm: "42%", lg: "50px" },
          transform: "translateY(-50%)",
          zIndex: 10,
          fontSize: { xl: 24, lg: 22, md: 18, sm: 16, xs: 14 },
          color: "black",
        }}
      >
        <ChevronRightIcon
          sx={{ fontSize: { xl: 70, lg: 60, md: 50, sm: 40, xs: 35 } }}
        />
      </IconButton>
    </Box>
  );
};

export default Slider;
