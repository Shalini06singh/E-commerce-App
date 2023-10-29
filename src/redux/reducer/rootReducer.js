import {combineReducers} from "@reduxjs/toolkit";
import categoryReducer from './category.reducer';
import productReducer from "./product.reducer";
import userReducer from "./users.reducer";
import cartReducer from "./cart.reducer";
import orderReducer from "./order.reducer";

export const rootReducer = () => combineReducers({
    category: categoryReducer,
    product : productReducer,
    user : userReducer,
    cart : cartReducer,
    order: orderReducer

})
