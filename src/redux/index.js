import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './basket/reducer';

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})