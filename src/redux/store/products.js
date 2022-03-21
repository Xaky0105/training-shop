import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch("https://training.cleverland.by/shop/products");
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
