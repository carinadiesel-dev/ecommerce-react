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
  clearCart: () => void;
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

  function increaseCartQuantity(id: number) {
    // Current list of items
    setCartItems((currentItems) => {
      // Check if there is an item in the cart with this id
      if (currentItems.find((item) => item.id === id) === null) {
        // If it isn't in cart,add it to the cart
        return [...currentItems, { id, quantity: 1 }];
      } else {
        // Map over items
        return currentItems.map((item) => {
          if (item.id === id) {
            // If item is in cart, increase quantity
            return { ...item, quantity: item.quantity++ };
          } else {
            // Return item as is
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    // Current list of items
    setCartItems((currentItems) => {
      // Check if there is an item in the cart with this id
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        // If it is in the cart, filter currentItems so the item matching the id is no longer in the list
        return currentItems.filter((item) => item.id !== id);
      } else {
        // Map over items
        return currentItems.map((item) => {
          if (item.id === id) {
            // If item is in cart, decrease quantity
            return { ...item, quantity: item.quantity - 1 };
          } else {
            // Return item as is
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  function clearCart() {
    return setCartItems([]);
  }

  // Getting Cart Total
  // Add prices of all items. Possibly using a reducer ?

  // Use local storage maybe ?

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        clearCart,
      }}
    >
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
