import { Box } from '@mui/material'
import React from 'react'
import Navigation from '../../Component/Global/Navigation'
import Header from '../../Component/Global/Header'
import Herosection from '../../Component/Global/Herosection'
import OurHistory from '../../Component/Pages/OurHistory'
import PhotoGrid from '../../Component/Pages/PhotoGrid'
import Experience from '../../Component/Pages/Experience'
import Shipping from '../../Component/Pages/Shipping'
import Founders from '../../Component/Pages/Founders'
import GetDiscount from '../../Component/Global/GetDiscount'
import Footer from '../../Component/Global/Footer'

function Page() {
  return (
    <Box>
        <Header/>
         <Navigation/>
        <Herosection Name={"About Us"} Home={"Home"}/> 
        <OurHistory/>
        <PhotoGrid/>
        <Experience/>
        <Shipping/>
        <Founders/>
        <GetDiscount/>
        <Footer/>

    </Box>
  )
}

export default Page