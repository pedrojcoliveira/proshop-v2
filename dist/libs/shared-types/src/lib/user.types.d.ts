export interface User {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    createdAt?: string;
    updatedAt?: string;
}
export interface UserLogin {
    email: string;
    password: string;
}
export interface UserRegister extends UserLogin {
    name: string;
}
export interface UserProfile extends User {
    token?: string;
}
export interface AuthState {
    userInfo: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}
