import { Box, Container, Grid, Slider, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import css from '../../Assets/Css/Style.css';
import ProductImageForShopPageSideBar from '../Global/ProductImageForShopPageSideBar';
import img1 from '../../Assets/Images/Product_1.jpg';
import image1 from '../../Assets/Images/Product_1.jpg';
import image1h from '../../Assets/Images/Product_1_hover.jpg';
import img2 from '../../Assets/Images/Product_2.jpg';
import image2 from '../../Assets/Images/Product_2.jpg';
import image2h from '../../Assets/Images/Product_2_hover.jpg';
import img3 from '../../Assets/Images/Product_3.jpg';
import image3 from '../../Assets/Images/Product_3.jpg';
import img3h from '../../Assets/Images/Product_3_hover.jpg';
import img4 from '../../Assets/Images/Product_4.jpg';
import image4 from '../../Assets/Images/Product_4.jpg';
import img4h from '../../Assets/Images/Product_4_hover.jpg';
import image4h from '../../Assets/Images/Product_4_hover.jpg';
import image5 from '../../Assets/Images/Product_5.jpg';
import image5h from '../../Assets/Images/Product_5_hover.jpg';
import image6 from '../../Assets/Images/Product_6.jpg';
import image6h from '../../Assets/Images/Product_6_hover.jpg';
import image7 from '../../Assets/Images/Product_7.jpg';
import image7h from '../../Assets/Images/Product_7_hover.jpg';
import image8 from '../../Assets/Images/Product_8.jpg';
import image8h from '../../Assets/Images/Product_8_hover.jpg';
import ProductImage from '../Global/ProductImage';
import ProductImageComponent from '../Global/ProductImageComponent';

function MainGrid() {
   const colors = [
     { name: 'Red', code: 'red' },
     { name: 'Blue', code: 'blue' },
     { name: 'Yellow', code: 'yellow' },
     { name: 'Black', code: 'black' },
     { name: 'Brown', code: 'brown' },
     { name: 'Grey', code: 'grey' },
     { name: 'Orange', code: 'orange' },
     { name: 'Green', code: 'green' },
   ];

   const tags = [
     { name: 'Bags', code: 'Bags' },
     { name: 'Chair', code: 'Chair' },
     { name: 'Classic', code: 'Classic' },
     { name: 'Decore', code: 'Decore' },
     { name: 'Fashion', code: 'Furniture' },
     { name: 'Gift', code: 'Gift' },
     { name: 'Lighting', code: 'Lighting' },
   ];

   const [value, setValue] = useState([20, 50]);

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };

   const brands = ['Arhaus', 'Burrow', 'Castlery', 'Lumens', 'Sbosbo', 'Sundays', 'Velatheme', 'West Elm'];

   const products = [
     {
       name: "Plastic Dining Armchair",
       price: "$120.00",
       overPrice: "$200",
       image: image1,
       hoverImage: image1h,
     },
     {
       name: "Sacrificial Chair Design",
       price: "$260.00",
       overPrice: "$280",
       image: image2,
       hoverImage: image2h,
     },
     {
       name: "Sacrificial Chair Design",
       price: "$260.00",
       overPrice: "$280",
       image: image3,
       hoverImage: img3h,
     },
     {
       name: "Sacrificial Chair Design",
       price: "$260.00",
       overPrice: "$280",
       image: image4,
       hoverImage: image4h,
     },
     {
       name: "Sacrificial Chair Design",
       price: "$260.00",
       overPrice: "$280",
       image: image5,
       hoverImage: image5h,
     },
     {
       name: "Sacrificial Chair Design",
       price: "$260.00",
       overPrice: "$280",
       image: image6,
       hoverImage: image6h,
     },
     {
       name: "Sacrificial Chair Design",
       price: "$140.00",
       overPrice: "",
       image: image7,
       hoverImage: image7h,
     },
     {
       name: "Sacrificial Chair Design",
       price: "$130",
       overPrice: "",
       image: image8,
       hoverImage: image8h,
     },
     {
      name: "Sacrificial Chair Design",
      price: "$260.00",
      overPrice: "$280",
      image: image2,
      hoverImage: image2h,
    },
    {
      name: "Sacrificial Chair Design",
      price: "$260.00",
      overPrice: "$280",
      image: image3,
      hoverImage: img3h,
    },
    {
      name: "Sacrificial Chair Design",
      price: "$260.00",
      overPrice: "$280",
      image: image4,
      hoverImage: image4h,
    },
    {
      name: "Sacrificial Chair Design",
      price: "$260.00",
      overPrice: "$280",
      image: image1,
      hoverImage: image1h,
    },
   ];

   return (
     <Box>
       <Container>
         <Grid container spacing={2}>
           {/* First Column (Sidebar) */}
           <Grid item xs={12} sm={6} md={4} xl={2} sx={{ display: { xs: 'none', md: 'block' } }}>
             <Box>
               <Typography sx={{ paddingBottom: '30px', fontWeight: '700', fontSize: '20px' }}>Category</Typography>
               <Typography sx={{ paddingBottom: '15px' }}>Furniture</Typography>
               <Typography sx={{ paddingBottom: '15px' }}>Kitchen things</Typography>
               <Typography sx={{ paddingBottom: '15px' }}>Decor art</Typography>
               <Typography sx={{ paddingBottom: '15px' }}>Illumination</Typography>
               <Typography sx={{ paddingBottom: '50px' }}>New products</Typography>
             </Box>

             <Box>
               <Typography sx={{ paddingBottom: '30px', fontWeight: '700', fontSize: '20px' }}>Filter by color</Typography>
               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                 {colors.map((color) => (
                   <Box key={color.code} sx={{ position: 'relative', width: '40px', height: '40px', cursor: 'pointer' }}>
                     <Typography
                       variant="body2"
                       sx={{
                         position: 'absolute',
                         bottom: '-20px',
                         left: '50%',
                         transform: 'translateX(-50%)',
                         opacity: 0,
                         transition: 'opacity 0.3s',
                         '&:hover': { opacity: 1 },
                       }}
                     >
                       {color.name}
                     </Typography>
                     <Box
                       sx={{
                         width: '100%',
                         height: '100%',
                         backgroundColor: color.code,
                         borderRadius: '50%',
                         transition: 'transform 0.3s ease-in-out',
                         '&:hover': { transform: 'scale(1.1)' },
                       }}
                     />
                   </Box>
                 ))}
               </Box>
             </Box>

             <Box sx={{ marginTop: '50px', paddingBottom: '50px' }}>
               <Typography sx={{ fontWeight: '700', fontSize: '20px' }}>Filter price</Typography>
               <Slider
                 getAriaLabel={() => 'Price range'}
                 value={value}
                 onChange={handleChange}
                 valueLabelDisplay="auto"
                 getAriaValueText={(value) => `${value}°`}
               />
             </Box>

             <Box>
               <Typography sx={{ fontWeight: '700', fontSize: '20px', marginBottom: '16px' }}>Filter By Brand</Typography>
               {brands.map((brand) => (
                 <Button
                   key={brand}
                   sx={{
                     padding: '5px 10px',
                     margin: '3px',
                     backgroundColor: '#f0f0f0',
                     border: '1px solid #ccc',
                     borderRadius: '4px',
                     color: 'black',
                     textTransform: 'none',
                     '&:hover': {
                       backgroundColor: '#BD8448',
                       color: 'white',
                     },
                   }}
                 >
                   {brand}
                 </Button>
               ))}
             </Box>

             <Box sx={{ marginTop: '20px' }}>
               <Typography sx={{ fontWeight: '700', fontSize: '20px', marginBottom: '16px' }}>Filter By Tags</Typography>
               {tags.map((tag) => (
                 <Button
                   key={tag.code}
                   sx={{
                     padding: '5px 10px',
                     margin: '3px',
                     backgroundColor: '#f0f0f0',
                     border: '1px solid #ccc',
                     borderRadius: '4px',
                     color: 'black',
                     textTransform: 'none',
                     '&:hover': {
                       backgroundColor: '#BD8448',
                       color: 'white',
                     },
                   }}
                 >
                   {tag.name}
                 </Button>
               ))}
             </Box>
             <Box>
               <ProductImageForShopPageSideBar img={img1} name={"Plastic Dining Armchair"} newprice={"$120.00"} price={"$200.00"}/>
               <ProductImageForShopPageSideBar img={img2} name={"Sacrificial Chair Design"} newprice={"$260.00"} price={"$280.00"}/>
               <ProductImageForShopPageSideBar img={img3} name={"Sacrificial Chair Design"} newprice={"$170.00"}/>
               <ProductImageForShopPageSideBar img={img4} name={"Sacrificial Chair Design"} newprice={"$150.00"} price={"$180.00"}/>
             </Box>

           </Grid>

           {/* Second Column (Product List) */}
           <Grid item xs={12} sm={12} md={8} xl={10}>
             <ProductImageComponent products={products}/>
           </Grid>
         </Grid>
       </Container>
     </Box>
   ); 
}

export default MainGrid;
