import { auth } from "../firebaseConfig"

export const currentUser = (users) =>{
// console.log(auth.currentUser);

if (users.length > 0) {

    let usr = users.find(user => user.uid === auth.currentUser?.uid)

    return usr;

  }
return null;
}