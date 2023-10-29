import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { currentUser } from '../../../helpers/userHelper';

export default function Orders() {
 
 const orders = useSelector(state => state.order.orders);

 const users = useSelector(state => state.user.users);
//  console.log(orders);

const [filterOrders, setFilterOrders ] = useState([]);
const [cUser, setcUser ] = useState({});//length

useEffect(() => {
 setcUser(currentUser(users));
//  console.log(cUser);


//to show order summary only to the admin and not customer
if(cUser){

  if(cUser.role === 'customer'){
    let fOrder = orders.filter(order => order.user.uid === cUser.uid);
  // console.log(fOrder);

  if(fOrder.length > 0){
    setFilterOrders([...fOrder])
  }else{
    setFilterOrders([])
  }
}else{
    setFilterOrders(orders)

  }
  
}
},[filterOrders.length,cUser])

  return (
    <div className="card">
    <div className="card-header bg-primary text-white d-flex justify-content-between">
      <div>Orders</div>
     
    </div>
    <div className="card-body">
      <div className='table-responsive'>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>S No</th>
            <th>Name</th>
            <th>Sub Total</th>
            <th>Tax</th>
            <th>Grand Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          filterOrders.length > 0 && orders.map((order,index) =>(
            <tr key={index}>
            <td>{index+1}</td>
            <td>{order.user.name}</td>
            <td> $ {order.subTotal}</td>
            <td>$ {order.tax}</td>
            <td>$ {order.grandTotal}</td>
            <td>
              <Link to= {`/admin/orders/view/${order.id}`}  className='btn btn-info'> View </Link>
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
