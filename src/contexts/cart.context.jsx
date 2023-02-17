import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {

    // Find if cart items contain productToAdd
    const existingCartItem = cartItems.find( cartItem => cartItem.id === productToAdd.id);

    // If Found increment quantity
    if(existingCartItem){
        return cartItems.map( cartItem => 
            cartItem.id === productToAdd.id 
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    // return new array with modified cartItems/ new cart item
    return [...cartItems, {...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find CartItem to remove
  const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToRemove.id);

  // check if quantity is equal to one, if yes remove the item from a cart
  if (existingCartItem.quantity === 1){
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  // return back cart items with matching cart item and with a reduced qulity
  return cartItems.map( cartItem => 
    cartItem.id === cartItemToRemove.id 
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
  ); 
}

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount ] = useState('');
  const [cartTotal, setCartTotal ] = useState('');


  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(count);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  }

  const clearItemFromCart = (productToRemove) => {
    setCartItems(clearCartItem(cartItems, productToRemove));
  }
  
  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart, cartTotal };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};