import { ReactNode, createContext, useContext, useState } from "react";

type CartItem = {
  id: number;
  quantity: number;
  title: string;
  price: string;
  category?: string;
  description?: string;
  image: string;
};

// TODO: Check Types

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  addToCart: (item: CartItem) => void;
  increaseCartQuantity: any;
  decreaseCartQuantity: any;
  removeFromCart: any;
  clearCart: any;
  cartQuantity: number;
  getCartItemQuantity: any;
  setCartItems: any;
  getCartTotalCost: any;
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

  const getCartItemQuantity = (id: number) => {
    const itemQuantity = cartItems.find((item) => item.id === id)?.quantity;

    if (itemQuantity === undefined) {
      return 0;
    }

    return itemQuantity;
  };

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

  const removeFromCart = (id: number) => {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
  };

  const increaseCartQuantity = (id: number) => {
    const itemQuantity = getCartItemQuantity(id);

    if (itemQuantity >= 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  };

  const decreaseCartQuantity = (id: number) => {
    const itemQuantity = getCartItemQuantity(id);

    if (itemQuantity === 1) {
      removeFromCart(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const getCartTotalCost = () => {
    let totalCost = 0;

    cartItems.map((item) => (totalCost += item.quantity * Number(item.price)));

    return totalCost;
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Use local storage maybe ?

  return (
    <ShoppingCartContext.Provider
      value={{
        addToCart,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        getCartItemQuantity,
        clearCart,
        setCartItems,
        cartItems,
        cartQuantity,
        getCartTotalCost,
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
