import { useState, useEffect, ReactNode } from 'react';
import { CartItem, ShippingAddress } from '@proshop/shared-types';
import CartContext from './CartContext';

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>('');

  // Load from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    const storedShipping = localStorage.getItem('shippingAddress');
    const storedPayment = localStorage.getItem('paymentMethod');

    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    if (storedShipping) {
      setShippingAddress(JSON.parse(storedShipping));
    }
    if (storedPayment) {
      setPaymentMethod(storedPayment);
    }
  }, []);

  // Persist to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (shippingAddress) {
      localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress));
    }
  }, [shippingAddress]);

  useEffect(() => {
    if (paymentMethod) {
      localStorage.setItem('paymentMethod', paymentMethod);
    }
  }, [paymentMethod]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i._id === item._id);

      if (existingItem) {
        // Update quantity
        return prevItems.map((i) =>
          i._id === item._id ? { ...i, qty: i.qty + item.qty } : i
        );
      } else {
        // Add new item
        return [...prevItems, item];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === productId ? { ...item, qty: quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setShippingAddress(null);
    setPaymentMethod('');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  };

  // Computed values
  const itemCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const itemsPrice = Number(subtotal.toFixed(2));
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = Number((0.15 * itemsPrice).toFixed(2));
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const value = {
    cartItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
