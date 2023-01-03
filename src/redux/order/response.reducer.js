import { createSlice } from "@reduxjs/toolkit";

const responseSlice = createSlice({
    name: 'response',
    initialState: {
        message: '',
    },
    reducers: {
        setResponseOrder: (state, action) => {
            state.message = action.payload
        },
        clearResponseOrder: (state) => {
            state.message = ''
        }
    },
})

export const {setResponseOrder, clearResponseOrder} = responseSlice.actions;

export default responseSlice.reducer;