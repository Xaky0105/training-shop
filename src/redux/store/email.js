import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEmail = createAsyncThunk(
    'email/fetchEmail',
    async function(values, {rejectWithValue}) {
        try {
            await axios
            .post('https://training.cleverland.by/shop/email', {
                email: values.email
            })
        } catch (error) {
            return rejectWithValue(error.message)
        }
        
    }
)

const emailSlice = createSlice({
    name: 'email',
    initialState: {
        isLoading: false,
        isError: null, 
        isSent: false  
    },
    extraReducers: {
        [fetchEmail.pending]: (state) => {
            state.isLoading = true;
            state.isError = false;
            state.isSent = false;
        },
        [fetchEmail.fulfilled]: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSent = true;
        },
        [fetchEmail.rejected]: (state, action) => {
            state.isLoading = false;
            state.isSent = false;
            state.isError = action.payload
        },
    }
})

export const {setEmail} = emailSlice.actions;

export default emailSlice.reducer;