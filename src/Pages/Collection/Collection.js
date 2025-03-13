import { Box } from '@mui/material'
import React from 'react'
import CollectionProductSlider from '../../Component/Collection/CollectionProductSlider'
import Header from '../../Component/Global/Header'
import Navigation from '../../Component/Global/Navigation'
import CollectionProductOuter from '../../Component/Collection/CollectionProductOuter'
import CollectionProduct from '../../Component/Collection/CollectionProduct'
import GetDiscount from '../../Component/Global/GetDiscount'
import Footer from '../../Component/Global/Footer'
import Herosection from '../../Component/Global/Herosection'

function Collection() {
  return (
    <Box>
        <Header/>
        <Navigation/>
        <Herosection Home={"Home"} Name={"Collections"}/>
        <CollectionProduct/>
        <GetDiscount/>
        <Footer/>
    </Box>
  )
}

export default Collection