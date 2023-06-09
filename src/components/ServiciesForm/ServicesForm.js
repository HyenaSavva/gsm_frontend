import { useMemo, useState, useContext } from "react";
import {
  securityTypes,
  buildingTypes,
  textTooltips,
  SUCCESS,
  WARNING,
} from "utils/constants";
import { postProject } from "api";
import { Button, Form, Select, Collapse, Input, notification } from "antd";
import { AuthContext } from "auth/AuthContextProvider";
import { yupValidator, renderInputs, fields } from "./ServiceInputs";
import ServiceCart from "./ServiceCart";

import styles from "./ServiceForm.module.css";

const ServiciesForm = ({ itemsData, cartItems }) => {
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const [api, contextHolder] = notification.useNotification();
  const { authState } = useContext(AuthContext);
  const [form] = Form.useForm();

  const { Panel } = Collapse;

  const onFinish = async (values) => {
    setLoading(true);
    const result = await postProject({
      ...values,
      email: authState.userData.email,
    });

    setTimeout(() => {
      setLoading(false);
      result.status === 200 ? api.success(SUCCESS) : api.warning(WARNING);
    }, 1500);
  };

  const handleChange = (value) => {
    setSelectedOption(value);
  };

  const formItems = useMemo(
    () => (
      <>
        <Form.Item
          name="securityType"
          label=" "
          rules={[yupValidator, { required: true, message: "" }]}
          tooltip={textTooltips.securityType}
        >
          <Select placeholder="Tipul de securitate" options={securityTypes} />
        </Form.Item>

        <Form.Item
          name="buildingType"
          label=" "
          rules={[yupValidator, { required: true, message: "" }]}
          tooltip={textTooltips.buildingType}
        >
          <Select
            placeholder="Tipul cladirii"
            options={buildingTypes}
            onChange={handleChange}
          />
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
    [selectedOption, cartItems, form]
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
        <div className={styles.options}>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>

          <Form.Item>
            <Button
              type="default"
              danger
              onClick={() => {
                form.resetFields(fields);
              }}
            >
              Reset Fields
            </Button>
          </Form.Item>
        </div>
      </div>
      {contextHolder}
    </Form>
  );
};

export default ServiciesForm;
