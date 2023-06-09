import { ShoppingCartOutlined } from "@ant-design/icons";
import { Droppable } from "react-beautiful-dnd";
import CustomCard from "../../CustomCard/CustomCard";

import styles from "./ServiceCart.module.css";

const ServiceCart = ({ cartItems, onChange }) => {
  return (
    <Droppable droppableId="cartDroppable" direction="grid">
      {(provided) => {
        onChange();
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={styles.cart}
          >
            <div className={styles.background}>
              {!cartItems.length ? (
                <ShoppingCartOutlined
                  style={{
                    fontSize: "64px",
                    color: "#81c9ff",
                  }}
                />
              ) : null}
            </div>
            {cartItems.map((item, index) => (
              <CustomCard key={item.itemId} card={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default ServiceCart;
