import React, { useState } from "react";
import {
  Box,
  Container,
  Menu,
  MenuItem,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import logo from "../../Assets/Images/logo_dark.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const [hoverSearch, setHoverSearch] = useState(false);
  const [hoverCart, setHoverCart] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleMouseEnter = (setHover) => () => setHover(true);
  const handleMouseLeave = (setHover) => () => setHover(false);

  const handleMenuOpen = (event) => setMenuAnchor(event.currentTarget);
  const handleMenuClose = () => setMenuAnchor(null);

  const handleMobileMenuOpen = (event) => setMobileMenuAnchor(event.currentTarget);
  const handleMobileMenuClose = () => setMobileMenuAnchor(null);

  const hoverStyle = (isHovered) => ({
    fontWeight: 400,
    transition: ".3s",
    color: isHovered ? "#FB991C" : "black",
    cursor: "pointer",
  });


  
  return (
    <Box>
      <Container>
        <Box
          sx={{
            padding: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo Section */}
          

          {/* Navigation Section */}
                 </Box>
      </Container>
    </Box>
  );
}

export default Header;



