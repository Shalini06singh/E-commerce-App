
import { ADD_USER_ERROR, ADD_USER_START, ADD_USER_SUCCESS, DELETE_USER_ERROR, DELETE_USER_START, DELETE_USER_SUCCESS, EDIT_USER_ERROR, EDIT_USER_START, EDIT_USER_SUCCESS, GET_USER_ERROR, GET_USER_START, GET_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_START, UPDATE_USER_SUCCESS } from "../constant/user.constant"


 
//get
export const getUserStart = () => ({
    type: GET_USER_START
})

export const getUserSuccess = (data) => ({
    type: GET_USER_SUCCESS,
    payload: data
})

export const getUserError = (error) => ({
    type: GET_USER_ERROR,
    payload: error
})



//add
export const addUserStart = (data) => ({
    type: ADD_USER_START,
    payload: data
})

export const addUserSuccess = (data) => ({
    type: ADD_USER_SUCCESS,
    payload: data
})

export const addUserError = (error) => ({
    type: ADD_USER_ERROR,
    payload: error
})



//edit
export const editUserStart = (index,data) => ({
    type: EDIT_USER_START,
    payload: {
        index,
        data
    }
})

export const editUserSuccess = (index,data) => ({
    type: EDIT_USER_SUCCESS,
    payload: {
        index, 
        data
    }
})

export const editUserError = (error) => ({
    type: EDIT_USER_ERROR,
    payload: error
})



//update
export const updateUserStart = (id,data) => ({
    type: UPDATE_USER_START,
    payload: {
        id,
        data
    }
})

export const updateUserSuccess = (id,data) => ({
    type: UPDATE_USER_SUCCESS,
    payload: {
        id, 
        data
    }
})

export const updateUserError = (error) => ({
    type: UPDATE_USER_ERROR,
    payload: error
})



//delete
export const deleteUserStart = (data) => ({
    type: DELETE_USER_START,
    payload: data
})

export const deleteUserSuccess = (data) => ({
    type: DELETE_USER_SUCCESS,
    payload: data
})

export const deleteUserError = (error) => ({
    type: DELETE_USER_ERROR,
    payload: error
})
