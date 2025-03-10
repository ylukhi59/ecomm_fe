import React from 'react'
import Header from '../../Component/Global/Header'
import { Box } from '@mui/material'
import Navigation from '../../Component/Global/Navigation'
import ProductHerosection from '../../Component/Product/ProductHerosection'
import TrendingProduct from '../../Component/Home/TrendingProduct'
import ProductImage from '../../Component/Global/ProductImage'
import MayYouLikeImage from '../../Component/Product/MayYouLikeImage'
import RecentViewedProduct from '../../Component/Product/RecentViewedProduct'
import GetDiscount from '../../Component/Global/GetDiscount'
import Footer from '../../Component/Global/Footer'


function Product() {
  return (
    <Box>
        <Header/>
        <Navigation/>
        <ProductHerosection/>
        <TrendingProduct name={"May you like this"} contant={"Mirum est notare quam littera gothica quam nunc putamus parum claram!"}/>
        <MayYouLikeImage/>
        <TrendingProduct name={"Recently viewed"} contant={"Mirum est notare quam littera gothica quam nunc putamus parum claram!"}/>
        <RecentViewedProduct/>
        <hr/>
        <GetDiscount/>
        <Footer/>
      </Box>
  )
}

export default Product