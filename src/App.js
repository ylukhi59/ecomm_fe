// import { Route, Routes , Router } from "react-router-dom";
// import Header from "./Component/Global/Header";
// import UpperHeader from "./Component/Global/Header";
// import Navigation from "./Component/Global/Navigation";
// import ProductImage from "./Component/Global/ProductImage";
// import ProductImageComponent from "./Component/Global/ProductImageComponent";
// import SignUp from "./Component/Global/SignUp";
// import Home_herosection from "./Component/Home/Home_herosection";
// import TrendingProduct from "./Component/Home/TrendingProduct";
// import Home from "./Pages/Home/Home";
// import Page from "./Pages/Pages/Page";
// import LogIn from "./Component/Global/LogIn";
// import Shop from "./Pages/Shop/Shop";
// import PrivateRoute from "./Component/Global/PrivateRoute";
// import Product from "./Pages/Product/Product";
// import Blog from '../src/Pages/Blog/Blog'
// // import Collection from "./Pages/Collection/Collection";



// function App() {
//   return (
//     <>
    
//       {/* <Home /> */}
//        {/* <Header/> */}
//       {/* <Navigation/>  */}
//         {/* <Home_herosection/> */}
//         {/* <ThreeImageWithText/> */}
//         {/* <TrendingProduct/> */}
//         {/* <ProductImageComponent/> */}
//         {/* <ProductImage/> */}
//         {/* <ProductImageComponent/> */}
//         {/* <Routes>     */}
//           {/* <Route path="/home" element={<Home/>}/> */}
//           {/* <Route path="/shop" element={<Shop/>}/> */}
//           {/* <Route path="/register" element={<SignUp/>}/> */}
//           {/* <Route path="/logIn" element={<LogIn/>}/> */}
//         {/* </Routes> */}


//         <Routes>  
//       <Route element={<PrivateRoute />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/product" element={<Product />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/page" element={<Page />} />
//         {/* <Route path="/collection" element={<Collection />} /> */}
//       </Route>
//       <Route path="/register" element={<SignUp />} />
//       <Route path="/login" element={<LogIn />} />
//     </Routes>


//     </>

//   );
// }

// export default App;


import { Route, Routes } from "react-router-dom";
import SignUp from "./Component/Global/SignUp";
import Home from "./Pages/Home/Home";
import Page from "./Pages/Pages/Page";
import LogIn from "./Component/Global/LogIn";
import Shop from "./Pages/Shop/Shop";
import PrivateRoute from "./Component/Global/PrivateRoute";
import Product from "./Pages/Product/Product";
import Blog from '../src/Pages/Blog/Blog'
import Collection from "./Pages/Collection/Collection";
import Wishlist from "./Pages/Wishlist/Wishlist";

function AppRoutes() {
  return (
    <Routes>  
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/page" element={<Page />} />
        <Route path="/Collection" element={<Collection/>}/>
        <Route path="/Wishlist" element={<Wishlist/>}/>
      </Route>
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}

export default AppRoutes;
