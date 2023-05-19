import { Form, Input } from "antd";
import styles from "./ModalForm.module.css";

import { tooltips, yupValidator } from "./utils";

const ModalForm = ({ setIsLoading }) => {
  const [form] = Form.useForm();
  const formHandler = (formValues) => {
    console.log(formValues);
    setIsLoading(true);
  };

  return (
    <div className={styles.formContainer}>
      <Form
        form={form}
        name="form"
        onFinish={formHandler}
        labelCol={{ span: 8 }}
        autoComplete="off"
      >
        <Form.Item
          name="CaseTitle"
          label="Titlul case-ului"
          tooltip={tooltips.caseTooltip}
          rules={[yupValidator]}
          required
        >
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "2rem" }}
          name="Description"
          rules={[yupValidator]}
        >
          <Input.TextArea
            placeholder="Descrieti problema care ati intampinat"
            autoSize={{
              minRows: 6,
              maxRows: 10,
            }}
            showCount
            maxLength={500}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default ModalForm;
