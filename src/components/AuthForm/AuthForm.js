import { useContext, useState } from "react";
import { AuthContext } from "./authFunctions/AuthContextProvider";
import {
  signIn,
  login,
  logout,
  signInWithGoogle,
} from "./authFunctions/authFunctions";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import styles from "./AuthForm.module.css";
// import CustomInput from "../UI/inputs/CustomInput";
import Loader from "../UI/loader/Loader";

const AuthForm = () => {
  const { authState } = useContext(AuthContext);

  const [isLoginForm, setIsLoginForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const googleSignInHandler = async () => {
    setIsLoading(true);
    await signInWithGoogle();
    setIsLoading(false);
  };

  const backHandler = () => {
    navigate("/");
  };

  const logoutHandler = async () => {
    await logout();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(8, "Must be 8 letters min")
          .max(20, "Too long!")
          .required("Required"),
      })}
      onSubmit={async ({ email, password }) => {
        if (isLoginForm) {
          setIsLoading(true);
          await signIn(email, password);
          setIsLoading(false);
        } else {
          setIsLoading(true);
          await login(email, password);
          setIsLoading(false);
        }
      }}
    >
      <>
        {!isLoading & !authState.loading ? (
          <Form className={styles.form}>
            <label htmlFor="email">Email Address</label>
            <Field
              name="email"
              type="email"
              // component={CustomInput}
              placeholder="example@gmail.com"
              style={styles.someField}
            />
            <ErrorMessage name="email" component="label" />
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" placeholder="password" />
            <ErrorMessage
              name="password"
              component="label"
              className={styles.errorMessage}
            />
            <button type="submit">Submit</button>
            <button onClick={googleSignInHandler} type="button">
              LogIn with google
            </button>
            <p
              onClick={() => {
                setIsLoginForm((prev) => !prev);
              }}
            >
              {isLoginForm ? <>Switch to Log In</> : <>Switch to Sign In</>}
            </p>
            <button onClick={backHandler} type="button">
              Back to HomePage
            </button>
            <button onClick={logoutHandler} type="button">
              Logout
            </button>
          </Form>
        ) : (
          <Loader />
        )}
      </>
    </Formik>
  );
};

export default AuthForm;
