import { Box } from '@mui/material'
import React from 'react'
import Header from '../../Component/Global/Header'
import Herosection from '../../Component/Global/Herosection'
import ProductHerosection from '../../Component/Product/ProductHerosection'
import BlogProducts from '../../Component/Blog/BlogProducts'
import Navigation from '../../Component/Global/Navigation'
import GetDIscount from '../../Component/Global/GetDiscount'
import Footer from '../../Component/Global/Footer'

function Blog() {
  return (
    <Box>
      
        <Header/>
        <Navigation/>
        <Herosection Name={"News"} Home={"Home"}/>
        <BlogProducts/>
        <GetDIscount/>
        <Footer/>

        
    </Box>
  )
}

export default Blog