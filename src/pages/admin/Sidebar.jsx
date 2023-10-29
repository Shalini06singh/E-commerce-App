import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig';
import { useSelector } from 'react-redux';
const initialState = {
  email: "", id: "", name: "", uid: "", image: '', phone: '', address: ''

}
export default function Sidebar() {
  const [user, setUser] = useState({})
  const users = useSelector(state => state.user.users)
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/login')
    }).catch((error) => {
      // An error happened.
    });

  }
  const getCurrentUserDetails = (users, uid) => {
    if (users.length > 0) {

      let usr = users.find(user => user.uid === uid)

      setUser(usr);

    }

  }
  useEffect(() => {
    getCurrentUserDetails(users, auth.currentUser?.uid);
  }, [auth.currentUser?.uid])
  return (

    <ul className="list-group">
      <li className="list-group-item active" aria-current="true">Side Bar</li>
      <li className="list-group-item">
        <Link to="/admin/profile">Profile</Link>
      </li>
      <li className="list-group-item">
            <Link to="/admin/orders">Orders</Link>
          </li>
      {

        user?.role === 'admin' &&
        <>
          <li className="list-group-item">
            <Link to="/admin/category">Category</Link>

          </li>
          <li className="list-group-item">
            <Link to="/admin/products">Products</Link>

          </li>
          <li className="list-group-item">
            <Link to="/admin/orders">Orders</Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/users">User</Link>
          </li>

        </>
      }

      <li className="list-group-item btn btn-default">
        <a href='#' onClick={logout}>
          Logout
        </a >
      </li>

    </ul>

  )
}
