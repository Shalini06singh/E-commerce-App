import { GET_ORDER_SUCCESS } from "../constant/order.constant"


const initialState = {
    orders: localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [],
    
}

const orderReducer = (state = initialState, action) => {
//    console.log(action);
    switch (action.type) {
        case GET_ORDER_SUCCESS:
            let data = [...action.payload]
            localStorage.setItem('orders' , JSON.stringify(data))
            return {
                ...state,
                orders: data
            }
       
        
        default:
            return state
    }
}

export default orderReducer;
