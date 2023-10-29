import { 
    ADD_CATEGORY_ERROR, 
    ADD_CATEGORY_START, 
    ADD_CATEGORY_SUCCESS, 
    DELETE_CATEGORY_ERROR, 
    DELETE_CATEGORY_START, 
    DELETE_CATEGORY_SUCCESS, 
    EDIT_CATEGORY_ERROR, 
    EDIT_CATEGORY_START, 
    EDIT_CATEGORY_SUCCESS, 
    GET_CATEGORY_ERROR, 
    GET_CATEGORY_START, 
    GET_CATEGORY_SUCCESS, 
    UPDATE_CATEGORY_ERROR, 
    UPDATE_CATEGORY_START, 
    UPDATE_CATEGORY_SUCCESS 
} from "../constant/category.constant";
//get
export const getCategoryStart = () => ({
    type: GET_CATEGORY_START
})

export const getCategorySuccess = (data) => ({
    type: GET_CATEGORY_SUCCESS,
    payload: data
})

export const getCategoryError = (error) => ({
    type: GET_CATEGORY_ERROR,
    payload: error
})



//add
export const addCategoryStart = (data) => ({
    type: ADD_CATEGORY_START,
    payload: data
})

export const addCategorySuccess = (data) => ({
    type: ADD_CATEGORY_SUCCESS,
    payload: data
})

export const addCategoryError = (error) => ({
    type: ADD_CATEGORY_ERROR,
    payload: error
})



//edit
export const editCategoryStart = (index,data) => ({
    type: EDIT_CATEGORY_START,
    payload: {
        index,
        data
    }
})

export const editCategorySuccess = (index,data) => ({
    type: EDIT_CATEGORY_SUCCESS,
    payload: {
        index, 
        data
    }
})

export const editCategoryError = (error) => ({
    type: EDIT_CATEGORY_ERROR,
    payload: error
})



//update
export const updateCategoryStart = (id,data) => ({
    type: UPDATE_CATEGORY_START,
    payload: {
        id,
        data
    }
})

export const updateCategorySuccess = (id,data) => ({
    type: UPDATE_CATEGORY_SUCCESS,
    payload: {
        id, 
        data
    }
})

export const updateCategoryError = (error) => ({
    type: UPDATE_CATEGORY_ERROR,
    payload: error
})



//delete
export const deleteCategoryStart = (data) => ({
    type: DELETE_CATEGORY_START,
    payload: data
})

export const deleteCategorySuccess = (data) => ({
    type: DELETE_CATEGORY_SUCCESS,
    payload: data
})

export const deleteCategoryError = (error) => ({
    type: DELETE_CATEGORY_ERROR,
    payload: error
})
