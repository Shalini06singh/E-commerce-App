import React, { useEffect } from 'react'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Cart() {

let currentCart = useSelector(state => state.cart.currentCart);
// console.log(currentCart);

useEffect(() =>{

},[currentCart.grandTotal])
  return (
    <>
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="container">
          <div
            className="banner_content d-md-flex justify-content-between align-items-center"
          >
            <div className="mb-3 mb-md-0">
              <h2>Cart</h2>
              <p>Very us move be blessed multiply night</p>
            </div>
            <div className="page_link">
              <a href="index.html">Home</a>
              <a href="cart.html">Cart</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="cart_area">
      <div className="container">
        <div className="cart_inner">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th >Product</th>
                  <th >Price</th>
                  <th >Quantity</th>
                  <th >Total</th>
                </tr>
              </thead>
              <tbody>

                {
                  currentCart.items.length > 0 && 
                  currentCart.items.map((item,index) => (
                    <CartItem 
                    key={index} 
                    item={item}
                    cart={currentCart}
                    user={currentCart.user}
                     />
                  ))

                  }
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Subtotal</h5>
                  </td>
                  <td>
                    <h5>${currentCart.subTotal}</h5>
                  </td>
                </tr>
               
                <tr className="out_button_area">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="checkout_btn_inner">
                      <Link className="gray_btn" to="/">Continue Shopping</Link>
                      <Link className="main_btn" to="/checkout">Proceed to checkout</Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}
