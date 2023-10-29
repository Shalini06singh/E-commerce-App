import { put, takeLatest } from "redux-saga/effects";
import {
  ADD_PRODUCT_START,
  DELETE_PRODUCT_START,
  GET_PRODUCT_START,
  UPDATE_PRODUCT_START,
} from "../constant/product.constant";
import {
  addProductToFireBase,
  deleteProductFromFirebase,
  getProductFromFirebase,
  updateProductFromFirebase,
 
 
} from "../service/product.service";
import {
  addProductError,
  deleteProductError,
  getProductError,
  getProductStart,
  getProductSuccess,
  updateProductError,
} from "../action/product.action";



function* getProduct() {
  try {
     let data =  yield getProductFromFirebase()
     yield put(getProductSuccess(data))

  } catch (error) {
      yield put(getProductError(error.message))
  }
}

function* addProduct({payload}) {
  try {
     let result =  yield addProductToFireBase(payload)
     console.log("fsafasdf");
     yield put(getProductStart())
  } catch (error) {
      yield put(addProductError(error.message))
  }
}

function* updateProduct({payload}) {
  try {
     let result =  yield updateProductFromFirebase(payload.id, payload.data)
     yield put(getProductStart())
  } catch (error) {
      yield put(updateProductError(error.message))
  }
}

function* deleteProduct({payload}) {
  try {
     let result =  yield deleteProductFromFirebase(payload)
     yield put(getProductStart())
  } catch (error) {
      yield put(deleteProductError(error.message))
  }
}

export function* product() {
  yield takeLatest(GET_PRODUCT_START, getProduct)
  yield takeLatest(ADD_PRODUCT_START, addProduct)
  yield takeLatest(UPDATE_PRODUCT_START, updateProduct)
  yield takeLatest(DELETE_PRODUCT_START, deleteProduct)
}