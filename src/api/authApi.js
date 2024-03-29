import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "db";

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const userData = result.user;
    return {
      token,
      userData: { ...userData.providerData[0] },
      credential: { ...credential },
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    return { errorCode, errorMessage, email, credential };
  }
};

export const signIn = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return;
  } catch (err) {
    return err;
  }
};

export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return;
  } catch (err) {
    return err;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return;
  } catch (err) {
    return err;
  }
};
