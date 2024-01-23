import { Toolbar, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../assets/fakestoreLogo.png";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import MobileNavDrawer from "../MobileNavDrawer/index";
import ShoppingCart from "../ShoppingCart";

type Page = {
  title: string;
  href: string;
};

const pages: Page[] = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/products" },
];

export default function NavBar() {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

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
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
        }}
      >
        <Toolbar disableGutters>
          <Box sx={{ marginRight: 4, display: { sm: "none", lg: "flex" } }}>
            <img src={logoImg} alt="" height={50} />
          </Box>

          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "none", lg: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              alignItems: "center",
            }}
          >
            FAKE STORE biiig
          </Typography>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <Box>
              <MobileNavDrawer />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: 9,
                right: 7,
                [theme.breakpoints.down("sm")]: {
                  top: 5,
                  left: 1000,
                },
              }}
            >
              <Box>
                <ShoppingCart />
              </Box>
            </Box>
          </Box>
          <Box sx={{ marginRight: 4, display: { sm: "none", md: "none" } }}>
            <img src={logoImg} alt="" height={50} />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", lg: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              alignItems: "center",
              justifyContent: "center",
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
              <NavLink
                key={index}
                to={page.href}
                style={{ textDecoration: "none" }}
              >
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
