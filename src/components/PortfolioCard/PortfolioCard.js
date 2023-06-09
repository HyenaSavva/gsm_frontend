import { Card, Carousel } from "antd";
import { FolderViewOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "./PortfolioCard.module.css";
import { useNavigate } from "react-router-dom";
import { fetchImages } from "api";

const PortfolioCard = ({ card }) => {
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState(card.imagesRefs);
  const date = new Date(card.createdAt._seconds * 1000);
  const navigate = useNavigate();

  const { Meta } = Card;

  useEffect(() => {
    setTimeout(() => {
      // for loading demonstration (will be removed)
      const fetchImg = async () => {
        const images = await fetchImages(card.imagesRefs);
        setImg(images);
        setLoading(false);
      };

      if (card.imagesRefs.length) {
        fetchImg();
      }
    }, [500]);
  }, [card.imagesRefs]);

  const handleViewButton = ({ cardId }) => {
    navigate(`/project/${cardId}`);
  };

  return (
    <Card
      loading={loading}
      className={styles.card}
      bordered={true}
      cover={
        <Carousel dotPosition="bottom" autoplay autoplaySpeed={4000}>
          {img.map((image, index) => (
            <LazyLoadImage
              effect="blur"
              key={index}
              draggable={false}
              wrapperClassName={styles.cardImage}
              alt={card.title}
              src={image}
            />
          ))}
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
        description={<div>Updated at: {date.toLocaleString()}</div>}
      />
    </Card>
  );
};

export default PortfolioCard;
