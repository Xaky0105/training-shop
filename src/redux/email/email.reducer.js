import { createSlice } from "@reduxjs/toolkit";
import { fetchEmail } from "./email.thunk";

const emailSlice = createSlice({
    name: 'email',
    initialState: {
        isLoading: null,
        isError: null, 
        isSent: null, 
    },
    reducers: {
        clear: (state) => {
            state.isSent = null;
            state.isError = null;
        },
    },
    extraReducers: {
        [fetchEmail.pending]: (state, action) => {
            state.isLoading = action.meta.arg.id;
            state.isError = false;
            state.isSent = false;
        },
        [fetchEmail.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSent = action.meta.arg.id;
        },
        [fetchEmail.rejected]: (state , action) => {
            state.isLoading = false;
            state.isSent = false;
            state.isError = action.meta.arg.id
        },
    }
})

export const {clear} = emailSlice.actions;

export default emailSlice.reducer;