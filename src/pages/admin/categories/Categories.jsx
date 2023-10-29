import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCategoryStart } from '../../../redux/action/category.action';

export default function Categories() {

  //from rootReducer get categories made by combineReducers
  let categories = useSelector(state => state.category.categories)



  //dispatch action
  const dispatch = useDispatch();
  //length changes then on loading automatically data from firebase to UI
  useEffect(() => {
    // console.log(categories);
    //for action calling
    // dispatch(getCategoryStart());
  }, [categories.length])
  return (
    <div className="card">
      <div className="card-header bg-primary text-white d-flex justify-content-between">
        <div>Category</div>
        <div><Link to="/admin/category/create" className='btn btn-success'>Add Category</Link></div>
      </div>
      <div className="card-body ">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>S No</th>
              <th>Name</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              categories.length > 0 && categories.map((category, index) => (
                <tr key={index}>
                  <th>{index+1}</th>
                  <td>{category.name}</td>
                  <td>
                    <img src={category.image} alt=""
                     style={{
                      height: "50px"
                    }} />
                  </td>
                  <td>
                    <Link to={`/admin/category/edit/${category.id}`} className='btn btn-warning mx-2'>Edit</Link>
                    <button className='btn btn-danger' onClick={()=> dispatch(deleteCategoryStart(category))}>Delete</button>
                  </td>
                </tr>
              ))
            }

            {/* <tr>
              <th scope="row">2</th>
              <td>Womens</td>
              <td>
                <div>
                  <img style={{
                    height: "100px"
                  }} src="https://anninc.scene7.com/is/image/AN/082123_SeptHP_DesktopMobile_Templates_1T_notxt?wid=750" />

                </div>
              </td>
              <td>
                <Link to="/admin/category/1" className='btn btn-warning mx-2'>Edit</Link>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr> */}
            {/* <tr>
              <th scope="row">3</th>
              <td>Kids</td>
              <td>
                <div>
                  <img style={{
                    height: "100px"
                  }} src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663623093-GUEST_38605b4a-010d-4274-b7b6-59afba61c170.jpg?crop=1xw:1.00xh;center,top&resize=980:*" />

                </div>
              </td>
              <td>
                <Link to="/admin/category/1" className='btn btn-warning mx-2'>Edit</Link>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  )
}
