import axios from "axios";

export const getProjects = async () => {
  const docs = [
    {
      buildingType: "residential",
      title: "IC Agritehnica Sadoveni",
      createdAt: "March 20, 2023 at 1:36:58 PM UTC+2",
      imagesRefs: ["images/wall_camera.jpg"],
      location: "Botosani",
      locationArea: 55,
      projectId: "QkVUMua6gJvUM7u6cur0",
      securityType: "surveillance",
      updatedAt: "March 20, 2023 at 1:37:33 PM UTC+2",
      user: "/users/re4meister@gmail.com",
    },
    {
      buildingType: "residential",
      title: "Magazin Agroland",
      createdAt: "March 20, 2023 at 1:36:58 PM UTC+2",
      imagesRefs: ["images/agroland_afara.jpg", "images/agroland.jpg"],
      location: "Botosani",
      locationArea: 55,
      projectId: "QkVUMua6gsJvUM7u6cur0",
      securityType: "surveillance",
      updatedAt: "March 20, 2023 at 1:37:33 PM UTC+2",
      user: "/users/re4meister@gmail.com",
    },
    {
      buildingType: "residential",
      title: "Camin cultura Miron Costin",
      createdAt: "March 20, 2023 at 1:36:58 PM UTC+2",
      imagesRefs: ["images/camin.jpg"],
      location: "Botosani",
      locationArea: 55,
      projectId: "QkVUMua6gdJvUM7u6cur0",
      securityType: "surveillance",
      updatedAt: "March 20, 2023 at 1:37:33 PM UTC+2",
      user: "/users/re4meister@gmail.com",
    },
  ];
  try {
    return docs;
  } catch (err) {
    return err;
  }
};
