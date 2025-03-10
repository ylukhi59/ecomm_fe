import React from 'react'
import ProductHerosection from '../../Component/Product/ProductHerosection'
import { Box } from '@mui/material'
import Herosection from '../../Component/Global/Herosection'
import Navigation from '../../Component/Global/Navigation'
import Header from '../../Component/Global/Header'
import ProductSlider from '../../Component/Collection/ProductSlider'

function Collection() {
  return (
    <Box>
        <Header/>
        <Navigation/>   
        <Herosection Name={"Collections"} Home={"Home"}/>
        <ProductSlider/>
    </Box>
  )
}

export default Collection