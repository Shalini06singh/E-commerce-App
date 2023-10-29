import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryStart } from "../../redux/action/category.action";
import { getProductStart } from "../../redux/action/product.action";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { getUserStart } from "../../redux/action/user.action";

export default function Auth() {


  const navigate = useNavigate();
  let categories = useSelector(state => state.category.categories)
  let [user, setUser] = useState( {} );
const dispatch = useDispatch() 


const checkUserAuthentication = () =>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      // console.log(user);
      setUser(user)
    
    } else {
      // User is signed out
     navigate('/login')

      
    }
  });
  
}

  useEffect(() => {
    checkUserAuthentication();
    //to fetch category instead of in category section
    dispatch(getCategoryStart());
    dispatch(getProductStart());
    dispatch(getUserStart())

  },[categories.length, user.uid])



  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-sm-3">
          <Sidebar />

        </div>
        <div className="col-sm-9">
          <Outlet />

        </div>
      </div>
    </div>
  );
}
