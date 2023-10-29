import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { auth } from '../../firebaseConfig';
const initialState = {};
export default function Profile() {
  const [user, setUser] = useState({})
  const users = useSelector(state => state.user.users)
  const getCurrentUserDetails = (users, uid) => {
      // console.log(user);

      if (users.length > 0) {
          // console.log(users);
          let usr = users.find(user => user.uid === uid)
          // console.log(usr);
          setUser(usr);

      }

  }

  useEffect(() => {
    getCurrentUserDetails(users, auth.currentUser?.uid);
}, [user.length])

  return (
    <ul className="list-group">
      <li className="list-group-item active d-flex justify-content-between" aria-current="true">
        <div>Profile</div>
        <Link to='/admin/profile/edit' className='btn btn-success'>Edit Profile</Link>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <div >
          Name
        </div>
        <div>
       {user.name}
        </div>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <div >
          Profile Image
        </div>
        <div>
          <img style={{
            height: "100px"
          }} src={user.image} />

        </div>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <div >
          Contact Number
        </div>
        <div>
  {user.phone}
        </div>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <div >
          Address
        </div>
        <div>
          {user.address}
        </div>
      </li>

    </ul>
  )
}
