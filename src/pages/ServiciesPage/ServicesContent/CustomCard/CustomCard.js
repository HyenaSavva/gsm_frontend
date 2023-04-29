import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Card, Tooltip } from "antd";
import { InfoCircleOutlined, LinkOutlined } from "@ant-design/icons";
import styles from "./CustomCard.module.css";

const CustomCard = ({ card }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const { Meta } = Card;

  return (
    <Card
      key={card.itemId}
      size="small"
      hoverable
      bordered={false}
      className={styles.card}
      cover={
        !isDescriptionOpen ? (
          <LazyLoadImage
            alt="example"
            src={card.image}
            className={styles.image}
          />
        ) : null
      }
      actions={[
        <Tooltip title="Link spre produs" mouseEnterDelay="1.5">
          <LinkOutlined key="setting" />
        </Tooltip>,
        <Tooltip title="Descrierea produsului" mouseEnterDelay="1.5">
          <InfoCircleOutlined
            key="edit"
            onClick={() => setIsDescriptionOpen((prev) => !prev)}
          />
        </Tooltip>,
      ]}
    >
      {!isDescriptionOpen ? (
        <Meta
          title={card.title}
          description={card.price + " lei"}
          className={styles.meta}
        />
      ) : (
        <Meta description={card.title} className={styles.description}></Meta>
      )}
    </Card>
  );
};

export default CustomCard;
