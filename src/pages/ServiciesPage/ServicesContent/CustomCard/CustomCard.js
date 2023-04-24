import { useState } from "react";

import { Card, Tooltip } from "antd";
import { InfoCircleOutlined, LinkOutlined } from "@ant-design/icons";
import styles from "./CustomCard.module.css";

const CustomCard = ({ card }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const { Meta } = Card;

  return (
    <Card
      key={card.src}
      size="small"
      hoverable
      bordered={false}
      className={styles.card}
      cover={
        !isDescriptionOpen ? (
          <img alt="example" src={card.src} className={styles.image} />
        ) : null
      }
      actions={[
        <Tooltip title="Link spre produs" mouseEnterDelay="0.8">
          <LinkOutlined key="setting" onClick={() => console.log("setting")} />
        </Tooltip>,
        <Tooltip title="Descrierea produsului" mouseEnterDelay="0.8">
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
          description={card.description + " lei"}
          className={styles.meta}
        />
      ) : (
        <Meta description={card.title} className={styles.description}></Meta>
      )}
    </Card>
  );
};

export default CustomCard;
