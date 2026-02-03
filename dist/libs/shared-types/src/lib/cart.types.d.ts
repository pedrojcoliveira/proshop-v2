export interface CartItem {
    _id: string;
    name: string;
    image: string;
    price: number;
    countInStock: number;
    qty: number;
}
export interface ShippingAddress {
    address: string;
    city: string;
    postalCode: string;
    country: string;
}
export interface CartState {
    cartItems: CartItem[];
    shippingAddress: ShippingAddress | null;
    paymentMethod: string;
    itemsPrice: number;
    shippingPrice: number;
    taxPrice: number;
    totalPrice: number;
}
