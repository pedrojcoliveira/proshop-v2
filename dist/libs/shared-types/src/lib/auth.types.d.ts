import { User, UserLogin, UserRegister, AuthState } from './user.types';
export interface AuthContextType extends AuthState {
    login: (credentials: UserLogin) => Promise<void>;
    register: (data: UserRegister) => Promise<void>;
    logout: () => void;
    updateProfile: (data: Partial<User>) => Promise<void>;
    clearError: () => void;
}
