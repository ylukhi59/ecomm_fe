import React from 'react'
import Header from '../../Component/Global/Header'
import Navigation from '../../Component/Global/Navigation'
import { Box } from '@mui/material'
import Herosection from '../../Component/Global/Herosection'
import MainGrid from '../../Component/Shop/MainGrid'
import GetDiscount from '../../Component/Global/GetDiscount'
import HorizontalLine from '../../Component/Home/HorizontalLine'
import LoadMoreBtn from '../../Component/Global/LoadMoreBtn'
import Footer from '../../Component/Global/Footer'

function Shop() {
  return (
    <Box>

        <Header/>
        <Navigation/>
        <Herosection Name={"Products"} Home={"Home"}/>
        <MainGrid/>
        <HorizontalLine/>
        <GetDiscount/>
        <Footer/>
    
    </Box>
  )
}

export default Shop