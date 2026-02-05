import { CartItem, CartState } from './cart.types';

export interface CartContextType extends CartState {
  // Actions
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  
  // Computed
  itemCount: number;
  subtotal: number;
}
