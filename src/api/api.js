import axios from "axios";

export const postProject = async (project) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/project`,
      JSON.stringify(project),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  } catch (err) {
    return err;
  }
};
