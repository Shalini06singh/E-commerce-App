import { put, takeLatest } from "redux-saga/effects";
import {
  ADD_CATEGORY_START,
  DELETE_CATEGORY_START,
  GET_CATEGORY_START,
  UPDATE_CATEGORY_START,
} from "../constant/category.constant";
import { addCategoryToFireBase, deleteCategoryFromFirebase, getCategoryFromFirebase, updateCategoryFromFirebase } from "../service/category.service";
import { addCategoryError, deleteCategoryError, getCategoryError, getCategoryStart, getCategorySuccess, updateCategoryError } from "../action/category.action";

function* getCategory() {
  try {
    let data = yield getCategoryFromFirebase();
    // console.log(data);
    yield put(getCategorySuccess(data))

  } catch (error) {
    yield put(getCategoryError(error.message));
  }
}
function* addCategory({ payload }) {
    try {
      let result = yield addCategoryToFireBase(payload);
      yield put(getCategoryStart())
    } catch (error) {
      yield put(addCategoryError(error.message));
    }
  } 

  function* updateCategory({ payload }) {
    try {
      let result = yield updateCategoryFromFirebase(payload.id , payload.data);
      yield put(getCategoryStart())
    } catch (error) {
      yield put(updateCategoryError(error.message));
    }
  }

  
  function* deleteCategory({ payload }) {
    try {
      let result = yield deleteCategoryFromFirebase(payload);
      yield put(getCategoryStart())
    } catch (error) {
      yield put(deleteCategoryError(error.message));
    }
  }

export function* category() {
  yield takeLatest(GET_CATEGORY_START, getCategory);
  yield takeLatest(ADD_CATEGORY_START, addCategory);
  yield takeLatest(UPDATE_CATEGORY_START, updateCategory);
  yield takeLatest(DELETE_CATEGORY_START, deleteCategory)
}
