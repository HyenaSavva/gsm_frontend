import { Card, Avatar, Switch, Carousel } from "antd";
import { FolderViewOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { storage } from "../../db";
import { ref, getDownloadURL } from "firebase/storage";
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "./PortfolioCard.module.css";
import { useNavigate } from "react-router-dom";

const PortfolioCard = ({ card }) => {
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState(card.imagesRefs);
  const navigate = useNavigate();

  const { Meta } = Card;

  useEffect(() => {
    const fetchImg = async () => {
      const refs = card.imagesRefs.map((imgRef) =>
        getDownloadURL(ref(storage, imgRef))
      );
      const images = await Promise.all(refs);
      setImg(images);
    };

    if (card.imagesRefs.length) {
      fetchImg();
    }
  }, []);

  const handleViewButton = ({ cardId }) => {
    navigate(`/project/:${cardId}`);
  };

  return (
    <Card
      loading={loading}
      style={{
        width: 400,
        height: 740,
      }}
      className={styles.card}
      bordered={true}
      hoverable
      cover={
        <Carousel dotPosition="bottom" style={{ height: "600px" }}>
          <div className={styles.cardImageWrapper}>
            {img.map((image) => (
              <LazyLoadImage
                key={image}
                draggable={false}
                className={styles.cardImage}
                alt={card.title}
                src={image}
              />
            ))}
          </div>
        </Carousel>
      }
      actions={[
        <FolderViewOutlined
          onClick={() => handleViewButton({ cardId: card.projectId })}
        />,
      ]}
    >
      <Meta
        title={card.title}
        description={<div>Updated at: {card.updatedAt}</div>}
      />
    </Card>
  );
};

export default PortfolioCard;
