import { Box } from '@mui/material'
import React from 'react'
import img1 from '../../Assets/Images/Product_1.jpg'
import img1h from '../../Assets/Images/Product_1_hover.jpg'
import img2 from '../../Assets/Images/Product_8.jpg'
import img2h from '../../Assets/Images/Product_8_hover.jpg'
import ProductImageComponent from '../Global/ProductImageComponent'


function RecentViewedProduct() {
    const products =[
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
    ]
  return <ProductImageComponent products={products}/>
}

export default RecentViewedProduct