import BackgroundImg from "../../../static/Background.png";
import { Carousel } from "antd";

import styles from "./Background.module.css";

const Background = () => {
  return (
    <div className={styles.background}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${BackgroundImg})` }}
      />
      <div className={styles.hero}>
        <section>
          <span>Soluții pentru</span>
          <span className={styles.arrow} />
          <div className={styles.carousel}>
            <Carousel
              dots={false}
              autoplay
              autoplaySpeed={2000}
              dotPosition="left"
            >
              <span>Sisteme de securizare</span>
              <span>Sisteme antifracție</span>
              <span>Automatizări porți</span>
              <span>Interfoane și video-interfoane</span>
              <span>Rețele curenți slabi</span>
              <span>Rețele fibră optică</span>
            </Carousel>
          </div>
        </section>
        <p>Instalarea și mentenanța sistemelor</p>
      </div>
    </div>
  );
};

export default Background;
