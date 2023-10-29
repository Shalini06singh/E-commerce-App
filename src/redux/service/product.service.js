import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const getProductFromFirebase = async () => {
  let ref = collection(db, "products");
  const q = query(ref);

  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    let d = doc.data();
    d.id = doc.id;
    data.push(d);
  });
  //   console.log(data);
  return data;
}

export const addProductToFireBase = async (data) => {
  try {
    let ref = collection(db, "products");
    const docRef = await addDoc(ref, data);
    // console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (e) {
    // console.error("Error adding document: ", e);
    return e.message;
  }
}

export const deleteProductFromFirebase = async (data) => {
  try {
    let ref = doc(db, "products", data.id);
    await deleteDoc(ref);
    // console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (e) {
    // console.error("Error adding document: ", e);
    return e.message;
  }
};

export const updateProductFromFirebase = async (id, data) => {
  try {
    let ref = doc(db, "products", data.id);
    await updateDoc(ref, data);

    return true;
  } catch (e) {
    // console.error("Error adding document: ", e);
    return e.message;
  }
}