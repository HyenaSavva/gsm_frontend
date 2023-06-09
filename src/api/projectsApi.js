import axios from "axios";
import { ref, getDownloadURL } from "firebase/storage";
import { collection, getDocs, query, where } from "firebase/firestore";
import { storage, firestore } from "db";

const URL = process.env.REACT_APP_BASE_URL;

export const postProject = async (project) => {
  try {
    const response = await axios.post(
      `${URL}/api/project`,
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

export const getAllProjects = async (isAdmin) => {
  const projects = [];
  try {
    const coll = collection(firestore, "projects");
    const filter = query(
      coll,
      where(
        "privateAccess",
        "array-contains-any",
        isAdmin ? ["customer", "viewer", "admin"] : ["customer", "viewer"]
      )
    );
    const docs = await getDocs(filter);
    docs.forEach((project) => projects.push(project.data()));
    return projects;
  } catch (err) {
    return err;
  }
};

export const getProject = async ({ projectId }) => {
  try {
    const response = await axios.get(`${URL}/api/project`, {
      params: projectId,
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const fetchImages = async (images) => {
  try {
    const refs = images.map((imgRef) => getDownloadURL(ref(storage, imgRef)));
    return await Promise.all(refs);
  } catch (err) {
    return err;
  }
};

export const getItems = async () => {
  const docs = [];
  try {
    const coll = collection(firestore, "spyShopItems");
    const filter = query(coll);
    const items = await getDocs(filter);
    items.forEach((doc) => docs.push(doc.data()));
    return docs;
  } catch (err) {
    console.log(err);
    return [];
  }
};
