import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Badge, Button, IconButton, Typography, useTheme } from "@mui/material";
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
    clearCart,
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
  const theme = useTheme();

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        position: "relative",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 500,
        display: "grid",
        gap: 2,
        padding: 4,
      }}
      role="presentation"
    >
      <Typography
        sx={{
          fontSize: "5rem",
          fontWeight: 600,
          lineHeight: "5.5rem",
          color: theme.palette.primary.dark,
          paddingBottom: 4,
          textAlign: "center",
          textShadow: 4,
        }}
      >
        Cart
      </Typography>
      {cartItems &&
        cartItems.map((item, index) => {
          const quantity = getItemQuantity(item.id);
          const total = parseFloat(item.price) * Number(quantity);
          return (
            <CartItem
              key={index}
              id={item.id}
              image={item.image}
              productName={item.title}
              unitCost={item.price}
              // quantity={quantity}
              total={total}
            />
          );
        })}
      ;
      {!cartItems || cartItems.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "22px", color: theme.palette.primary.dark }}
          >
            Cart is empty
          </Typography>
        </Box>
      ) : (
        <Button variant="contained" size="large" onClick={() => clearCart()}>
          Clear Cart
        </Button>
      )}
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
