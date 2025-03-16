import { Box } from '@mui/material'
import React from 'react'
import Navigation from '../../Component/Global/Navigation'
import Header from '../../Component/Global/Header'
import Herosection from '../../Component/Global/Herosection'
import GetDiscount from '../../Component/Global/GetDiscount'
import Footer from '../../Component/Global/Footer'
import NoProductAtWishlist from '../../Component/Wishlist/NoProductAtWishlist'

function Wishlist() {
  return (
    <Box>
        <Navigation/>
        <Herosection Home={"Home"} Name={"Wishlist"}/>
        <NoProductAtWishlist/>
        <GetDiscount/>
        <Footer/>


    </Box>
  )
}

export default Wishlist