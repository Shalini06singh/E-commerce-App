import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import './Order.css'

export default function OrderView() {

const [order ,setOrder] = useState({});
// console.log(order);
const navigate  = useNavigate();




const orders = useSelector(state => state.order.orders);
//data from UI
let {id} = useParams();
// console.log(id);
useEffect(() => {
if(orders.length > 0) {
  let currentOrder = orders.find(order => order.id === id);

  if(currentOrder) {
    setOrder(currentOrder)
  }else{
    navigate('/admin/orders')
  }
} 

},[id, order])//reloads on page


  return (
 
      <div className="card">
        <div className="card-header bg-primary text-white d-flex justify-content-between">
          <div>Orders id # {order.id}k</div>
          <div>
            <Link to="/admin/orders" className="btn btn-success">
              Back
            </Link>
          </div>
        </div>
        <div className="card-body">
        {
            orders
            && 
            <ul className="list-group">
            <li className="list-group-item active" aria-current="true">Order Summary</li>
            <li className="list-group-item">
            <div>SubTotal</div>
            <div>$ {order.subTotal}</div>
            </li>
            <li className="list-group-item">
            <div>Tax</div>
            <div>$ {order.tax}</div>
            </li>
            <li className="list-group-item">
            <div>Grand Total</div>
            <div>$ {order.grandTotal}</div>
            </li>
          </ul>


        }

        {
          order.billingAddress &&
          <ul className="list-group mt-4">
            <li className="list-group-item active" aria-current="true">
              Billing Address
            </li>
            <li className="list-group-item">
            
            <div>Address Line 1</div>
            <div>{order.billingAddress.add1}</div>
            </li>
            <li className="list-group-item">
            <div>Address Line 2</div>
            <div>{order.billingAddress.add2}</div>
            </li>
            <li className="list-group-item">
            <div>City</div>
            <div>{order.billingAddress.city}</div>
            </li>
            <li className="list-group-item">
            <div>State</div>
            <div>{order.billingAddress.state}</div>
            </li>
            <li className="list-group-item">
            <div>Country</div>
            <div>{order.billingAddress.country}</div>
            </li>
            <li className="list-group-item">
            <div>ZipCode</div>
          <div>{order.billingAddress.zip}</div>
            </li>

          </ul>

        }
          


        {

          order.items && 

          <div className="card mt-4">
            <div className="card-header bg-primary text-white d-flex justify-content-between">
              <div>Product</div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>S No</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
{
order.items.length > 0 && order.items.map((item,index) => (
  <tr key={index}>
  <td>{index+1}</td>
  <td><img src= {item.image} alt='' style={{
          height : "50px"
  }}

  /></td>
  <td>{item.name}</td>
  <td>{item.final_price}</td>
  <td>{item.quantity}</td>
  </tr>
))


}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        }
         

          
        </div>
      </div>

    
  );
}
