import { useMemo, useState, useContext } from "react";
import {
  yupValidator,
  renderInputs,
  fields,
} from "./ServiceInputs/ServiceInputs";
import {
  securityTypes,
  buildingTypes,
  textTooltips,
} from "./ServiceInputs/utils";
import { postProject } from "../../api/api";
import { motion } from "framer-motion";
import { Button, Form, Select, Collapse, Input, notification } from "antd";
import { AuthContext } from "../AuthForm/authFunctions/AuthContextProvider";
import ServiceCart from "./ServiceCart/ServiceCart";

import styles from "./ServiceForm.module.css";

const ServiciesForm = ({ itemsData, cartItems }) => {
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [form] = Form.useForm();
  const { authState } = useContext(AuthContext);
  const [api, contextHolder] = notification.useNotification();

  const { Panel } = Collapse;

  const onFinish = async (values) => {
    setLoading(true);
    const result = await postProject({
      ...values,
      email: authState.userData.email,
    });

    setTimeout(() => {
      setLoading(false);
      result.status === 200
        ? api.success({
            message: "Success",
            description: "yes",
            duration: 3,
            placement: "bottomLeft",
          })
        : api.warning({
            message: "Something goes wrong",
            duration: 3,
            placement: "bottomLeft",
          });
    }, 1500);

    console.log(result);
  };

  const handleChange = (value) => {
    setSelectedOption(value);
  };

  const formItems = useMemo(
    () => (
      <>
        <Form.Item
          name="securityType"
          label="Tipul de securitate"
          rules={[yupValidator, { required: true, message: "" }]}
          tooltip={textTooltips.securityType}
        >
          <Select options={securityTypes} />
        </Form.Item>

        <Form.Item
          name="buildingType"
          label="Tipul cladirii"
          rules={[yupValidator, { required: true, message: "" }]}
          tooltip={textTooltips.buildingType}
        >
          <Select options={buildingTypes} onChange={handleChange} />
        </Form.Item>

        <Form.Item
          name="cartItems"
          rules={[yupValidator]}
          style={{ display: "none" }}
        >
          <Input />
        </Form.Item>

        <ServiceCart
          cartItems={cartItems}
          onChange={() => {
            const selectedCartItems = cartItems.map((item) => item.itemId);
            form.setFields([{ name: ["cartItems"], value: selectedCartItems }]);
          }}
        />

        <Collapse size="small" className={styles.dropDown}>
          <Panel header={<>Caracteristici Optionale</>}>
            {renderInputs(selectedOption)}
          </Panel>
        </Collapse>
      </>
    ),
    [selectedOption, cartItems]
  );

  return (
    <Form form={form} name="form" onFinish={onFinish} autoComplete="off">
      <div className={styles.formItems}>
        <div className={styles.itemsWrapper}>{formItems}</div>
        <motion.div className={styles.options} animate>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>

          <Form.Item>
            <Button
              type="default"
              danger
              onClick={(e) => {
                console.log("reset");
                form.resetFields(fields);
              }}
            >
              Reset Fields
            </Button>
          </Form.Item>
        </motion.div>
      </div>
      {contextHolder}
    </Form>
  );
};

export default ServiciesForm;
