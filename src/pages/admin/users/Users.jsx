import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteUserStart, getUserStart } from '../../../redux/action/user.action';

export default function Users() {


  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();
  // console.log(users);
  useEffect(() => {
    dispatch(getUserStart())
  },[users.length])
  return (
    <div className="card">
      <div className="card-header bg-primary text-white d-flex justify-content-between">
        <div>Users</div>
        <div><Link to="/admin/users/create" className='btn btn-success'>Add User</Link></div>
      </div>
      <div className="card-body ">
        <div className='table-responsive'>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>S No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.length > 0 && users.map((user,index)=> (
                  <tr key={index}>
                    {/* counter */}
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <Link to={`/admin/users/edit/${user.id}`} className='btn btn-warning mx-2'>Edit</Link>
                      <button className='btn btn-danger' onClick={() => dispatch(deleteUserStart(user))}>Delete</button>
                    </td>
                  </tr>



                ))
              }
             
             
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
