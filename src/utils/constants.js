export const propertyData = {
  residential: [
    { key: "camerasNumber", label: "Numarul de camere din cladire: " },
    { key: "windowsNumber", label: "Numarul de geamuri: " },
    { key: "doorsNumber", label: "Numarul de usi din cladire: " },
  ],
  juridic: [
    { key: "oficiesNumber", label: "Numarul de birouri din cladire: " },
    { key: "comercialSpacesNumber", label: "Numarul de spatii comerciale: " },
    { key: "productionHallsNumber", label: "Numarul de hale productie: " },
    { key: "storageHallsNumber", label: "Numarul de hale depozitare: " },
  ],
};

export const securityTypes = [
  {
    label: "Supraveghere",
    value: "supraveghere",
  },
  {
    label: "Antifractie",
    value: "antifractie",
  },
];

export const buildingTypes = [
  {
    label: "Residential",
    value: "residential",
  },
  {
    label: "Juridic",
    value: "juridic",
  },
];

export const checkBoxOptions = [
  {
    value: "Hikvision",
    label: "Hikvision",
  },
  {
    value: "Dahua",
    label: "Dahua",
  },
  {
    value: "Acvil",
    label: "Acvil",
  },
  {
    value: "Kit",
    label: "Kit",
  },
];

export const textTooltips = {
  buildingType: `Tipul clădirii rezidențiale se referă la clădirile destinate locuirii oamenilor, cum ar fi case, apartamente sau cămine de studenți. Tipul clădirii juridice se referă la clădirile destinate activităților legate de lege și justiție, cum ar fi tribunale, parchete, birouri de avocatură sau notariate.`,
  securityType: `Tipurile de securitate de supraveghere includ camere de supraveghere video și senzori de mișcare, care monitorizează activitățile dintr-un anumit spațiu. Tipurile de securitate antiefracție includ bariere fizice, cum ar fi uși și ferestre cu sisteme de blocare avansat și sisteme de alarmă.`,
};

export const SUCCESS = {
  message: "Success",
  description: "yes",
  duration: 3,
  placement: "bottomLeft",
};

export const WARNING = {
  message: "Something goes wrong",
  duration: 3,
  placement: "bottomLeft",
};
