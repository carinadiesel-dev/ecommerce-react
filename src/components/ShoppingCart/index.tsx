import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Badge, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import CartItem from "./CartItem";

type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const {
    cartQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
    cartItems,
  } = useShoppingCartContext();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 500,
        display: "grid",
        gap: 4,
        padding: 2,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      {cartItems &&
        cartItems.map((item, index) => {
          const quantity = getItemQuantity(item.id);
          const total = parseFloat(item.price) * Number(quantity);
          return (
            <CartItem
              id={item.id}
              image={item.image}
              productName={item.title}
              unitCost={item.price}
              quantity={quantity}
              total={total}
            />
          );
        })}
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            color="inherit"
            onClick={toggleDrawer("right", true)}
          >
            <Badge badgeContent={cartQuantity} color="info">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Box>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </>
  );
}
