import { Box, Typography } from '@mui/material';
import React from 'react';
import img from '../../Assets/Images/herosection_Image.jpg';

function Herosection({ Name, Home }) {
  return (
    <Box sx={{ position: 'relative', paddingBottom: "50px" }}>
      {/* Image container */}
      <Box>
        <img
          src={img}
          alt="Herosection image"
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
      </Box>

      {/* Overlay Text */}
      <Box
        sx={{
          position: 'absolute',
          top: { xl: '30%', lg: '55%', md: '40%', sm: '35%', xs: '8%' },
          left: { xl: '45%', lg: '50%', md: '40%', sm: '35%', xs: '28%' },
          color: 'black', // Add color to make the text visible
        }}
      >
        <h1 style={{ padding: ' 0px 0px 3px 0px', marginLeft: "20px", whiteSpace: "nowrap" }}>{Name}</h1>
        <Typography sx={{ fontSize: '20px', padding: '0px 0px 0px 15px', whiteSpace: "nowrap"}}>
          {Home} / {Name}
        </Typography>
      </Box>
    </Box>
  );
}

export default Herosection;
