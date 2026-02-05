import { CartItem, CartState } from './cart.types';
export interface CartContextType extends CartState {
    addToCart: (item: CartItem) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    itemCount: number;
    subtotal: number;
}
