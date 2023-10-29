import {
  addDoc,
  collection,
  getDocs,
  query
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const getOrderFromFirebase = async () => {
  let ref = collection(db, "orders");
  const q = query(ref);

  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    let d = doc.data();
    d.id = doc.id;
    data.push(d);
  });
  return data;
};

export const placeOrderToFireBase = async (data) => {
  try {
    let ref = collection(db, "orders");
    const docRef = await addDoc(ref, data);
    localStorage.removeItem('cart_id');
    localStorage.removeItem('current_cart')
    return true;
  } catch (e) {
    return e.message;
  }
}
