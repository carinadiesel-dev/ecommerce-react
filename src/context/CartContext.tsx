import { createContext, useContext, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

type CartContextType = {
  cartItems: Product[];
};

type Props = {
  children?: React.ReactNode;
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState([]);

  // Adding items to cart
  // Check if item is already in cart
  // If it is,increase the item quantity
  // If it isn't, add item

  // Removing items from cart
  // Check if the item is in the cart
  // If it is,check quantity
  // If quantity === 1,remove item from cart
  // If quantity > 1,reduce quantity by 1

  // Clearing Cart
  // Set cart to empty array

  // Getting Cart Total
  // Add prices of all items. Possibly using a reducer ?

  // Use local storage maybe ?

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error(
      "useCartContext must be used within the useCartContextProvider"
    );
  }
  return context;
};
