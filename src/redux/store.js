import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from './store/cartReducer';
import email from "./store/email";
import getProduct from "./store/getProduct";
import productReducer from './store/products';
import reviewForm from "./store/reviewForm";



const rootReducer = combineReducers( {
    cart: cartReducer,
    products: productReducer,
    product: getProduct,
    reviews: reviewForm,
    email: email,
})

export const store = configureStore({
    reducer: rootReducer,

})



