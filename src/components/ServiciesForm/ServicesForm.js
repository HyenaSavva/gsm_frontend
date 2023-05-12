import { useMemo, useState } from "react";
import { yupValidator, renderInputs } from "./ServiceInputs/ServiceInputs";
import {
  securityTypes,
  buildingTypes,
  textTooltips,
} from "./ServiceInputs/utils";
import { Button, Form, Select, Collapse, Input } from "antd";
import ServiceCart from "./ServiceCart/ServiceCart";

import styles from "./ServiceForm.module.css";

const ServiciesForm = ({ itemsData, cartItems }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [form] = Form.useForm();
  const { Panel } = Collapse;

  const selectedCartItems = cartItems.map((item) => item.itemId);
  form.setFields([{ name: ["cartItems"], value: selectedCartItems }]);

  const onFinish = (values) => {
    console.log("Received values of form:", values);
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

        <ServiceCart cartItems={cartItems} />

        <Collapse size="small">
          <Panel header={<>Caracteristici Optionale</>}>
            <div className={styles.dropDown}>
              {renderInputs(selectedOption)}
            </div>
          </Panel>
        </Collapse>
      </>
    ),
    [selectedOption, cartItems]
  );

  return (
    <Form
      form={form}
      name="form"
      onFinish={onFinish}
      autoComplete="off"
      className={styles.mainForm}
    >
      <div className={styles.formItems}>
        <div className={styles.itemsWrapper}>{formItems}</div>
      </div>
      <div className={styles.options}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            type="default"
            danger
            onClick={(e) => {
              console.log("reset");
              form.resetFields(["securityType", "buildingType"]);
            }}
          >
            Reset Fields
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default ServiciesForm;
