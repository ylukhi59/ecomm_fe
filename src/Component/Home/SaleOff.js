import { Container, Grid, Typography, Box } from "@mui/material";
import React from "react";

function SaleOff() {
  return (
    <Container>
      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{paddingTop: "40px"}}>
        <Grid item xs={12} md={8} lg={6}>
          <Box
            sx={{
              position: "relative",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: { xs: "-2%", sm: "-2%", md: "-30%", lg: "-70%" },
                right: { xs: "2%", sm: "-2%", md: "-30%", lg: "-70%" },
                height: "2px",
                backgroundColor: "gray",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                position: "relative",
                zIndex: 2,
                backgroundColor: "white",
                padding: "0 20px",
                fontSize: { xs: "20px", sm: "24px", md: "28px", lg: "32px" },
                fontWeight: "500",
              }}
            >
              Sale Off
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            textAlign: "center",
            marginTop: { xs: "10px", sm: "15px", md: "20px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
              color: "gray",
            }}
          >
            Mirum est notare quam littera gothica quam nunc putamus parum claram
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SaleOff;

