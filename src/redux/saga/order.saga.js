import { put, takeLatest } from "redux-saga/effects";


import { GET_ORDER_START, PLACE_ORDER_START } from "../constant/order.constant";
import { getOrderError, getOrderStart, getOrderSuccess, placeOrderError } from "../action/order.action";
import { getOrderFromFirebase, placeOrderToFireBase } from "../service/order.service";
import { removeCartSuccess } from "../action/cart.action";





function* getOrders() {
  try {
    let data = yield getOrderFromFirebase();
    yield put(getOrderSuccess(data))

  } catch (error) {
    yield put(getOrderError(error.message));
  }
}
function* placeOrder({ payload }) {
    try {
      let result = yield placeOrderToFireBase(payload);
      yield put(getOrderStart())
      yield put(removeCartSuccess())

    } catch (error) {
      yield put(placeOrderError(error.message));
    }
  } 

  

export function* order() {
  yield takeLatest(PLACE_ORDER_START, placeOrder);
  yield takeLatest(GET_ORDER_START, getOrders);
 
}
