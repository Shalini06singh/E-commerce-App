import {
  GET_PRODUCT_START,
  GET_PRODUCT_SUCCESS,
} from "../constant/product.constant";

const initialState = {
  products: localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      let data = [...action.payload];
      localStorage.setItem("products", JSON.stringify(data));
      return {
        ...state,
        products: data,
      };

    default:
      return state;
  }
};

export default productReducer;
