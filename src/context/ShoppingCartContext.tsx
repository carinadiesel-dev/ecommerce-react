import { ReactNode, createContext, useContext, useState } from "react";

type CartItem = {
  id: number;
  quantity: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  addToCart: (item: CartItem) => void;
  // increaseCartQuantity: (id: number) => void;
  // decreaseCartQuantity: (id: number) => void;
  removeFromCart: (item: CartItem) => void;
  clearCart: () => void;
  cartQuantity: number;
  setCartItems: any;
  cartItems?: CartItem[];
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

  // returns total amount of items in cart
  const cartQuantity = cartItems?.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  // function getItemQuantity(id: number) {
  //   // Find item with current id,
  //   // If the value is found,return the quantity
  //   // Else return default value of 0
  //   return cartItems?.find((item) => item.id == id)?.quantity || 0;
  // }
  const getItemQuantity = (id: number) => {
    return cartItems?.find((item) => item.id == id)?.quantity || 0;
  };

  console.log(getItemQuantity);

  const addToCart = (item: CartItem) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // function increaseCartQuantity(id: number) {
  //   // Current list of items
  //   setCartItems((currentItems) => {
  //     // Map over items
  //     return currentItems?.map((item) => {
  //       if (item.id === id) {
  //         // If item is in cart, increase quantity
  //         return { ...item, quantity: item.quantity + 1 };
  //       } else {
  //         // Return item as is
  //         return item;
  //       }
  //     });
  //   });
  // }

  // function decreaseCartQuantity(id: number) {
  //   // Current list of items
  //   setCartItems((currentItems) => {
  //     // Check if there is an item in the cart with this id
  //     if (currentItems?.find((item) => item.id === id)?.quantity === 1) {
  //       // If it is in the cart, filter currentItems so the item matching the id is no longer in the list
  //       return currentItems?.filter((item) => item.id !== id);
  //     } else {
  //       // Map over items
  //       return currentItems?.map((item) => {
  //         if (item.id === id) {
  //           // If item is in cart, decrease quantity
  //           return { ...item, quantity: item.quantity - 1 };
  //         } else {
  //           // Return item as is
  //           return item;
  //         }
  //       });
  //     }
  //   });
  // }

  const removeFromCart = (item: CartItem) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
  };
  function clearCart() {
    return setCartItems([]);
  }

  // Getting Cart Total
  // Add prices of all items. Possibly using a reducer ?

  // Use local storage maybe ?

  return (
    <ShoppingCartContext.Provider
      value={{
        addToCart,
        getItemQuantity,
        // increaseCartQuantity,
        // decreaseCartQuantity,
        removeFromCart,
        clearCart,
        setCartItems,
        cartItems,
        cartQuantity,
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
