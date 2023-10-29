import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProductStart, getProductStart } from '../../../redux/action/product.action';

export default function Products() {
  const products = useSelector(state => state.product.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductStart())
  },[products.length])
  return (
    <div className="card">
      <div className="card-header bg-primary text-white d-flex justify-content-between">
        <div>Products</div>
        <div><Link to="/admin/products/create" className='btn btn-success'>Add Product</Link></div>
      </div>
      <div className="card-body ">
        <div className='table-responsive'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>S No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              products.length > 0 && products.map((product, index)=> (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td><img src={product.image} alt="" 
                   style={{
                    height: "50px"
                  }}
                  
                  /></td>
                  <td>{product.name}</td>
                  <td>{product.name}</td>
                  <td>{product.final_price}</td>
                  <td>{((product.market_price - product.final_price) / product.market_price * 100).toFixed(2) }%</td>
                  <td>
                    <Link to={`/admin/products/edit/${product.id}`} className='btn btn-warning mx-2'>Edit</Link>
                    <button className='btn btn-danger' onClick={() => dispatch(deleteProductStart(product))}>Delete</button>
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
