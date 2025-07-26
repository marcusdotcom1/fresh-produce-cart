import React, { createContext, useContext, useState } from 'react';
// import Cookies from 'js-cookie'; // Uncomment when you switch to cookie-based storage

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
      const newUser = {
        id: '1',
        email,
        name: email.split('@')[0],
        token: 'fake-jwt-token'
      };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));

      // ✅ Cookie token logic (for later)
      // Cookies.set('token', newUser.token, { expires: 7 }); // 7 days
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email, password, name) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const newUser = {
        id: '1',
        email,
        name: name || email.split('@')[0],
        token: 'fake-jwt-token'
      };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));

      // ✅ Cookie token logic (for later)
      // Cookies.set('token', newUser.token, { expires: 7 });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');

    // ✅ Cookie token removal
    // Cookies.remove('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
