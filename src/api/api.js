import axios from "axios";
import { firestore } from "../db";

export const postProject = async (project) => {
  console.log(project);
  try {
    const formData = new FormData();
    Object.keys(project).forEach((key) => formData.append(key, project[key]));

    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/project`,
      formData
    );

    return response;
  } catch (err) {
    return err;
  }
};
