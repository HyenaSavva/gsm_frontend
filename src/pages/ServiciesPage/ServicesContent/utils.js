import { firestore } from "../../../db";
import { collection, getDocs, query } from "firebase/firestore";

export const getItems = async () => {
  const docs = [];
  try {
    const coll = collection(firestore, "spyShopItems");
    const filter = query(coll);
    const items = await getDocs(filter);
    items.forEach((doc) => docs.push(doc.data()));
    return docs;
  } catch (err) {
    return err;
  }
};
