import HomeIcon from "@mui/icons-material/Home";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Icon,
  IconButton,
  List,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Anchor = "top" | "left" | "bottom" | "right";

type Page = {
  title: string;
  href: string;
  icon: ReactNode;
};

const pages: Page[] = [
  { title: "Home", href: "/", icon: <HomeIcon /> },
  { title: "Products", href: "/products", icon: <Inventory2Icon /> },
];

export default function MobileNavDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const theme = useTheme();
  const list = (anchor: Anchor) => (
    <Box
      sx={{
        marginLeft: 5,
        marginTop: 5,
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        [theme.breakpoints.down("sm")]: {
          width: "80vw",
        },
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map((page, index) => (
          <ListItem
            key={index}
            sx={{
              my: 4,
              color: "purple",
              textDecoration: "none",
            }}
          >
            <NavLink
              to={page.href}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Icon>{page.icon}</Icon>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 800,
                  color: theme.palette.primary.dark,
                }}
                textAlign="center"
              >
                {page.title}
              </Typography>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          flexGrow: 0,
        }}
      >
        <Box>
          <IconButton
            size="large"
            color="inherit"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </>
  );
}
