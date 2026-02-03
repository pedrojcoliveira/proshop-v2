import { CartItem, ShippingAddress } from './cart.types';
import { User } from './user.types';
export interface PaymentResult {
    id: string;
    status: string;
    update_time: string;
    email_address: string;
}
export interface Order {
    _id: string;
    user: User | string;
    orderItems: CartItem[];
    shippingAddress: ShippingAddress;
    paymentMethod: string;
    paymentResult?: PaymentResult;
    itemsPrice: number;
    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
    isPaid: boolean;
    paidAt?: string;
    isDelivered: boolean;
    deliveredAt?: string;
    createdAt: string;
    updatedAt?: string;
}
export interface OrdersState {
    orders: Order[];
    loading: boolean;
    error: string | null;
}
