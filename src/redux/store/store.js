import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducer/rootReducer";
import createSagaMiddleware from "redux-saga"
import { root } from "../saga/root.saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer(),
    middleware: [sagaMiddleware],
    //developer tools
    devTools: process.env.NODE_ENV === 'development' ? true : false
})

sagaMiddleware.run(root)

export default store;