import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async function(id, {rejectWithValue}) {
        try {
            const response = await fetch(`https://training.cleverland.by/shop/product/${id}`);
            if (!response.ok) {
                throw new Error('Ошибка получения данных')
            }
            const data = await response.json();
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
        
    }
)

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
