import React from "react";
import ProductImageComponent from "./ProductImageComponent"; // Adjust path if necessary
import img1 from "../../Assets/Images/Product_1.jpg"; 
import img2 from "../../Assets/Images/Product_2.jpg";
import img3 from "../../Assets/Images/Product_3.jpg";
import img4 from "../../Assets/Images/Product_4.jpg";
import img5 from "../../Assets/Images/Product_5.jpg";
import img6 from "../../Assets/Images/Product_6.jpg";
import img7 from "../../Assets/Images/Product_7.jpg";
import img8 from "../../Assets/Images/Product_8.jpg";
import img1h from "../../Assets/Images/Product_1_hover.jpg";
import img2h from "../../Assets/Images/Product_2_hover.jpg";
import img3h from "../../Assets/Images/Product_3_hover.jpg";
import img4h from "../../Assets/Images/Product_4_hover.jpg";
import img5h from "../../Assets/Images/Product_5_hover.jpg";
import img6h from "../../Assets/Images/Product_6_hover.jpg";
import img7h from "../../Assets/Images/Product_7_hover.jpg";
import img8h from "../../Assets/Images/Product_8_hover.jpg";

function ProductImage() {
  const products = [
    {
      name: "Plastic Dining Armchair",
      price: "$120.00",
      overPrice: "$200",
      image: img1,
      hoverImage: img1h,
    },
    {
      name: "Sacrificial Chair Design",
      price: "$260.00",
      overPrice: "$280",
      image: img2,
      hoverImage: img2h,
    },
    {
      name: "Sacrificial Chair Design",
      price: "$1700",
      overPrice: "",
      image: img3,
      hoverImage: img3h,
    },
    {
      name: "Sacrificial Chair Design",
      price: "$150.00",
      overPrice: "$180",
      image: img4,
      hoverImage: img4h,
    },
    {
      name: "Sacrificial Chair Design",
      price: "$170.00",
      overPrice: "$200",
      image: img5,
      hoverImage: img5h,
    },
    {
      name: "Sacrificial Chair Design",
      price: "$100",
      overPrice: "$1800",
      image: img6,
      hoverImage: img6h,
    },
    {
      name: "Sacrificial Chair Design",
      price: "$140.00",
      overPrice: "",
      image: img7,
      hoverImage: img7h,
    },
    {
      name: "Sacrificial Chair Design",
      price: "$130",
      overPrice: "",
      image: img8,
      hoverImage: img8h,
    },
    
  ];

  return <ProductImageComponent products={products} />;
}

export default ProductImage;
