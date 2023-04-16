import AuthForm from "../../components/AuthForm/AuthForm";

// import BackgroundImg from "../../static/CamerasBackground.png";
import styles from "./AuthPage.module.css";

const AuthPage = () => {
  return (
    <main className={styles.mainBlock}>
      <div
        className={styles.background}
        // style={{ backgroundImage: `url(${BackgroundImg})` }}
      />
      <AuthForm />
    </main>
  );
};

export default AuthPage;
