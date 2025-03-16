import React, { useState } from "react";
import { Box, Container, Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // for navigation
import Herosection from "./Herosection";
import GetDiscount from "../Global/GetDiscount";
import Footer from "./Footer";
import LoadMoreBtn from "./LoadMoreBtn";

function LogIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate(); // Hook to navigate to different routes

  // Log In function
  const Log_In = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCWL9er_DHjJTyoNYUgKI1uYhVx4anIy3U`,
        {
          email,
          password: pass,
          returnSecureToken: true,
        }
      )
      .then((res) => {
        // If login is successful, store the token in sessionStorage
        sessionStorage.setItem("token", res.data.idToken); // Store token in sessionStorage

        // Redirect to the home page
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        alert(err.response?.data?.error?.message || "An error occurred");
      });
  };

  return (
    <Box>
    <Herosection Name={"LogIn"} Home={"Home"}/>
      <Container>
      <Box sx={{textAlign: "center", margin: "30px 0px 50px 0px "}}>  
        <h1 style={{fontSize: "50px"}}>Log In : </h1>
      </Box>
        <form onSubmit={Log_In}>
          <Box>
            <label style={{fontSize: "20px"}}>Email: </label>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              margin="normal"
              style={{marginBottom: "50px"}}
            />


            <label style={{fontSize: "20px"}}>Password: </label>
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Box> 
       <Box sx={{display: "flex", justifyContent: "space-between", margin: "20px 0px 0px 10px"}}>
       <Button
            type="submit"
            sx={{
              padding: "5px 40px",
              color: "#fff",
              backgroundColor: "#323232",
              "&:hover": {
                backgroundColor: "#FB991C",
                color: "#fff",
              },
                whiteSpace: "nowrap"
            }}
          >
            Log In
          </Button>
          <Button
            sx={{
              padding: "5px 40px",
              color: "black",
              borderBottom: "1px solid black",
            }}
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
       </Box>
        </form>
        <GetDiscount/>
      </Container>
        <Footer/>
    </Box>
  );
}

export default LogIn;
