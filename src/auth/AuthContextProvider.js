import { createContext, useEffect, useState } from "react";
import { auth } from "db";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "store/store";
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

  onAuthStateChanged(auth, async (user) => {
    if (authState.loading) {
      const token = await auth.currentUser?.getIdTokenResult();
      const newAuthState = {
        loading: false,
        loggedIn: Boolean(user),
        token,
        userData: { ...user?.providerData[0] },
      };

      setAuthState((prevState) => ({ ...prevState, ...newAuthState }));
      dispatch(setUser(newAuthState));
    }
  });

  return (
    <AuthContext.Provider value={{ authState }}>
      {children}
    </AuthContext.Provider>
  );
};
