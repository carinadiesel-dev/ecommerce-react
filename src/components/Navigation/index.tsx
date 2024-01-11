import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem, Toolbar, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../assets/fakestoreLogo.png";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import ShoppingCart from "../ShoppingCart";

type Page = {
  title: string;
  href: string;
};

const pages: Page[] = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/products" },
];

const cartItems = ["Item1", "Item2"];

export default function NavBar() {
  const theme = useTheme();
  const { cartQuantity } = useShoppingCartContext();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.down("md")]: {
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <Toolbar disableGutters>
          <Box sx={{ marginRight: 4, display: { xs: "none", md: "flex" } }}>
            <img src={logoImg} alt="" height={50} />
          </Box>

          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FAKE STORE
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                textDecoration: "none",
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  <NavLink to={page.href} style={{ textDecoration: "none" }}>
                    <Typography sx={{ fontWeight: 800 }} textAlign="center">
                      {page.title}
                    </Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
            <Box
              sx={{
                position: "absolute",
                top: 9,
                right: 7,
                [theme.breakpoints.down("sm")]: {
                  top: 5,
                  left: 55,
                },
              }}
            >
              <Box>
                <ShoppingCart />
              </Box>
            </Box>
          </Box>
          <Box sx={{ marginRight: 4, display: { sm: "flex", md: "none" } }}>
            <img src={logoImg} alt="" height={50} />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FAKE STORE
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
              alignItems: "center",
              gap: 6,
            }}
          >
            {pages.map((page, index) => (
              <NavLink to={page.href} style={{ textDecoration: "none" }}>
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontWeight: "bold",
                    "&:hover": { color: theme.palette.secondary.light },
                  }}
                >
                  {page.title}
                </Button>
              </NavLink>
            ))}
            <ShoppingCart />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
