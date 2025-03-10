// import { Box, Container, Grid, Typography } from '@mui/material'
// import React from 'react'
// import CEO_1 from '../../Assets/Images/CEO_1.jpg'
// import CEO_2 from '../../Assets/Images/CEO_2.jpg'
// import CEO_3 from '../../Assets/Images/CEO_3.jpg'

// function Founders() {
//   return (
//    <Container>
//          <Grid item container spacing={2}>
//         <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>

//             <Box>
//               <img src={CEO_1}/>
//               <h2>John Doe</h2>
//               <Typography>CEO & Founder</Typography>
//               <Box sx={{display: "flex", justifyContent: "space-between"}}>
//                   <span style={{border: "2px solid black", borderRadius: "50%"}}><i class="fa-brands fa-twitter p-1"></i></span>
//                   <span style={{border: "2px solid black", borderRadius: "50%"}}><i class="fa-brands fa-youtube p-1"></i></span>
//                   <span style={{border: "2px solid black", borderRadius: "50%"}}><i class="fa-brands fa-instagram p-1"></i></span>
//                   <span style={{border: "2px solid black", borderRadius: "50%"}}><i class="fa-brands fa-tiktok p-1"></i></span>
//               </Box>
//              <Box>
//              <Typography>
//               Sed ut perspiciatis unde omnis iste natuserrorsitaccusantium doloremque laudan.
//               </Typography>
//              </Box>
//             </Box>        

//         </Grid>
//         <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>

//             <Box>
//               <img src={CEO_2}/>
//               <h2></h2>
//               <Typography></Typography>
//               <Typography></Typography>
//               <Typography></Typography>
//               <Typography></Typography>
//             </Box>        

//         </Grid>
//         <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>

//             <Box>
//               <img src={CEO_3}/>
//               <h2></h2>
//               <Typography></Typography>
//               <Typography></Typography>
//               <Typography></Typography>
//               <Typography></Typography>
//             </Box>        

//         </Grid>
//     </Grid>
//    </Container>
//   )
// }

// export default Founders

import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import CEO_1 from '../../Assets/Images/CEO_1.jpg';
import CEO_2 from '../../Assets/Images/CEO_2.jpg';
import CEO_3 from '../../Assets/Images/CEO_3.jpg';

const founders = [
  {
    image: CEO_1,
    name: 'John Doe',
    position: 'CEO & Founder',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque laudantium.',
  },
  {
    image: CEO_2,
    name: 'Jane Smith',
    position: 'Co-Founder',
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
  },
  {
    image: CEO_3,
    name: 'Robert Brown',
    position: 'Managing Director',
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
  },
];

function Founders() {
  return (
    <Container>
      <Grid container spacing={2} sx={{margin: "100px 0px 0px 0px"}}>
        {founders.map((founder, index) => (
          <Grid key={index} item xl={4} lg={4} md={4} sm={12} xs={12}>
            <Box textAlign="center" p={2}>
              <img src={founder.image} alt={founder.name} style={{ width: '50%', borderRadius: '10px' }} />
              <Typography variant="h6" mt={2}>{founder.name}</Typography>
              <Typography variant="subtitle1" color="textSecondary">{founder.position}</Typography>
              <Box display="flex" justifyContent="center" gap={1} mt={1}>
                {['twitter', 'youtube', 'instagram', 'tiktok'].map((platform) => (
                  <Box key={platform} sx={{ border: "1px solid #bfbfbf","&:hover": {border: "1px solid black"}, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className={`fa-brands fa-${platform}`} style={{color: "#bfbfbf", padding: "6px"}} onMouseEnter={(e) => e.target.style.color = "black"} onMouseLeave={(e) => e.target.style.color = "#bfbfbf"}></i>
                  </Box>
                ))}
              </Box>
              <Typography mt={3} variant="body2" color="textSecondary">
                {founder.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Founders;
