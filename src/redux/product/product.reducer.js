import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "./product.thunk";
const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: [], 
    },
    reducers: {
        setProduct: (state, action) => {
            state.product.push({...action.payload})    
        }, 
    },
    extraReducers: {
        [fetchProduct.fulfilled]: (state, action) => {
            state.product = action.payload
            state.isError = action.payload;
        },
    }
})

export const {setProduct} = productSlice.actions;

export default productSlice.reducer;
