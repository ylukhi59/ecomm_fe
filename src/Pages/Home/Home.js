import React from 'react'
import Header from '../../Component/Global/Header'
import Navigation from '../../Component/Global/Navigation'
import Home_herosection from '../../Component/Home/Home_herosection'
import ProductImage from '../../Component/Global/ProductImage'
import { Box } from '@mui/material'
import ImageWithTextComponent from '../../Component/Home/ImageWithTextComponent'
import TwoBottleImage from '../../Component/Global/TwoBottleImage'
import TrendingProduct from '../../Component/Home/TrendingProduct'
import SaleOff from '../../Component/Home/SaleOff'
import SaleOffProduct from '../../Component/Home/SaleOffProduct'
import RoundLogoSlider from '../../Component/Home/RoundLogoSlider'
import OurBlogPost from '../../Component/Home/OurBlogPost'
import BlogProductImageSlider from '../../Component/Global/BlogProductImageSlider'
import HorizontalLine from '../../Component/Home/HorizontalLine'
import GetDiscount from '../../Component/Global/GetDiscount'
import Footer from '../../Component/Global/Footer'
import { useNavigate } from 'react-router-dom'
import LoadMoreBtn from '../../Component/Global/LoadMoreBtn'

function Home() {
  const navigate = useNavigate()
  return (
    <Box>
        <Header/>
      <Navigation/>
      <Home_herosection/>   
      <TrendingProduct name={"Trending products"} contant={"Mirum est notare quam littera gothica quam nunc putamus parum claram!"}/>
      <ImageWithTextComponent/>
      <ProductImage/>
      <LoadMoreBtn btn={"Load More"}/>
      <TwoBottleImage/>
      <SaleOff/>
    <SaleOffProduct/>
    <RoundLogoSlider/>
    <OurBlogPost/>
    <BlogProductImageSlider/>
    <HorizontalLine/>
    <GetDiscount/>
    <Footer/>
    </Box>  
  )
}

export default Home