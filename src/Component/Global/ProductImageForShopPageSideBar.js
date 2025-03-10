import { Box, Typography } from "@mui/material";
import React from "react";

function ProductImageForShopPageSideBar({ img, name, newprice, price }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <img src={img} style={{ height: "100px", margin: "20px 5px 0px 0px" }} />
      <Box>
        <Typography
          sx={{
            color: "#8C8C8C", 
            "&:hover": {
              color: "#C89968",
            },
            padding: "0px 0px 10px 0px",
            cursor: "pointer"
          }}
        >
          {name}
        </Typography>
        <Typography sx={{
          color: "#8C8C8C",
        }}>
          {newprice}
          <span style={{ textDecoration: "line-through", padding: "0px 0px 0px 10px" }}>{price}</span>
        </Typography>
      </Box>
    </Box>
  );
}

export default ProductImageForShopPageSideBar;

