import React, { useState } from "react";
import { Box, Container, Button, TextField } from "@mui/material";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Herosection from "./Herosection";
import GetDiscount from "../Global/GetDiscount";
import Footer from "./Footer";

function SignUp() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const Register = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCWL9er_DHjJTyoNYUgKI1uYhVx4anIy3U`,
        {
          email,
          password: pass,
          returnSecureToken: true,
        }
      )
      .then((res) => {
        alert("Registration successful!");
        navigate("/login");
      })
      .catch((err) => {
        console.error(err);
        alert(err.response?.data?.error?.message || "An error occurred");
      });
  };

  return (
    <Box>
      <Herosection Name={"Create Account"} Home={"Home"}/>
      <Container>
      <Box>
        <h1 style={{textAlign: "center", margin: "50px 0px 50px 0px"}}>Create New Account</h1>
      </Box>
        <Box>
          <form onSubmit={Register}>
          <label style={{fontSize: "20px"}}>First Name</label>
            <Box>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                margin="normal"
                style={{marginBottom: "30px"}}
              />

          <label style={{fontSize: "20px"}}>Last Name</label>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                margin="normal"
                style={{marginBottom: "30px"}}

              />

          <label style={{fontSize: "20px"}}>Email</label>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                margin="normal"
                style={{marginBottom: "30px"}}

              />

          <label style={{fontSize: "20px"}}>Password</label>
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                variant="outlined"
                margin="normal"
                style={{marginBottom: "30px"}}

              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
                }}
              >
                Create
              </Button>
              <Button
                sx={{
                  padding: "5px 40px",
                  color: "black",
                  borderBottom: "1px solid black",
                }}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </Box>
          </form>
          <GetDiscount/>
        </Box>
      </Container>
      <Footer/>
    </Box>
  );
}

export default SignUp;
