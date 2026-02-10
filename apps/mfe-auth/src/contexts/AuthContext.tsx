import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface AuthContextType {
  userInfo: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  loading: boolean;
  error: string | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  register: (data: { name: string; email: string; password: string }) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Carregar do localStorage no mount
  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUserInfo(JSON.parse(storedUser));
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  // Persistir no localStorage quando muda
  useEffect(() => {
    if (userInfo && token) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
    }
  }, [userInfo, token]);

  const login = async (credentials: { email: string; password: string }) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) throw new Error("Invalid credentials");
      const data = await response.json();
      setUserInfo(data);
      setToken(data.token);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: { name: string; email: string; password: string }) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Registration failed");
      const responseData = await response.json();
      setUserInfo(responseData);
      setToken(responseData.token);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
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
      const response = await fetch("/api/users/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Update failed");
      const updated = await response.json();
      setUserInfo(updated);
      setToken(updated.token || token);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Update failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider value={{
      userInfo, token,
      isAuthenticated: !!userInfo,
      isAdmin: userInfo?.isAdmin ?? false,
      loading, error,
      login, register, logout, updateProfile, clearError,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export default AuthContext;
