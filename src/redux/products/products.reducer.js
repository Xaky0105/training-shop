import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./products.thunk";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoading: false,
        isError: null,   
    },
    reducers: {
        setProducts: (state, action) => {
            state.products.push({...action.payload})    
        }, 
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.products = action.payload
            state.isError = false;
        },
        [fetchProducts.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload
        },
    }
})

export const {setProducts} = productsSlice.actions;

export default productsSlice.reducer;
