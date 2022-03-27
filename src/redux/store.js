import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from './store/cartReducer';
import email from "./store/email";
import productReducer from './store/products';
import reviewForm from "./store/reviewForm";



const rootReducer = combineReducers( {
    cart: cartReducer,
    products: productReducer,
    reviews: reviewForm,
    email: email,
})

export const store = configureStore({
    reducer: rootReducer,

})



