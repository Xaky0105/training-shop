import { createSlice } from "@reduxjs/toolkit";
import { fetchReview } from "./review.thunk";

const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        isLoading: false,
        isError: false,
        num: '',
    },
    reducers: {
        clearReviewError: (state) => {
            state.isError = null;
        },
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

export const {clearReviewError} = reviewSlice.actions;

export default reviewSlice.reducer;
