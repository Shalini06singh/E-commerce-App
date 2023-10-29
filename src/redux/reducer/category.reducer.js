import { GET_CATEGORY_SUCCESS } from "../constant/category.constant";

const initialState = {
  categories: localStorage.getItem("category")
    ? JSON.parse(localStorage.getItem("category"))
    : [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_SUCCESS:
      let data = [...action.payload];

      localStorage.setItem("category", JSON.stringify(data));

      return {
        ...state,
        categories: data,
      };


    default:
      return state;
  }
};

export default categoryReducer;
