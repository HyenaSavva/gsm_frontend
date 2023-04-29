import { useState } from "react";
import { yupValidator, renderInputs } from "./ServiceInputs/ServiceInputs";
import {
  securityTypes,
  buildingTypes,
  textTooltips,
} from "./ServiceInputs/utils";

import { Button, Form, Select, Collapse } from "antd";
import styles from "./ServiceForm.module.css";
import ServiceSearch from "./ServiceSearch/ServiceSearch";

const ServiciesForm = ({ itemsData, setCardsSearch }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [form] = Form.useForm();
  const { Panel } = Collapse;

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  const handleChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <Form
      form={form}
      name="form"
      onFinish={onFinish}
      onFieldsChange={(value) => console.log()}
      autoComplete="off"
      className={styles.mainForm}
      labelCol={{ span: 12 }}
    >
      <div className={styles.formItems}>
        <div className={styles.itemsWrapper}>
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
            name="itemsData"
            label="Configuratia"
            rules={[yupValidator]}
            labelCol={{ span: 5 }}
            shouldUpdate={true}
          >
            <ServiceSearch
              itemsData={itemsData}
              setCardsSearch={setCardsSearch}
            />
          </Form.Item>
          <Collapse size="small">
            <Panel header={<>Caracteristici Optionale</>}>
              <div className={styles.dropDown}>
                {renderInputs(selectedOption)}
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
      <div className={styles.options}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="default" htmlType="reset" danger>
            Reset Fields
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default ServiciesForm;
