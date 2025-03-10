import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import css from '../../Assets/Css/Style.css'
import { Grid } from 'swiper/modules'

function OurHistory() {
  return (
    <Container>
        <Box sx={{display: "flex", alignItems: "center", margin: "20px 0px 0px 0px"}}>
            <Typography sx={{height: "4px", width: "100px", backgroundColor: "#BD8448"}}></Typography>
           <Typography sx={{padding: "0px 20px",fontWeight: "600", color: "#BD8448", whiteSpace: "nowrap"}}>OUR HISTORY</Typography> 
        </Box>
        <Box sx={{margin: {xl: "70px 0px 0px 200px" , lg: "70px 0px 0px 180px", md: "70px 0px 0px 160px", sm: "70px 0px 0px 130px" , xs: "70px 0px 0px 0px"}}}>
            <Typography style={{fontWeight: '500', fontSize: "30px" }}>Hello, We are Outstock.</Typography>
            <h2 style={{ fontWeight: "700", margin : {xl: "5px 0px 0px 0px", lg: "7px 0px 0px 0px", md: "9px 0px 0px 0px" , sm: "12px 0px 0px 0px", xs: "15px 0px 0px 0px"}}}>With 25+ Years of Experience</h2>
        </Box>
        <Box sx={{margin: "50px 0px 0px 0px"}}>
            <Typography>it is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify. Lighting is a minimal residence located in Tokyo, Japan, designed by Outstock. Large tiles were arranged on the counter top plate near the window.</Typography>
        </Box>
        <Box sx={{margin: "35px 0px 0px 0px"}}>
            <Typography>
            The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Sign up for an Exposure account, or post regularly to Tumblr, or both. Tell people you’re trying to get better at photography. Talk about it. When you talk about it, other people get excited about it. There are few plugins and apps available for this purpose, many of them required a monthlysubscription or needed to expose the full store data to a third party. 
            </Typography>
        </Box>
    </Container>
  )
}

export default OurHistory



