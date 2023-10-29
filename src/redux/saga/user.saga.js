import { put, takeLatest } from "redux-saga/effects";
import { addUserError, deleteUserError, getUserError, getUserStart, getUserSuccess, updateUserError } from "../action/user.action";
import { ADD_USER_START, DELETE_USER_START, GET_USER_START, UPDATE_USER_START } from "../constant/user.constant";
import { addUserToFireBase, deleteUserFromFirebase, getUserFromFirebase, updateUserFromFirebase } from "../service/user.service";

// import { addUserToFireBase, deleteUserFromFirebase, getUserFromFirebase, updateUserFromFirebase } from "../service/User.service";



function* getUser() {
  try {
    let data = yield getUserFromFirebase();
    // console.log(data);
    yield put(getUserSuccess(data))

  } catch (error) {
    yield put(getUserError(error.message));
  }
}
function* addUser({ payload }) {
    try {
      let result = yield addUserToFireBase(payload);
      yield put(getUserStart())
    } catch (error) {
      yield put(addUserError(error.message));
    }
  } 

  function* updateUser({ payload }) {
    try {
      let result = yield updateUserFromFirebase(payload.id , payload.data);
      yield put(getUserStart())
    } catch (error) {
      yield put(updateUserError(error.message));
    }
  }

  
  function* deleteUser({ payload }) {
    try {
      let result = yield deleteUserFromFirebase(payload);
      yield put(getUserStart())
    } catch (error) {
      yield put(deleteUserError(error.message));
    }
  }

export function* user() {
  yield takeLatest(GET_USER_START, getUser);
  yield takeLatest(ADD_USER_START, addUser);
  yield takeLatest(UPDATE_USER_START, updateUser);
  yield takeLatest(DELETE_USER_START, deleteUser)
}
