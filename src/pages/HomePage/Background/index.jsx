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
          <span>Solutii pentru</span>
          <span className={styles.arrow} />
          <div className={styles.carousel}>
            <Carousel
              dots={false}
              autoplay
              autoplaySpeed={2000}
              dotPosition="left"
            >
              <span>Sisteme de securizare</span>
              <span>Sisteme antifractie</span>
              <span>Automatizari porti</span>
              <span>Interfoane si video-interfoane</span>
              <span>Retele curenti slabi</span>
              <span>Retele fibra optica</span>
            </Carousel>
          </div>
        </section>
        <p>Instalarea si mentenanta sistemelor </p>
      </div>
    </div>
  );
};

export default Background;
