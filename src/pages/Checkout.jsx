import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserStart } from "../redux/action/user.action";
import { currentUser } from "../helpers/userHelper";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { placeOrderStart } from "../redux/action/order.action";

const initialState = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  country: "",
  add1: "",
  add2: "",
  city: "",
  state: "",
  zip: "",
};

export default function Checkout() {
  const users = useSelector((state) => state.user.users);
  const navigate = useNavigate();
  const currentCart = useSelector((state) => state.cart.currentCart);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const [button , setButton] = useState(true);
  //destructuring
  let {
    first_name,
    last_name,
    phone,
    email,
    country,
    add1,
    add2,
    city,
    state,
    zip,
  } = formData;
  const inputChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    checkFormData()
  };

 const checkFormData = ()  => {
  if(first_name.length === 0 || last_name.length === 0 || phone.length === 0 || email.length === 0 || country.length.length === 0 || add1.length === 0 || city.length === 0 || state.length === 0 || zip.length === 0 ){
    setButton(true)
  }
  else{
    setButton(false)
  }
  }

  const submit = () => {

    const orderDetails = {
      ...currentCart,
      orderPlaced : true,
      billingAddress : formData
    }
    // console.log(formData);
    dispatch(placeOrderStart(orderDetails))
    setTimeout(() => {
      navigate('/thank')
    },3000)
  };
  useEffect(() => {
    dispatch(getUserStart());
    if (!currentUser(users)) {
      navigate("/login");
    }
  }, [auth.currentUser?.id]);
  return (
    <>
      <section className="checkout_area section_gap">
        <div className="container">
          <div className="billing_details">
            <div className="row">
              <div className="col-lg-8">
                <h3>Billing Details</h3>
                <form 
                className="row" 
                onSubmit={submit}
                autoComplete="off">
                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="first_name"
                      name="first_name"
                      value={first_name}
                      onChange={inputChange}
                    />
                    <span
                      className="placeholder"
                      data-placeholder="First name"
                    ></span>
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="last_name"
                      name="last_name"
                      value={last_name}
                      onChange={inputChange}
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Last name"
                    ></span>
                  </div>

                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={inputChange}
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Phone number"
                    ></span>
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      onChange={inputChange}
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Email Address"
                    ></span>
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      name="country"
                      value={country}
                      onChange={inputChange}
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Country"
                    ></span>
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="add1"
                      name="add1"
                      value={add1}
                      onChange={inputChange}
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Address line 01"
                    ></span>
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="add2"
                      name="add2"
                      value={add2}
                      onChange={inputChange}
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Address line 02"
                    ></span>
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      value={city}
                      onChange={inputChange}
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Town/City"
                    ></span>
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="state"
                      name="state"
                      value={state}
                      onChange={inputChange}
                    />
                    <span
                      className="placeholder"
                      data-placeholder="State"
                    ></span>
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      name="zip"
                      value={zip}
                      onChange={inputChange}
                      placeholder="Postcode/ZIP"
                    />
                  </div>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="order_box">
                  <h2>Your Order</h2>
                  <ul className="list">
                    <li>
                      <a href="#">
                        Product
                        <span>Total</span>
                      </a>
                    </li>
                    {currentCart.items.length > 0 &&
                      currentCart.items.map((item, index) => (
                        <li key={index}>
                          <Link href="#">
                            {item.name}
                            <span className="middle">x {item.quantity}</span>
                            <span className="last">
                              ${item.final_price * item.quantity}
                            </span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <ul className="list list_2">
                    <li>
                      <a href="#">
                        Subtotal
                        <span>${currentCart.subTotal}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Tax
                        <span>{currentCart.tax}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Total
                        <span>${currentCart.grandTotal}</span>
                      </a>
                    </li>
                  </ul>

                  <button className="main_btn" href="#" 
                  onClick={submit}
                  disabled={button}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
