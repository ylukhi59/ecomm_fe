import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#232323", padding: "40px", paddingBottom: "100px",  paddingTop: "50px"}}>
      {/* Main Grid Container */}
      <Grid container spacing={4}>
        {/* First Column */}
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography
              sx={{
                fontSize: "30px",
                color: "#BD8448",
                fontWeight: "600",
              }}
            >
              Outstock
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "50px" }}>
            <Typography sx={{ color: "#505961" }}>
              Outstock is a premium Templates theme with advanced admin module.
              It’s extremely <br />
              customizable, easy to use, and fully responsive and retina ready.
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "#505961" }}>
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "#505961" }}
              ></i>{" "}
              Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.
            </Typography>
            <Typography sx={{ color: "#505961" }}>
              <i
                className="fa-solid fa-phone-volume"
                style={{ color: "#505961" }}
              ></i>{" "}
              Phone Number: (800) 123 456 789
            </Typography>
            <Typography sx={{ color: "#505961" }}>
              <i
                className="fa-solid fa-envelope-open"
                style={{ color: "#505961" }}
              ></i>{" "}
              Mail: outstock@support.com
            </Typography>
          </Box>
        </Grid>

        {/* Second Column */}
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <Box>
            <Typography
              sx={{ color: "#BD8448", fontWeight: "600", marginBottom: "10px" }}
            >
              INFORMATION
            </Typography>
            {["Careers", "Search", "Delivery Information", "Privacy Policy", "Terms & Conditions"].map(
              (item, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: "#505961",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#BD8448",
                    },
                    marginBottom: "5px",
                  }}
                >
                  {item}
                </Typography>
              )
            )}
          </Box>
        </Grid>

        {/* Third Column */}
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <Box>
            <Typography
              sx={{ color: "#BD8448", fontWeight: "600", marginBottom: "10px" }}
            >
              OUR SERVICES
            </Typography>
            {[
              "Shipping Policy",
              "Help & Contact Us",
              "Returns & Refunds",
              "Online Stores",
              "Terms & Conditions",
            ].map((item, index) => (
              <Typography
                key={index}
                sx={{
                  color: "#505961",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#BD8448",
                  },
                  marginBottom: "5px",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
      <hr style={{color: "#505961", marginTop: "70px"} } />
      <Grid>
        <Box>
            <Typography sx={{color: "#505961"}}>Copyright © <span style={{color: "#BD8448"}}>Outstock</span>. All rights reserved</Typography>
        </Box>
      </Grid>
    </Box>
  );
}

export default Footer;
