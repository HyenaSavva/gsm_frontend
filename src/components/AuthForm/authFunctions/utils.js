import * as yup from "yup";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/; // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
// yup
//     .string()
//     .matches(passwordRules, { message: "Please create a stronger password" })
//     .required("Required"),

const validationSchema = yup.object({
  Email: yup.string().required().email(),
  Password: yup
    .string()
    .required()
    .min(8, "Password need to have min 8 characters."),
});

export const yupValidator = {
  async validator({ field }, value) {
    validationSchema.validateSyncAt(field, { [field]: value });
  },
};
