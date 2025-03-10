import { Box, Button } from '@mui/material'
import React from 'react'

function LoadMoreBtn({btn}) {
  return (
    <Box>
         <Button
  sx={{
    marginLeft: { xl: 85 , lg: 70, md: 55, sm: 35, xs: 10 },
    my: 5,
    border: "2px solid black",
    display: "block",
    color: "black",
    padding: "15px 40px",
    "&:hover": {
      borderColor: "#BD8448", // Change to your desired hover border color
      color: "#BD8448",       // Change to your desired hover text color
      whiteSpace: "nowrap"
    },
  }}
>
  {btn}
</Button>
    
    </Box>
  )
}

export default LoadMoreBtn