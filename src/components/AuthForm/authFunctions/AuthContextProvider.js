import { createContext, useEffect, useState } from "react";
import { auth } from "../../../db";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "../../../store/store";
import { useDispatch } from "react-redux";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const [authState, setAuthState] = useState({
    loading: true,
    loggedIn: false,
    token: null,
    userData: null,
  });

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const token = await auth.currentUser?.getIdTokenResult();
      const newAuthState = {
        loading: false,
        loggedIn: Boolean(user),
        token: user?.accessToken,
        userData: { ...user?.providerData[0] },
        isAdmin: token?.claims["admin"] ?? false,
      };

      setAuthState(newAuthState);
      dispatch(setUser(newAuthState));
    });
  }, [dispatch]);

  console.log("Auth State - ", authState);

  return (
    <AuthContext.Provider value={{ authState }}>
      {children}
    </AuthContext.Provider>
  );
};
