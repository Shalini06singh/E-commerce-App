import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
  EDIT_PRODUCT_START,
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_START,
  GET_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
  UPDATE_PRODUCT_START,
  UPDATE_PRODUCT_SUCCESS,
} from "../constant/product.constant";

//get
export const getProductStart = () => ({
  type: GET_PRODUCT_START,
});

export const getProductSuccess = (data) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: data,
});

export const getProductError = (error) => ({
  type: GET_PRODUCT_ERROR,
  payload: error,
});

//add
export const addProductStart = (data) => ({
  type: ADD_PRODUCT_START,
  payload: data,
});

export const addProductSuccess = (data) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: data,
});

export const addProductError = (error) => ({
  type: ADD_PRODUCT_ERROR,
  payload: error,
});

//edit
export const editProductStart = (index, data) => ({
  type: EDIT_PRODUCT_START,
  payload: {
    index,
    data,
  },
});

export const editProductSuccess = (index, data) => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: {
    index,
    data,
  },
});

export const editProductError = (error) => ({
  type: EDIT_PRODUCT_ERROR,
  payload: error,
});

//update
export const updateProductStart = (id, data) => ({
  type: UPDATE_PRODUCT_START,
  payload: {
    id,
    data,
  },
});

export const updateProductSuccess = (id, data) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: {
    id,
    data,
  },
});

export const updateProductError = (error) => ({
  type: UPDATE_PRODUCT_ERROR,
  payload: error,
});

//delete
export const deleteProductStart = (data) => ({
  type: DELETE_PRODUCT_START,
  payload: data,
});

export const deleteProductSuccess = (data) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: data,
});

export const deleteProductError = (error) => ({
  type: DELETE_PRODUCT_ERROR,
  payload: error,
});
