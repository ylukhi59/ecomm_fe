import { Grid, Box, Container, Button } from "@mui/material";
import React from "react";
import img from "../../Assets/Images/Product_1.jpg"; // Default image

function ProductImageComponent({ products = [] }) {
  return (
    <Container
      sx={{
        maxWidth: { xs: "100%", sm: "95%", md: "1200px" },
        margin: "0 auto",
        padding: "20px 10px",
      }}
    >
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box
              sx={{
                position: "relative",
                padding: "10px",
                textAlign: "center",
                "& .image-container": {
                  position: "relative",
                  width: "100%",
                  overflow: "hidden",
                  "& img": {
                    width: "100%",
                    height: "auto",
                    display: "block",
                    transition: "opacity 0.3s ease-in-out",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${product.hoverImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                  },
                  "&:hover::after": {
                    opacity: 1,
                  },
                  "&:hover img": {
                    opacity: 0,
                  },
                },
              }}
            >
              <Box className="image-container">
                <img 
                  src={product.image || img} // Default to `img` if `product.image` is not provided
                  alt={product.name || "Product"}
                
                />
              </Box>
              <Box
                sx={{
                  color: "#bab8b6",
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  marginTop: "10px",
                }}
              >
                {product.name}
              </Box>
              <Box
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span>{product.price}</span>
                <span
                  style={{
                    textDecoration: "line-through",
                    paddingLeft: "10px",
                    fontWeight: "400",
                    color: "#bab8b6",
                  }}
                >
                  {product.overPrice}
                </span>
              </Box>
            </Box>
            
          </Grid>
          
        ))}
      </Grid>
     


    </Container>
  );
}

export default ProductImageComponent;
