import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [token, setToken] = useState(null);

  const login = (email, password) => {
    if (email === "mm@mm.mm" && password === "123456") {
      setToken("123456789")
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        token
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
