import { firestore } from "../../../db";
import { collection, getDocs, query } from "firebase/firestore";

export const getItems = async (itemQuery) => {
  const docs = [];
  try {
    const coll = collection(firestore, "spyShopItems");
    const q = query(coll);
    const items = await getDocs(q);
    items.forEach((doc) => docs.push(doc.data()));
    return docs;
  } catch (err) {
    return err;
  }
};
