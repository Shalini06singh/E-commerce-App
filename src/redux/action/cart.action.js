import { ADD_CART_ERROR, ADD_CART_START, ADD_CART_SUCCESS, DELETE_CART_ERROR, DELETE_CART_START, DELETE_CART_SUCCESS, EDIT_CART_ERROR, EDIT_CART_START, EDIT_CART_SUCCESS, GET_CART_ERROR, GET_CART_START, GET_CART_SUCCESS, REMOVE_CART_ERROR, REMOVE_CART_START, REMOVE_CART_SUCCESS, UPDATE_CART_ERROR, UPDATE_CART_START, UPDATE_CART_SUCCESS } from "../constant/cart.constant"



 
//get
export const getCartStart = () => ({
    type: GET_CART_START
})

export const getCartSuccess = (data) => ({
    type: GET_CART_SUCCESS,
    payload: data
})

export const getCartError = (error) => ({
    type: GET_CART_ERROR,
    payload: error
})



//add
export const addCartStart = (data) => ({
    type: ADD_CART_START,
    payload: data
})

export const addCartSuccess = (data) => ({
    type: ADD_CART_SUCCESS,
    payload: data
})

export const addCartError = (error) => ({
    type: ADD_CART_ERROR,
    payload: error
})



//edit
export const editCartStart = (index,data) => ({
    type: EDIT_CART_START,
    payload: {
        index,
        data
    }
})

export const editCartSuccess = (index,data) => ({
    type: EDIT_CART_SUCCESS,
    payload: {
        index, 
        data
    }
})

export const editCartError = (error) => ({
    type: EDIT_CART_ERROR,
    payload: error
})



//update
export const updateCartStart = (id,data) => ({
    type: UPDATE_CART_START,
    payload: {
        id,
        data
    }
})

export const updateCartSuccess = (id,data) => ({
    type: UPDATE_CART_SUCCESS,
    payload: {
        id, 
        data
    }
})

export const updateCartError = (error) => ({
    type: UPDATE_CART_ERROR,
    payload: error
})



//delete
export const deleteCartStart = (data) => ({
    type: DELETE_CART_START,
    payload: data
})

export const deleteCartSuccess = (data) => ({
    type: DELETE_CART_SUCCESS,
    payload: data
})

export const deleteCartError = (error) => ({
    type: DELETE_CART_ERROR,
    payload: error
})


//remove
export const removeCartStart = () => ({
    type: REMOVE_CART_START,
  
})

export const removeCartSuccess = () => ({
    type: REMOVE_CART_SUCCESS,
   
})

export const removeCartError = (error) => ({
    type: REMOVE_CART_ERROR,
    payload: error
})
