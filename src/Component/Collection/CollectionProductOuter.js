import { Box, Container } from '@mui/material'
import React from 'react'
import CollectionProductSlider from '../../Component/Collection/CollectionProductSlider'
import image1 from '../../Assets/Images/HatCollection.jpg'

function CollectionProductOuter({text,image}) {
  return (
    <Container>
        <Box sx={{margin: "70px 0px 0px 0px"}}>
            <h2 style={{borderBottom: "1px solid black",padding: "0px 0px 10px 0px"} }>{text}</h2>
            <CollectionProductSlider image={image} />
        </Box>

    </Container>
  )
}

export default CollectionProductOuter