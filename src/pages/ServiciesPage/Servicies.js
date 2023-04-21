import style from "./Services.module.css";
import ServiciesForm from "../../components/ServiciesForm/ServicesForm";
import ServiciesContent from "./ServicesContent/ServiciesContent";
import { useState } from "react";

const Servicies = () => {
  const [isSure, setIsSure] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        {!isSure ? (
          <p onClick={() => setIsSure((prev) => !prev)}>Are you sure ?</p>
        ) : (
          <ServiciesForm />
        )}
      </div>

      <ServiciesContent />
    </div>
  );
};

export default Servicies;
