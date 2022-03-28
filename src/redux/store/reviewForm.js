import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReview = createAsyncThunk(
    'review/fetchReview',
    async function(values, {rejectWithValue}) {
        try {
            await axios
            .post('https://training.cleverland.by/shop/product/review', {
                id: values.id,
                name: values.name,
                text: values.comment,
                rating: Number(values.ratingForm),
            })
        } catch (error) {
            return rejectWithValue(error.message)
        }
        
    }
)

const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        isLoading: false,
        isError: null,   
    },
    extraReducers: {
        [fetchReview.pending]: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        [fetchReview.fulfilled]: (state) => {
            state.isLoading = false;
            state.isError = false;
            // window.location.reload()
        },
        [fetchReview.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload
        },
    }
})

export const {setReview} = reviewSlice.actions;

export default reviewSlice.reducer;
