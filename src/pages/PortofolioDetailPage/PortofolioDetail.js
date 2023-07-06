import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ImageGroup from "components/ImageGroup";
import { fetchImages } from "api";
import { propertyData } from "utils/constants";

import styles from "./PortfolioDetail.module.css";

const PortfolioDetail = () => {
  const [item, setItem] = useState(null);
  const [images, setImages] = useState(null);
  const params = useParams(); //{params.projectId}
  const date = new Date(item?.createdAt._seconds * 1000);

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem("projects"));
    const selectedItem = projects.find(
      (project) => project.projectId === params.projectId
    );
    setItem(selectedItem);

    const fetchImg = async (item) => {
      const fetchedImages = await fetchImages(item.imagesRefs);
      setImages(fetchedImages);
    };

    if (selectedItem) {
      fetchImg(selectedItem);
    }
  }, [params.projectId]);

  return (
    <motion.div
      className={styles.portfolioDetailContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className={styles.mainColumn}>
        <div className={styles.gallery}>
          <ImageGroup item={item} images={images} />
        </div>
        {item ? (
          <>
            <div className={styles.infoContainer}>
              <div className={styles.mainInfo}>
                <h1>{item.title}</h1>
                <p>Instalat pe data de: {date.toLocaleDateString()}</p>
              </div>
            </div>
            <hr />

            <div className={styles.description}>
              <h2>Caracteristici</h2>
              <p>Tipul de securitate: {item.securityType}</p>
              <p>Tipul de cladire: {item.buildingType}</p>
              {item.buildingType &&
                propertyData[item.buildingType]?.map(
                  (property) =>
                    item[property.key] && (
                      <p key={property.key}>
                        {property.label}
                        {item[property.key]}
                      </p>
                    )
                )}
            </div>
            <hr />
            <div className={styles.location}>
              <h2>Descriere</h2>
              <p>{item?.description}</p>
            </div>
          </>
        ) : (
          <>Loading</>
        )}
      </div>
    </motion.div>
  );
};

export default PortfolioDetail;
