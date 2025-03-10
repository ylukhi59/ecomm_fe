
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import img1 from "../../Assets/Images/BlogSlider_1.jpg";
import img2 from "../../Assets/Images/BlogSlider_2.jpg";
import img3 from "../../Assets/Images/BlogSlider_3.jpg";
import img4 from "../../Assets/Images/BlogSlider_4.jpg";
import img5 from "../../Assets/Images/BlogSlider_5.jpg";
import img6 from '../../Assets/Images/BLogPageProductImage.jpg';
import SearchIcon from "@mui/icons-material/Search";

const blogData = [
  { img: img1, title: "Anteposuerit litterarum formas", date: "November 16, 2017" },
  { img: img2, title: "Anteposuerit litterarum formas", date: "November 16, 2017" },
  { img: img3, title: "Anteposuerit litterarum formas", date: "November 16, 2017" },
  { img: img4, title: "Anteposuerit litterarum formas", date: "November 16, 2017" },
  { img: img5, title: "Anteposuerit litterarum formas", date: "November 16, 2017" },
  { img: img1, title: "Anteposuerit litterarum formas", date: "November 16, 2017" },
];

function BlogProducts() {
  // State to track which post is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle visibility
  const toggleFullText = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid container item xl={9} lg={9} md={9} sm={12} xs={12} spacing={2}>
          {blogData.map((post, index) => (
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} key={index}>
              <Box>
                <Box>
                  <img src={post.img} style={{ maxWidth: "100%" }} alt={post.title} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                      margin: "10px 0px 2px 0px",
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "12px", margin: "0px 0px 5px 0px" }}
                  >
                    By <span style={{ color: "#BD8448" }}>mr.admin</span> /{" "}
                    <span>{post.date}</span>
                  </Typography>

                  <Typography
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: expandedIndex === index ? "none" : 3, // Limit to 3 lines
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      transition: "all 0.3s ease",
                      lineHeight: "22px",
                      fontSize: "14px",
                      color: "#606060",
                    }}
                  >
                    Diga, Koma and Torus are three kitchen utensils designed for
                    Ommo, a new design-oriented brand introduced at the Ambiente
                    show in February 2016. Minimalist approach, bright colors,
                    stainless steel and matte plastic, abstract shapes and curved
                    lines are the defining features of these products designed to
                    be extremely functional, user-friendly and fun. Diga is a
                    two-color melamine salad bowl where vegetables can be washed,
                    drained and served. The disk at the bottom of the bowl can be
                    turned counterclockwise to drain water when washing vegetables
                    and it can be turned clockwise to lock the drain and hold
                    condiments in the bowl when serving. Many desktop publishing
                    packages and web page editors now use Lorem Ipsum as their
                    default model text, and a search for 'lorem ipsum' will
                    uncover many web sites still in their infancy. Koma and Torus
                    are two tea infusers, each with an original design and a
                    concealed function. Koma has a round base and a long stainless
                    steel-trimmed handle which offers a comfortable grip and
                    allows the brushed steel cover to open and close at the touch
                    of a finger to easily fill and empty the infuser. The perfect
                    way to enjoy brewing tea. Torus is donut-shaped and can cling
                    to any cup. It is accompanied by a case that can contain up to
                    three different diffusers and can be used for dry storage of
                    loose tea.
                  </Typography>

                  <Box>
                    {/* Button to toggle full text */}
                    <Button
                      onClick={() => toggleFullText(index)}
                      style={{
                        padding: "13px 30px",
                        marginTop: "20px",
                        marginBottom: "20px",
                        backgroundColor: "#fff",
                      }}
                      sx={{
                        borderRadius: "0px",
                        border: "1px solid black",
                        color: "black",
                        "&:hover": {
                          borderColor: "#BD8448",
                          color: "#BD8448",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {expandedIndex === index ? "Read less" : "Read more"}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid item xl={3} lg={3} md={3} sm={12} xs={12} sx={{display: {xl: "block", lg: "block", md: "block", sm: "none" , xs: "none"}}}>
          <Box>
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              >
                <input
                  type="text"
                  placeholder="Search our blogs..."
                  style={{
                    border: "none",
                    outline: "none",
                    padding: "10px",
                    fontSize: "14px",
                    width: "90%",
                    borderRadius: "4px 0 0 4px",
                  }}
                />
                <IconButton
                  sx={{
                    padding: "10px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "0 4px 4px 0",
                  }}
                >
                  <SearchIcon sx={{ color: "#606060" }} />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "20px",
                  margin: "5px 0px 10px 15px",
                  cursor: "pointer",
                  "&:hover": { color: "#C28E57" },
                }}
              >
                Categories
              </Typography>
              <ul style={{ lineHeight: "", margin: "0px 0px 20px 0px" }}>
                {["Furniture", "Fashion", "Education", "Travel", "Construction", "Tech"].map((category) => (
                  <li
                    key={category}
                    style={{
                      listStyle: "unset",
                      color: "#626262",
                      padding: "4px 15px",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#C28E57";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#626262";
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
              <Box sx={{ margin: "50px 0px 10px 0px" }}>
                <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
                  Latest Posts
                </Typography>
                {Array(6).fill().map((_, index) => (
                  <Box key={index} sx={{ margin: "20px 0px 0px 0px" }}>
                    <Typography
                      sx={{ fontSize: "17px", fontWeight: "500", cursor: "pointer", "&:hover": { color: "#BD8448" } }}
                    >
                      Anteposuerit litterarum formas.
                    </Typography>
                    <Typography sx={{ fontSize: "13px", color: "#C7C7C7" }}>
                      November 16, 2017
                      <hr />
                    </Typography>
                  </Box>
                ))}
                <Box>
                  <img src={img6} alt="Blog Ad" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogProducts;