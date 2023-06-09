import { Image } from "antd";
import CustomImage from "components/CustomImage";

import styles from "./ImageGroup.module.css";
import { useEffect, useState } from "react";

const ImageGroup = ({ item, images }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (item && images) ?? setLoading(false);
  }, [item, images]);

  return (
    <Image.PreviewGroup
      preview={{
        onChange: (current, prev) => {},
      }}
    >
      <div className={styles.imagesGroup}>
        {images?.map((src, index) => {
          return (
            <CustomImage
              key={index}
              src={src}
              width={300}
              height={280}
              loading={loading}
            />
          );
        })}
      </div>
    </Image.PreviewGroup>
  );
};

export default ImageGroup;
