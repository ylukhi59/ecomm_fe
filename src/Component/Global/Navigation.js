import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Drawer,
  ClickAwayListener,
  Menu,
  MenuItem,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import logo from "../../Assets/Images/logo_dark.svg";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const handleClickAway = () => setDrawerOpen(false);
  const handleMenuOpen = (event) => setMenuAnchor(event.currentTarget);
  const handleMenuClose = () => setMenuAnchor(null);
  const handleMobileMenuOpen = (event) => setMobileMenuAnchor(event.currentTarget);
  const handleMobileMenuClose = () => setMobileMenuAnchor(null);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "Product", path: "/product" },
    { title: "Collection", path: "/collection" },
    { title: "Blog", path: "/blog" },
    { title: "Pages", path: "/page" },
  ];

  const authItems = [
    { title: "Log In", path: "/login" },
    { title: "Register", path: "/register" },
    { title: "Wishlist", path: "/Wishlist" },
  ];

  return (
    <Box>
      <Container>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={6} sm={4} display="flex" alignItems="center">
            <img src={logo} width={150} alt="Logo" />
          </Grid>
          <Grid item xs={6} sm={8} display="flex" alignItems="center" justifyContent="flex-end">
            <IconButton onClick={handleDrawerToggle} sx={{ display: { xs: "block", sm: "none" } }}>
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}>
              {menuItems.map((menu, index) => (
                <Typography
                  key={index}
                  component="span"
                  onClick={() => navigate(menu.path)}
                  sx={{
                    color: "#A3A3A3",
                    cursor: "pointer",
                  }}
                >
                  {menu.title}
                </Typography>
              ))}
              <IconButton onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Drawer for Mobile Menu */}
      <ClickAwayListener onClickAway={handleClickAway}>
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
          <Box sx={{ width: 250, display: "flex", flexDirection: "column", padding: 2, height: "100%" }}>
            <IconButton onClick={handleDrawerToggle} sx={{ alignSelf: "flex-end" }}>
              <CloseIcon />
            </IconButton>

            {/* Main Menu Items */}
            <Box sx={{ flexGrow: 1 }}>
              {menuItems.map((menu, index) => (
                <Typography
                  key={index}
                  component="span"
                  onClick={() => {
                    navigate(menu.path);
                    setDrawerOpen(false);
                  }}
                  sx={{
                    padding: "10px 0",
                    cursor: "pointer",
                    borderBottom: "1px solid #ddd",
                    display: "block",
                  }}
                >
                  {menu.title}
                </Typography>
              ))}
            </Box>

            {/* Auth Links (Log In, Register, Wishlist) - Separate Column */}
            <Box sx={{ borderTop: "1px solid #ddd", paddingY: 2, textAlign: "center" }}>
              {authItems.map((item, index) => (
                <Typography
                  key={index}
                  component="span"
                  onClick={() => {
                    navigate(item.path);
                    setDrawerOpen(false);
                  }}
                  sx={{
                    padding: "10px 0",
                    cursor: "pointer",
                    display: "block",
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </Typography>
              ))}
            </Box>
          </Box>
        </Drawer>
      </ClickAwayListener>

      {/* Dropdown Menu */}
      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose}>
        <MenuItem onClick={() => navigate("/login")}>Sign in</MenuItem>
        <MenuItem onClick={() => navigate("/register")}>Register</MenuItem>
        <MenuItem onClick={() => navigate("/Wishlist")}>Wishlist</MenuItem>
        {/* <MenuItem onClick={handleMenuClose}>Wishlist</MenuItem> */}
      </Menu>

      {/* Mobile Dropdown Menu */}
      <Menu anchorEl={mobileMenuAnchor} open={Boolean(mobileMenuAnchor)} onClose={handleMobileMenuClose}>
        <MenuItem onClick={handleMobileMenuClose}>
          <SearchIcon sx={{ marginRight: 1 }} />
          Search
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <ShoppingBagIcon sx={{ marginRight: 1 }} />
          Cart(0)
        </MenuItem>
        <MenuItem onClick={() => navigate("/login")}>Sign in</MenuItem>
        <MenuItem onClick={() => navigate("/register")}>Register</MenuItem>
        <MenuItem onClick={() => navigate("/Wishlist")}>Wishlist</MenuItem>
        {/* <MenuItem onClick={handleMobileMenuClose}>Wishlist</MenuItem> */}
      </Menu>
    </Box>
  );
}

export default Navigation;

