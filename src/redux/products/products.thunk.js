import { createAsyncThunk } from "@reduxjs/toolkit";

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