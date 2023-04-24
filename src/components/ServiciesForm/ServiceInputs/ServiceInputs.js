import * as yup from "yup";
import { Form, InputNumber, Space } from "antd";
import { Collapse } from "antd";

const validationSchema = yup.object({
  securityType: yup.string().required("Introduceti tipul de securitate"),
  buildingType: yup.string().required("Introduceti tipul cladirii"),
  camerasNumber: yup
    .number()
    .typeError("Introduceti numarul de camere")
    .max(15, "Numar prea mare"),
  windowsNumber: yup
    .number()
    .typeError("Introduceti numarul de geamuri")
    .max(30, "Numar prea mare"),
  doorsNumber: yup
    .number()
    .typeError("Introduceti numarul de usi")
    .max(10, "Numar prea mare"),
});

export const yupValidator = {
  async validator({ field }, value) {
    validationSchema.validateSyncAt(field, { [field]: value });
  },
};

export const renderInputs = (selectedOption) => {
  const { Panel } = Collapse;

  if (selectedOption === "residential") {
    return (
      <>
        <Form.Item
          name="camerasNumber"
          label="Nr. de camere"
          rules={[yupValidator]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="windowsNumber"
          label="Nr. de geamuri"
          rules={[yupValidator]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name="doorsNumber" label="Nr. de usi" rules={[yupValidator]}>
          <InputNumber />
        </Form.Item>
      </>
    );
  } else if (selectedOption === "juridic") {
    return (
      <>
        <Form.Item label="Nr. de birouri">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Spatii comericale">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Hale productie">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Hale depozitare">
          <InputNumber />
        </Form.Item>
      </>
    );
  } else return <>Introduceti tipul cladirii pentru </>;
};
