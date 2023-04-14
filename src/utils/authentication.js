import { createContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../db";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email, password) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setIsAuthenticated(true);
      return userCredentials;
    } catch (err) {
      return err;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const authCheck = async (email, password) => {
  try {
    // return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    return err;
  }
};

export const createUser = async (email, password) => {
  try {
    // return await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    return err;
  }
};
