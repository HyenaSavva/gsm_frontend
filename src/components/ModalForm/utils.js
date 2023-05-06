import * as yup from "yup";

export const tooltips = {
  caseTooltip: "Dati denumire problemei cu care va-ti intalnit.",
  descriptionTooltip:
    "Descrieti in detaliu ce probleme ati intampinat, cand si care au fost ultimile actiuni care au provocat eroare.",
};

const validationSchema = yup.object({
  Email: yup.string().required().email().max(40, "The email is too long"),
  CaseTitle: yup.string().required().max(38, "The title is too long"),
  Description: yup.string().typeError("Descrieti case-ul"),
});

export const yupValidator = {
  // de pe stackoverflow
  async validator({ field }, value) {
    validationSchema.validateSyncAt(field, { [field]: value });
  },
};
