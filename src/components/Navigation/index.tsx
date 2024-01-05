import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { MenuItem, Toolbar, Tooltip, useTheme } from "@mui/material";
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

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElCart, setAnchorElCart] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenCartMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCart(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseCartMenu = () => {
    setAnchorElCart(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ marginRight: 4 }}>
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

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <NavLink to={page.href}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
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
            THE STORE
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
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Show Cart">
                <Button
                  sx={{
                    py: 1,
                    px: 3,
                    my: 1,
                    color: "white",
                    display: "flex",
                    gap: 1,
                    fontWeight: "bold",
                    border: ` 2px solid white`,
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.light,
                    },
                  }}
                  startIcon={<ShoppingCartIcon />}
                  onClick={handleOpenCartMenu}
                >
                  View Cart
                </Button>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElCart}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={Boolean(anchorElCart)}
                onClose={handleCloseCartMenu}
              >
                {cartItems.map((cartItem) => (
                  <MenuItem key={cartItem} onClick={handleCloseCartMenu}>
                    <Typography textAlign="center">{cartItem}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
