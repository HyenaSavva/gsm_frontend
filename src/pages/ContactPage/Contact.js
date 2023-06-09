import { useState } from "react";
import ModalForm from "components/ModalForm/ModalForm";
import { Modal, Button, Divider } from "antd";
import { motion } from "framer-motion";

import folder from "static/folder.png";
import chat from "static/chat.png";
import support from "static/support.png";
import styles from "./Contact.module.css";

const Contact = () => {
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handle = () => {
    setModal(!modal);
    setIsLoading(false);
  };

  return (
    <motion.div
      className={styles.contactMain}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.contactUs}>Contact Us</div>
      <section>
        <div className={styles.items}>
          <img src={support} alt="support" />
          <span className={styles.title}>Ajutor personal</span>
          <div className={styles.subtitle}>
            Descrieti ce probleme ati intampinat si ce intrebari aveti in
            privinta utilizarii site-ului
          </div>
          <div className={styles.description}>
            <ul className={styles.ulTitle}>
              <div>De Luni pana Vineri la orele 9:00 - 18:00</div>
              Pentru astfel de detalii va adresati aici:
              <li className={styles.text}>ghenadie.savva@gmail.com</li>
              <li className={styles.text}>0725496638</li>
            </ul>
          </div>
        </div>
        <div className={styles.items}>
          <img src={folder} alt="folder" />
          <span className={styles.title}>Descrieti case-ul</span>
          <div className={styles.subtitle}>
            Concretizati ce s-a intamplat si cum ati dat de aceasta problema
          </div>
          <div className={styles.description}>
            Expilicati situatia dumneavoastra, ce si cum s-a intamplat si ce a
            rezultat din eroare.
          </div>
          <div className={styles.buttonContainer}>
            <Button onClick={handle} size="large">
              Formular Case
            </Button>
            <Modal
              centered
              open={modal}
              onCancel={handle}
              footer={[
                <Button key="cancel" type="default" onClick={handle}>
                  Cancel
                </Button>,
                <Button
                  form="form"
                  key="submit"
                  htmlType="submit"
                  type="primary"
                  loading={isLoading}
                >
                  Submit
                </Button>,
              ]}
            >
              <div className={styles.title}>Case description</div>
              <Divider />
              <ModalForm setIsLoading={setIsLoading} />
            </Modal>
          </div>
        </div>
        <div className={styles.items}>
          <img src={chat} alt="chat" />
          <span className={styles.title}>Live chat</span>
          <div className={styles.subtitle}>
            Comunicati ce intrebari si nelamuriri ati intampinat si obtineti
            detalii concrete
          </div>
          <div className={styles.description}>
            Daca aveti intrebari, comunicati problema pe care ati intampinat-o
            cu un administrator.
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
