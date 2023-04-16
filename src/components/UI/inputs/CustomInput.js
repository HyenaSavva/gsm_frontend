import styles from "./CustomInput.module.css";

function CustomInput(props) {
  return <input {...props} className={styles.CustomInput} />;
}

export default CustomInput;
