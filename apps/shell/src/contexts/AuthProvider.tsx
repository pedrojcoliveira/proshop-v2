import { useState, useEffect, ReactNode } from 'react';
import { User, UserLogin, UserRegister } from '@proshop/shared-types';
import AuthContext from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');
    const storedToken = localStorage.getItem('token');
    
    if (storedUser && storedToken) {
      setUserInfo(JSON.parse(storedUser));
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  // Persist to localStorage when user changes
  useEffect(() => {
    if (userInfo && token) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('userInfo');
      localStorage.removeItem('token');
    }
  }, [userInfo, token]);

  const login = async (credentials: UserLogin) => {
    try {
      setLoading(true);
      setError(null);

      // TODO: Replace with actual API call
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      setUserInfo(data.user);
      setToken(data.token);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: UserRegister) => {
    try {
      setLoading(true);
      setError(null);

      // TODO: Replace with actual API call
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const responseData = await response.json();
      setUserInfo(responseData.user);
      setToken(responseData.token);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUserInfo(null);
    setToken(null);
    setError(null);
  };

  const updateProfile = async (data: Partial<User>) => {
    try {
      setLoading(true);
      setError(null);

      // TODO: Replace with actual API call
      const response = await fetch('/api/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Update failed');
      }

      const updatedUser = await response.json();
      setUserInfo(updatedUser);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Update failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  const value = {
    userInfo,
    token,
    isAuthenticated: !!userInfo,
    isAdmin: userInfo?.isAdmin ?? false,
    loading,
    error,
    login,
    register,
    logout,
    updateProfile,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
