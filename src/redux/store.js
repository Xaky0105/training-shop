import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from './store/cartReducer';
import productReducer from './store/products'



const rootReducer = combineReducers( {
    cart: cartReducer,
    products: productReducer
})

export const store = configureStore({
    reducer: rootReducer,

})



