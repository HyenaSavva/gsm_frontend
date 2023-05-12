import * as yup from "yup";
import { Form, InputNumber } from "antd";

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
  oficiesNumber: yup
    .number()
    .typeError("Introduceti numarul de oficii")
    .max(30, "Numar prea mare"),
  comercialSpacesNumber: yup
    .number()
    .typeError("Introduceti numarul de spatii comerciale")
    .max(30, "Numar prea mare"),
  productionHallsNumber: yup
    .number()
    .typeError("Introduceti numarul de hale productie")
    .max(30, "Numar prea mare"),
  storageHallsNumber: yup
    .number()
    .typeError("Introduceti numarul de hale depozitare")
    .max(30, "Numar prea mare"),
  cartItems: yup.array(),
});

export const yupValidator = {
  async validator({ field }, value) {
    validationSchema.validateSyncAt(field, { [field]: value });
  },
};

export const renderInputs = (selectedOption) => {
  if (selectedOption === "residential") {
    return (
      <>
        <Form.Item
          name="camerasNumber"
          label="Nr. de camere"
          rules={[yupValidator]}
        >
          <InputNumber maxLength={3} />
        </Form.Item>
        <Form.Item
          name="windowsNumber"
          label="Nr. de geamuri"
          rules={[yupValidator]}
        >
          <InputNumber maxLength={3} />
        </Form.Item>
        <Form.Item name="doorsNumber" label="Nr. de usi" rules={[yupValidator]}>
          <InputNumber maxLength={3} />
        </Form.Item>
      </>
    );
  } else if (selectedOption === "juridic") {
    return (
      <>
        <Form.Item
          name="oficiesNumber"
          label="Nr. de birouri"
          rules={[yupValidator]}
        >
          <InputNumber maxLength={3} />
        </Form.Item>
        <Form.Item
          name="comercialSpacesNumber"
          label="Spatii comericale"
          rules={[yupValidator]}
        >
          <InputNumber maxLength={3} />
        </Form.Item>
        <Form.Item
          name="productionHallsNumber"
          label="Hale productie"
          rules={[yupValidator]}
        >
          <InputNumber maxLength={3} />
        </Form.Item>
        <Form.Item
          name="storageHallsNumber"
          label="Hale depozitare"
          rules={[yupValidator]}
        >
          <InputNumber maxLength={3} />
        </Form.Item>
      </>
    );
  } else return <>Introduceti tipul cladirii pentru </>;
};
