import { ReactNode, createContext, useContext, useState } from "react";

type CartItem = {
  id: number;
  quantity: number;
  // title: string;
  // price: string;
  // category: string;
  // description: string;
  // image: string;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type Props = {
  children?: React.ReactNode;
};

export const ShoppingCartContext = createContext<ShoppingCartContext | null>(
  null
);

export const ShoppingCartContextProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: number) {
    // Find item with current id,
    // If the value is found,return the quantity
    // Else return default value of 0
    return cartItems.find((item) => item.id == id)?.quantity || 0;
  }

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
    <ShoppingCartContext.Provider value={{ getItemQuantity }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCartContext = () => {
  const context = useContext(ShoppingCartContext);

  if (context === null) {
    throw new Error(
      "useShoppingCartContext must be used within the useCartContextProvider"
    );
  }
  return context;
};
