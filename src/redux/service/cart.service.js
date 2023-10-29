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

export const getCartFromFirebase = async () => {
  let ref = collection(db, "cart");
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

export const addCartToFireBase = async (data) => {

  let cartId = localStorage.getItem("cart_id");


  try {
    
    if(cartId) {
      let ref = doc(db, "cart", cartId);
      await updateDoc(ref, data);
      localStorage.setItem('current_cart' , JSON.stringify(data))

    }else{
      let ref = collection(db, "cart");
      const docRef = await addDoc(ref, data);
      // console.log(docRef.id);
      localStorage.setItem("cart_id",docRef.id)
      localStorage.setItem('current_cart' , JSON.stringify(data))


    }
    
    return true;
  } catch (e) {
    return e.message;
  }
};

export const deleteCartFromFirebase = async (data) => {
  try {
    let ref = doc(db, "cart", data.id);
    await deleteDoc(ref);
    return true;
  } catch (e) {
    return e.message;
  }
};

export const updateCartFromFirebase = async (id, data) => {
  try {
    let ref = doc(db, "cart", id);
    await updateDoc(ref, data);

    return true;
  } catch (e) {
    return e.message;
  }
};
