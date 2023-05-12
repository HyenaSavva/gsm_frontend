import { useState, useMemo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Card, Tooltip } from "antd";
import { Draggable } from "react-beautiful-dnd";

import { InfoCircleOutlined, LinkOutlined } from "@ant-design/icons";
import styles from "./CustomCard.module.css";

const CustomCard = ({ card, index }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const { Meta } = Card;

  const momoizedActions = useMemo(
    () => [
      <Tooltip title="Link spre produs" mouseEnterDelay="1.5">
        <LinkOutlined key="setting" />
      </Tooltip>,
      <Tooltip title="Descrierea produsului" mouseEnterDelay="1.5">
        <InfoCircleOutlined
          key="edit"
          onClick={() => setIsDescriptionOpen((prev) => !prev)}
        />
      </Tooltip>,
    ],
    [isDescriptionOpen]
  );

  const memoizedCard = useMemo(
    () => (
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
        actions={momoizedActions}
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
    ),
    [card, isDescriptionOpen]
  );

  return (
    <Draggable draggableId={card.itemId} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {memoizedCard}
        </div>
      )}
    </Draggable>
  );
};

export default CustomCard;
