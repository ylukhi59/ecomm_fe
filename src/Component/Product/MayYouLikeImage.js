import { Box } from '@mui/material';
import React from 'react';
import img1 from "../../Assets/Images/Product_1.jpg";
import img1h from "../../Assets/Images/Product_1_hover.jpg";
import img2 from "../../Assets/Images/Product_2.jpg";
import img2h from "../../Assets/Images/Product_2_hover.jpg";
import img3 from "../../Assets/Images/Product_3.jpg";
import img3h from "../../Assets/Images/Product_3_hover.jpg";
import img4 from "../../Assets/Images/Product_4.jpg";
import img4h from "../../Assets/Images/Product_4_hover.jpg";
import img5 from "../../Assets/Images/Product_5.jpg";
import img5h from "../../Assets/Images/Product_5_hover.jpg";
import ProductImageComponent from '../Global/ProductImageComponent';

function MayYouLikeImage() {
  const products = [
    {
      name: "Plastic Dining Armchair",
      price: "$120.00",
      overPrice: "$200",
      image: img1,
      hoverImage: img1h
    },
    {
      name: "Plastic Dining Armchair",
      price: "$120.00",
      overPrice: "$200",
      image: img2,
      hoverImage: img2h
    },
    {
      name: "Plastic Dining Armchair",
      price: "$120.00",
      overPrice: "$200",
      image: img3,
      hoverImage: img3h
    },
    {
      name: "Plastic Dining Armchair",
      price: "$120.00",
      overPrice: "$200",
      image: img4,
      hoverImage: img4h
    },

  ];
  
  return <ProductImageComponent products={products} />;
}

export default MayYouLikeImage;
