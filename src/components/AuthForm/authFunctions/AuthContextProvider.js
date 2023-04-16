import { createContext, useEffect, useState } from "react";
import { auth } from "../../../db";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    loading: true,
    loggedIn: false,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setAuthState({ loading: false, loggedIn: Boolean(user) });
    });
  }, []);
  console.log("Logged in status -", authState.loggedIn);
  return (
    <AuthContext.Provider value={{ authState }}>
      {children}
    </AuthContext.Provider>
  );
};
