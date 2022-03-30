import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReview = createAsyncThunk(
    'review/fetchReview',
    async function(review, {rejectWithValue}) {
        try {
            await axios
            .post('https://training.cleverland.by/shop/product/review', {
                id: review.id,
                name: review.name,
                text: review.comment,
                rating: Number(review.ratingForm)
            })
        } catch (error) {
            return rejectWithValue(error.message) 
        }
        
    }
)

const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        isLoading: null,
        isError: null,
        num: null
    },
    extraReducers: {
        [fetchReview.pending]: (state) => {
            state.num = null
            state.isLoading = true;
            state.isError = false; 
        },
        [fetchReview.fulfilled]: (state) => {
            state.num = true
            state.isLoading = false;
            state.isError = false; 
        },
        [fetchReview.rejected]: (state) => {
            state.isLoading = false;
            state.isError = true
        },
    }
})

// export const {setReview} = reviewSlice.actions;

export default reviewSlice.reducer;
