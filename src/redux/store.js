import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cart/cart.reducer';
import emailReducer from "./email/email.reducer";
import productReducer from "./product/product.reducer";
import productsReducer from './products/products.reducer';
import formReducer from "./review/review.reducer";

const rootReducer = combineReducers( {
    cart: cartReducer,
    products: productsReducer,
    product: productReducer,
    reviews: formReducer,
    email: emailReducer,
})

export const store = configureStore({
    reducer: rootReducer,

})



