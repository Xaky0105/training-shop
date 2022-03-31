import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReview = createAsyncThunk(
    'review/fetchReview',
    async function(review, {rejectWithValue}) {
        try {
            await axios
            .post('https://training.cleverland.by/shop/product/rreview', {
                id: review.id,
                name: review.name,
                text: review.comment,
                rating: Number(review.ratingForm)
            })
            review.resetForm()
        } catch (error) {
            return rejectWithValue(error.message) 
        }
    }
)