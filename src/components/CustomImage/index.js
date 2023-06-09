import { Image } from "antd";

import styles from "./CustomImage.module.css";

const CustomImage = ({ width, height, src, placeholder, loading }) => {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      placeholder={<></>}
      rootClassName={styles.imageContainer}
      className={styles.image}
    />
  );
};

export default CustomImage;
