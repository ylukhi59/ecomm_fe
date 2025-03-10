import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Grid } from "@mui/material";

import img9 from "../../Assets/Images/Product_9.jpg";
import img9h from "../../Assets/Images/Product_9.jpg";
import img2 from "../../Assets/Images/Product_2.jpg";
import img2h from "../../Assets/Images/Product_2_hover.jpg";
import img3 from "../../Assets/Images/Product_3.jpg";
import img3h from "../../Assets/Images/Product_3_hover.jpg";
import img4 from "../../Assets/Images/Product_4.jpg";
import img4h from "../../Assets/Images/Product_4_hover.jpg";
import img5 from "../../Assets/Images/Product_5.jpg";
import img5h from "../../Assets/Images/Product_5_hover.jpg";

const ProductSlider = () => {
  const products = [
    {
      name: "Plastic Dining Armchair",
      price: "$120.00",
      overPrice: "$200",
      image: img9,
      hoverImage: img9h,
    },
    {
      name: "Plastic Dining Armchair",
      price: "$120.00",
      overPrice: "$200",
      image: img2,
      hoverImage: img2h,
    },
    {
      name: "Plastic Dining Armchair",
      price: "$120.00",
      overPrice: "$200",
      image: img3,
      hoverImage: img3h,
    },
    {
      name: "Plastic Dining Armchair",
      price: "$120.00",
      overPrice: "$200",
      image: img4,
      hoverImage: img4h,
    },
    {
      name: "Plastic Dining Armchair",
      price: "$120.00",
      overPrice: "$200",
      image: img5,
      hoverImage: img5h,
    },
  ];

  return (
    <Grid container justifyContent="center" style={{ marginTop: "40px" }}>
      <Grid item xs={12} md={10} lg={8} xl={12}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20} // Adjust spacing between slides
          slidesPerView={4} // Show 4 slides at a time
          loop={true} // Enable infinite scrolling
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto scroll with delay
          // pagination={{ clickable: true }} // Enable pagination dots
          breakpoints={{
            // Adjust visible slides for different screen sizes
            320: { slidesPerView: 1, spaceBetween: 10 }, // For small screens
            600: { slidesPerView: 2, spaceBetween: 15 }, // For tablets
            960: { slidesPerView: 3, spaceBetween: 20 }, // For medium screens
            1280: { slidesPerView: 4, spaceBetween: 30 }, // For large screens
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "500px", // Set a fixed height
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%", // Make the width responsive
                    maxWidth: "300px", // Limit max width
                    height: "400px", // Adjust height
                    objectFit: "cover", // Scale image properly
                    marginBottom: "10px",
                    backgroundColor: "#F6F6F6",
                  }}
                />
                <div style={{ textAlign: "center" }}>
                  <h4 style={{ margin: "10px 0", fontSize: "16px" }}>
                    {product.name}
                  </h4>
                  {product.overPrice && (
                    <p
                      style={{
                        margin: "5px 0",
                        color: "#888",
                        textDecoration: "line-through",
                      }}
                    >
                      {product.overPrice}
                    </p>
                  )}
                  <p
                    style={{
                      margin: "5px 0",
                      color: "#000",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    {product.price}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
};

export default ProductSlider;
