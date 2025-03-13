import React from 'react'
import CollectionProductOuter from './CollectionProductOuter'
import { Box } from '@mui/material'
import HatImage from '../../Assets/Images/HatCollection.jpg'
import vasImage from '../../Assets/Images/VasCollection.jpg'
import chairImage from '../../Assets/Images/ChairCollection.jpg'
import CrocsImage from '../../Assets/Images/CrocsCollection.jpg'
import HeadphoneImage from '../../Assets/Images/HeadphoneCollection.jpg'
import LampImage from '../../Assets/Images/LampCollection.jpg'

function CollectionProduct() {
  return (
    <Box>
        <CollectionProductOuter text={"BEST SELLER"} image={HatImage}/>
        <CollectionProductOuter text={"DECORE ART"} image={vasImage}/>
        <CollectionProductOuter text={"FURNITURE"} image={chairImage}/>
        <CollectionProductOuter text={"HOME PAGE"} image={CrocsImage }/>
        <CollectionProductOuter text={"ILLUMINATION"} image={HeadphoneImage }/>
        <CollectionProductOuter text={"KITCHEN THINGS"} image={LampImage }/>
    </Box>
  )
}

export default CollectionProduct