import { Input } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import CustomCard from "../../CustomCard/CustomCard";

import styles from "./ServiceCart.module.css";

const ServiceCart = ({ value = {}, onChange, cartItems }) => {
  const [items, setItems] = useState(cartItems);

  // const triggerChange = (changedValue) => {
  //   console.log("done", changedValue);
  //   onChange?.({ ...value, ...changedValue });
  // };

  return (
    <>
      <Droppable droppableId="cartDroppable" direction="grid">
        {(provided) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={styles.cart}
            >
              <div className={styles.background}>
                <ShoppingCartOutlined
                  style={{
                    fontSize: "64px",
                    color: "#81c9ff",
                  }}
                />
              </div>
              {items.map((item, index) => (
                <Task key={item.itemId} item={item} index={index} />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </>
  );
};

const Task = ({ item, index }) => <CustomCard card={item} index={index} />;

export default ServiceCart;
