import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEmail = createAsyncThunk(
    'email/fetchEmail',
    async function(sub, {rejectWithValue}) {
        try {
            await axios.post('https://training.cleverland.by/shop/email', {
                email: sub.email,   
            })
            sub.resetForm()
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)