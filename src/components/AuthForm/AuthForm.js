import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupValidator } from "./authFunctions/utils";
import { signIn, login, signInWithGoogle } from "./authFunctions/authFunctions";

import { LockOutlined, UserOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import styles from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const changeLoginForm = (e) => {
    e.preventDefault();
    setIsLoginForm((prev) => !prev);
  };

  const googleSignInHandler = async () => {
    setIsLoading(true);
    await signInWithGoogle();

    setIsLoading(false);
    navigate("/");
  };

  const onSubmitHandler = async ({ Email, Password, remember }) => {
    if (isLoginForm) {
      setIsLoading(true);
      const user = await login(Email, Password);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      await signIn(Email, Password);
      setIsLoading(false);
    }
    navigate("/");
  };

  return (
    <Form
      form={form}
      name="form"
      className={styles.loginForm}
      initialValues={{ remember: true }}
      onFinish={onSubmitHandler}
      size="large"
    >
      <Form.Item name="Email" rules={[yupValidator]}>
        <Input prefix={<UserOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item name="Password" rules={[yupValidator]}>
        <Input.Password
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a className={styles.loginFormForgot} href="/">
          Forgot password
        </a>
      </Form.Item>
      <Form.Item>
        <Button
          loading={isLoading}
          type="primary"
          htmlType="submit"
          className={styles.loginFormButton}
        >
          {isLoginForm ? <>Log in</> : <>Sign In</>}
        </Button>
        <Button
          loading={isLoading}
          type="default"
          htmlType="button"
          onClick={googleSignInHandler}
          icon={!isLoading ? <GoogleOutlined /> : null}
          className={styles.loginFormButton}
        >
          <>Log in with Google</>
        </Button>
        {isLoginForm ? (
          <>
            You have no an account?{" "}
            <a onClick={changeLoginForm} href="/">
              Register now!
            </a>
          </>
        ) : (
          <>
            You have already an account?{" "}
            <a onClick={changeLoginForm} href="/">
              Login now!
            </a>
          </>
        )}
      </Form.Item>
    </Form>
  );
};

export default AuthForm;
