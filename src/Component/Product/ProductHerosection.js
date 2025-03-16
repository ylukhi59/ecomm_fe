import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useReducer, useState } from "react";
import sideimg1 from "../../Assets/Images/Product_1.jpg";
import sideimg2 from "../../Assets/Images/ProductSide.jpg";
import sideimg3 from "../../Assets/Images/ProductBack.jpg";
import BlackcolorImg from "../../Assets/Images/ProductBlack.jpg";
import skyBluecolorImg from "../../Assets/Images/ProductSkyBlue.jpg";
import yellowcolorImg from "../../Assets/Images/ProductYellow.jpg";
import img from "../../Assets/Images/ProductPageImage.jpg";
import css from "../../Assets/Css/Style.css";
import { yellow } from "@mui/material/colors";

function ProductHerosection() {
  const [borderColor1, setBorderColor1] = useState("#EFEFEF");
  const [borderColor2, setBorderColor2] = useState("#EFEFEF");
  const [borderColor3, setBorderColor3] = useState("#EFEFEF");

  const reducer = (state, action) => {
    switch (action) {
      case "inc":
        return { count: state.count + 1 };
      case "dec":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 1 });

  return (
    <Box>
      <Container>
        <h6 style={{ marginTop: "20px", fontWeight: 300 }}>
          Home / Best Seller{" "}
          <span style={{ fontWeight: 600 }}>/ Plastic Dining Armchair</span>
        </h6>
        <Grid container spacing={2} sx={{ marginTop: "30px" }}>
          <Grid item xl={6} md={6} sm={12}>
            <Grid container spacing={1}>
              <Grid
                item
                xl={2}
                lg={2}
                md={2}
                sm={12}
                sx={{
                  display: "flex",
                  flexDirection: {
                    xl: "column",
                    lg: "column",
                    md: "column",
                    sm: "row",
                  },
                  justifyContent: { sm: "center", xs: "center" },
                }}
              >
                <img
                  src={sideimg1}
                  style={{
                    maxWidth: "100%",
                    height: "100px",
                    display: "block",
                    border: `1px solid ${borderColor1}`,
                    transition: "border-color 0.3s ease",
                    marginBottom: "10px",
                  }}
                  onMouseEnter={() => setBorderColor1("orange")}
                  onMouseLeave={() => setBorderColor1("#EFEFEF")}
                />

                <img
                  src={sideimg2}
                  style={{
                    maxWidth: "100%",
                    height: "100px",
                    display: "block",
                    border: `1px solid ${borderColor2}`,
                    transition: "border-color 0.3s ease",
                    marginBottom: "10px",
                  }}
                  onMouseEnter={() => setBorderColor2("orange")}
                  onMouseLeave={() => setBorderColor2("#EFEFEF")}
                />

                <img
                  src={sideimg3}
                  style={{
                    maxWidth: "100%",
                    height: "100px",
                    display: "block",
                    border: `1px solid ${borderColor3}`,
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={() => setBorderColor3("orange")}
                  onMouseLeave={() => setBorderColor3("#EFEFEF")}
                />
              </Grid>
              <Grid
                item
                xl={10}
                lg={10}
                md={10}
                sm={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src={sideimg1}
                  style={{
                    width: "100%", // Make sure the large image takes full width of its container
                    height: "auto",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xl={6} md={6} sm={12}>
            <Box sx={{}}>
              <Typography sx={{ fontWeight: 600, fontSize: "24px" }}>
                Plastic Dining Armchair
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  // top: { xl: 60, lg: 60, md: 60, sm: 70, xs: 60 },
                  // left: 10,
                  position: "relative",
                }}
              >
                <Box>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#BC8246" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#BC8246" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#BC8246" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#BC8246" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#BC8246" }}
                  ></i>
                </Box>
                <Box>
                  <Typography
                    style={{
                      height: "20px",
                      width: "1px",
                      backgroundColor: "#E1E1E1",
                      position: "absolute",
                      top: { xl: "5px", md: "5px", sm: "5px", xs: "10px" },
                      left: "100px",
                    }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      top: {
                        xl: "5px",
                        lg: "5px",
                        md: "5px",
                        sm: "5px",
                        xs: "10px",
                      },
                      left: "118px",
                      whiteSpace: "nowrap",
                      fontSize: "12px",
                    }}
                  >
                    2 Review(s)
                  </Typography>
                  <Typography
                    style={{
                      height: "20px",
                      width: "1px",
                      backgroundColor: "#E1E1E1",
                      position: "absolute",
                      top: {
                        xl: "5px",
                        lg: "5px",
                        md: "5px",
                        sm: "5x",
                        xs: "10px",
                      },
                      left: "192px",
                    }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      top: {
                        xl: "5px",
                        lg: "5px",
                        md: "5px",
                        sm: "5px",
                        xs: "10px",
                      },
                      left: "200px",
                      whiteSpace: "nowrap",
                      fontSize: "12px",
                      cursor: "pointer",
                    }}
                  >
                    Add your review
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ marginTop: "30px" }}>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "500",
                  borderBottom: "1px solid rgb(206, 204, 204)",
                  paddingBottom: "20px",
                }}
              >
                $120.00
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "20px",
                borderBottom: "1px solid rgb(206, 204, 204)",
                paddingBottom: "20px",
              }}
            >
              <Typography sx={{ fontSize: "14px" }}>
                Typi non habent claritatem insitam, est usus legentis in iis qui
                facit eorum claritatem. Investigationes demonstraverunt lectores
                legere me lius quod ii legunt saepius. Claritas est etiam
                processus.
              </Typography>
              <Typography sx={{ marginTop: "20px" }}>
                - Light green crewneck sweatshirt.
              </Typography>
              <Typography>- Hand pockets. </Typography>
              <Typography>- Relaxed fit. </Typography>
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <Typography>Color : Teal</Typography>
              <img
                src={sideimg1}
                style={{
                  height: "30px",
                  width: "30px",
                  border: "2px solid #D8BB9D",
                  borderRadius: "50%",
                  margin: "3px",
                }}
              />
              <img
                src={BlackcolorImg}
                style={{
                  height: "30px",
                  width: "30px",
                  border: "2px solid rgb(206, 204, 204)",
                  borderRadius: "50%",
                  margin: "3px",
                }}
              />
              <img
                src={skyBluecolorImg}
                style={{
                  height: "30px",
                  width: "30px",
                  border: "2px solid rgb(206, 204, 204)",
                  borderRadius: "50%",
                  margin: "3px",
                }}
              />
              <img
                src={yellowcolorImg}
                style={{
                  height: "30px",
                  width: "30px",
                  border: "2px solid rgb(206, 204, 204)",
                  borderRadius: "50%",
                  margin: "3px",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
            

              <Grid item container >
                <Grid item xl={4} lg={4} md={4} sm={3} xs={6}>
              <Box
                sx={{
                  border: "1px solid ",
                  display: "inline-flex",
                  padding: "2px 20px",
                  marginTop: "30px",
                }}
              >
                <button
                  style={{
                    border: "none",
                    fontSize: "30px",
                    backgroundColor: "#FFFFFF",
                  }}
                  onClick={() => dispatch("dec")}
                >
                  -
                </button>
                <input
                  type="number"
                  min={1}
                  style={{
                    border: "none",
                    textAlign: "center",
                    fontSize: "25px",
                    width: "50px",
                  }}
                  value={state.count}
                  readOnly
                />
                <button
                  style={{
                    border: "none",
                    fontSize: "30px",
                    backgroundColor: "#FFFFFF",
                  }}
                  onClick={() => dispatch("inc")}
                >
                  +
                </button>
              </Box>
            
              </Grid>
              <Grid item xl={4} lg={4} md={4} sm={3} xs={6}>
                  <Button sx={{border: "2px solid black", padding: "7px 20px", marginTop: "30px", whiteSpace: "nowrap"}}>Add To Cart</Button>
              </Grid>
              <Grid item xl={4} lg={4} md={4} sm={3} xs={12}>
                <Button sx={{border: "2px solid black",marginTop: {xl: "30px",lg: "30px",md: "30px",sm: "30px",xs: "20px"}, padding: {xl: "7px 20px" , lg: "7px 20px",md: "7px 20px", sm: "7px 20px", xs: "10px 100px"}, whiteSpace: "nowrap"}}>Buy It Now</Button>
              </Grid>

              </Grid>
            </Box>

            <Box
              sx={{
                marginTop: "30px",
                borderBottom: "1px solid rgb(206, 204, 204)",
                paddingBottom: "20px",
              }}
            >
              <Typography>
                Availability : <span style={{ color: "blue" }}>In stock</span>
              </Typography>
              <Typography>
                SKU: <span>OST00143</span>
              </Typography>
              <Typography>
                Brand: <a href="#">Sbosbo</a>
              </Typography>
              <Typography>
                Tags:{" "}
                <a href="#" style={{ color: "black" }}>
                  Chair ,{" "}
                </a>
                <a href="#" style={{ color: "black" }}>
                  Classic ,{" "}
                </a>
                <a href="#" style={{ color: "black" }}>
                  Furniture
                </a>
              </Typography>
              <Typography>
                Share:{" "}
                <a
                  href="#"
                  style={{
                    fontSize: "15px",
                    padding: "2px 5px",
                    color: "black",
                  }}
                >
                  <i class="fa-brands fa-twitter"></i>
                </a>{" "}
                <a
                  href="#"
                  style={{
                    fontSize: "15px",
                    padding: "2px 5px",
                    color: "black",
                  }}
                >
                  <i class="fa-brands fa-facebook"></i>
                </a>{" "}
                <a
                  href="#"
                  style={{
                    fontSize: "15px",
                    padding: "2px 5px",
                    color: "black",
                  }}
                >
                  <i class="fa-brands fa-pinterest"></i>
                </a>{" "}
                <a
                  href="#"
                  style={{
                    fontSize: "15px",
                    padding: "2px 5px",
                    color: "black",
                  }}
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>{" "}
                <a
                  href="#"
                  style={{
                    fontSize: "15px",
                    padding: "2px 5px",
                    color: "black",
                  }}
                >
                  <i class="fa-regular fa-envelope"></i>
                </a>
              </Typography>
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <Typography>
                {" "}
                <i className="fa-solid fa-truck-fast"></i>{" "}
                <span style={{ fontSize: "14px" }}>stimated Delivery:</span>{" "}
                <span style={{ color: "#D09148", fontSize: "14px" }}>
                  26 - 04 February,2025
                </span>
              </Typography>
              <Typography sx={{ marginTop: "5px" }}>
                {" "}
                <i class="fa-solid fa-box"></i>{" "}
                <span style={{ fontSize: "14px" }}>
                  Free Shipping & Returns:{" "}
                </span>{" "}
                <span>
                  On all orders over{" "}
                  <span style={{ color: "#D09148", fontSize: "14px" }}>
                    {" "}
                    $500.00
                  </span>
                </span>
              </Typography>
            </Box>
            <Box sx={{ marginTop: "30px" }}>
              <img src={img} style={{ width: "100%" }} />
            </Box>
          </Grid>
        </Grid>
        <Grid sx={{ marginTop: "100px" }}>
          <Grid container>
            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={3}
              xs={6}
              sx={{ margin: "20px 0px" }}
            >
              <a href="#" style={{ whiteSpace: "nowrap" }}>
                Description
              </a>
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={3}
              xs={6}
              sx={{ margin: "20px 0px" }}
            >
              <a href="#" style={{ whiteSpace: "nowrap" }}>
                Additional
              </a>
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={3}
              xs={6}
              sx={{ margin: "20px 0px" }}
            >
              <a href="#" style={{ whiteSpace: "nowrap" }}>
                Shipping & return
              </a>
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={3}
              xs={6}
              sx={{ margin: "20px 0px" }}
            >
              <a href="#" style={{ whiteSpace: "nowrap" }}>
                Reviews
              </a>
            </Grid>
          </Grid>
          <Box sx={{ marginTop: "50px" }}>
            <Typography>
              Don’t ever play yourself. The weather is amazing, walk with me
              through the pathway of more success. Take this journey with me,
              Lion! The other day the grass was brown, now it’s green because I
              ain’t give up. Never surrende
            </Typography>
            <Box>
              <ul style={{ marginTop: "25px" }}>
                <li style={{ listStyle: "circle", marginTop: "2px" }}>
                  Claritas est etiam processus dynamicus
                </li>
                <li style={{ listStyle: "circle", marginTop: "2px" }}>
                  Qui sequitur mutationem consuetudium lectorum.
                </li>
                <li style={{ listStyle: "circle", marginTop: "2px" }}>
                  Claritas est etiam processus dynamicus.
                </li>
                <li style={{ listStyle: "circle", marginTop: "2px" }}>
                  Qui sequitur mutationem consuetudium lectorum
                </li>
                <li style={{ listStyle: "circle", marginTop: "2px" }}>
                  Claritas est etiam processus dynamicus.
                </li>
                <li style={{ listStyle: "circle", marginTop: "2px" }}>
                  Qui sequitur mutationem consuetudium lectorum
                </li>
              </ul>
            </Box>
            <Typography sx={{ marginTop: "20px" }}>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release.
            </Typography>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductHerosection;
