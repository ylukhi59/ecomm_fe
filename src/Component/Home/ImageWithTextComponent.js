import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img1 from '../../Assets/Images/ThreeImageSliderImg1.jpg';
import img2 from '../../Assets/Images/ThreeImageSliderImg2.jpg';
import img3 from '../../Assets/Images/ThreeImageSliderImg3.jpg';

function ImageWithTextComponent() {
  return (
    <Box>
      <Container>
        <Grid container spacing={2} justifyContent="space-between" sx={{ marginTop: "10px" }}>
          {/* Image 1 */}
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Box position="relative" sx={{ overflow: 'hidden', borderRadius: '8px' }}>
              <img
                src={img1}
                alt="Image 1"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease-in-out',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '95px',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  color: 'black',
                  padding: '8px',
                  borderRadius: '4px',
                }}
              >
                <Typography variant="h6">British made pocket</Typography>
                <Typography variant="body2">knife -oak</Typography>
                <a style={{ fontSize: "13px" }}>Discover now</a>
              </Box>
            </Box>
          </Grid>

          {/* Image 2 */}
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Box position="relative" sx={{ overflow: 'hidden', borderRadius: '8px' }}>
              <img
                src={img2}
                alt="Image 2"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease-in-out',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '95px',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  color: 'black',
                  padding: '8px',
                  borderRadius: '4px',
                }}
              >
                <Typography variant="h6">TiChair Kimi No Isu</Typography>
                <Typography variant="body2">Projecttle</Typography>
                <a style={{ fontSize: "13px" }}>Discover now</a>
              </Box>
            </Box>
          </Grid>

          {/* Image 3 */}
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Box position="relative" sx={{ overflow: 'hidden', borderRadius: '8px' }}>
              <img
                src={img3}
                alt="Image 3"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease-in-out',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '95px',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  color: 'black',
                  padding: '8px',
                  borderRadius: '4px',
                }}
              >
                <Typography>Sweeper and Dustpan</Typography>
                <Typography>by Jan Kochanski</Typography>
                <a style={{ fontSize: "13px" }}>Discover now</a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ImageWithTextComponent;
