import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import experience_Image from '../../Assets/Images/Experience.png'
import HappyCustomer from '../../Assets/Images/HappyCustomer.png'
import likes from '../../Assets/Images/Likes.png'
import Design from '../../Assets/Images/Design.png'

function Experience() {
  return (
   <Container>
    <Grid item container sx={{margin: "150px 0px 0px 0px"}}>  
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{textAlign: "center" ,padding: "30px 10px"}}>
                <img src={experience_Image}/>
                <h4 style={{whiteSpace: "normal" , margin: "10px 0px 0px 0px"}}>25+ Years of Experience</h4>
                <p style={{margin: "10px 0px 60px 0px", fontSize: "14px"}}>Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{textAlign: "center" , padding: "30px 10px", borderLeft: "2px solid #EBEBEB"}}>
                <img src={HappyCustomer}/>
                <h4 style={{whiteSpace: "normal" , margin: "10px 0px 0px 0px"}}>60,000+ Happy Customer</h4>
                <p style={{margin: "10px 0px 0px 0px" , fontSize: "14px"}}>Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{textAlign: "center" , padding: "30px 10px",borderTop: "2px solid #EBEBEB"}}>
                <img src={likes}/>
                <h4 style={{whiteSpace: "normal" , margin: "10px 0px 0px 0px"}}>Awesome Performance</h4>
                <p style={{margin: "10px 0px 0px 0px" , fontSize: "14px"}}>Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{textAlign: "center" ,padding: "30px 10px" ,borderTop: "2px solid #EBEBEB", borderLeft: "2px solid #F4F4F4"}}>
                <img src={Design }/>
                <h4 style={{whiteSpace: "normal" , margin: "10px 0px 0px 0px"}}>Impressive Design</h4>
                <p style={{margin: "10px 0px 0px 0px", fontSize: "14px"}}>Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
          </Grid>
    </Grid>

   </Container>
  )
}

export default Experience