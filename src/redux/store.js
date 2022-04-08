import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cart/cart.reducer';
import emailReducer from "./email/email.reducer";
import productReducer from "./product/product.reducer";
import productsReducer from './products/products.reducer';
import formReducer from "./review/review.reducer";
import orderReducer from "./order/order.reducer";
import countriesReducer from "./countries/countries.reducer";

const rootReducer = combineReducers( {
    cart: cartReducer,
    products: productsReducer,
    product: productReducer,
    reviews: formReducer,
    email: emailReducer,
    order: orderReducer,
    countries: countriesReducer
})

export const store = configureStore({
    reducer: rootReducer,

})



