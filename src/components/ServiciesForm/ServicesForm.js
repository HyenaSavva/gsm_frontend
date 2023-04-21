import { Button, Form, Input, Select, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const ServiciesForm = () => {
  const [form] = Form.useForm();
  const { Option } = Select;

  const areas = [
    { label: "Beijing", value: "Beijing" },
    { label: "Shanghai", value: "Shanghai" },
  ];

  const sights = {
    Beijing: ["Tiananmen", "Great Wall"],
    Shanghai: ["Oriental Pearl", "The Bund"],
  };

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
  };

  return (
    <Form form={form} name="Building Type" onFinish={onFinish}>
      <Form.Item
        name="area"
        label="Area"
        rules={[{ required: true, message: "Missing area" }]}
      >
        <Select options={areas} onChange={handleChange} />
      </Form.Item>
      <Form.List name="sights">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space key={field.key} align="baseline">
                {console.log(field)}
                <Form.Item
                  {...field}
                  label="Price"
                  name={[field.name, "price"]}
                  rules={[{ required: true, message: "Missing price" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  {...field}
                  label="Camere"
                  name={[field.name, "camere"]}
                  rules={[{ required: true, message: "Missing camere" }]}
                >
                  <Input />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add sights
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ServiciesForm;
