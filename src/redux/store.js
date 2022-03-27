import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from './store/cartReducer';
import productReducer from './store/products';
import reviewForm from "./store/reviewForm";



const rootReducer = combineReducers( {
    cart: cartReducer,
    products: productReducer,
    reviews: reviewForm
})

export const store = configureStore({
    reducer: rootReducer,

})



