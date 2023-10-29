import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ShopCategory from "../pages/ShopCategory";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Tracking from "../pages/Tracking";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Auth from "../pages/admin/Auth";
import AddOrEditProduct from "../pages/admin/products/AddOrEditProduct";
import Categories from "../pages/admin/categories/Categories";
import AddOrEditCategory from "../pages/admin/categories/AddOrEditCategory";
import Users from "../pages/admin/users/Users";
import AddOrEditUser from "../pages/admin/users/AddOrEditUser";
import Orders from "../pages/admin/orders/Orders";
import OrderView from "../pages/admin/orders/OrderView";
import Profile from "../pages/admin/Profile";
import Product from "../pages/admin/products/Product";
import EditProfile from "../pages/admin/EditProfile";
import Thank from "../pages/Thank";

export default function Router() {
  return (
    <Routes>
      {/* home page */}
      <Route path="/" element={<Home />} />
      {/* shop category page */}
      <Route path="/shop-category" element={<ShopCategory />} />
      {/* product detail page */}
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      {/* cart page */}
      <Route path="/cart" element={<Cart />} />
      {/* checkout page */}
      <Route path="/checkout" element={<Checkout/>} />
      {/* thanking page */}
      <Route path="/thank" element={<Thank/>} />

      {/* Traking page */}
      <Route path="/tracking" element={<Tracking />} />
      {/* Login page */}
      <Route path="/login" element={<Login />} />
      {/* Register page */}
      <Route path="/register" element={<Register />} />

      <Route path='/admin' element={<Auth />}>
        {/* dashboard Page */}
        <Route path='profile' element={<Profile />} />
        <Route path='profile/edit' element={<EditProfile />} />


        {/* product page routes */}
        <Route path='products' element={<Product />} />
        <Route path='products/create' element={<AddOrEditProduct />} />
        <Route path='products/edit/:id' element={<AddOrEditProduct />} />

        {/* category page routes */}
        <Route path='category' element={<Categories />} />
        <Route path='category/create' element={<AddOrEditCategory />} />
        <Route path='category/edit/:id' element={<AddOrEditCategory />} />

        {/* users page routes */}
        <Route path='users' element={<Users />} />
        <Route path='users/create' element={<AddOrEditUser />} />
        <Route path='users/edit/:id' element={<AddOrEditUser />} />

        {/* orders page routes */}
        <Route path='orders' element={<Orders />} />
        <Route path='orders/view/:id' element={<OrderView />} />
        

        </Route>
    </Routes>
  );
}
