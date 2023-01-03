import { createSlice } from "@reduxjs/toolkit";
import { fetchCountries } from "./countries.thunk";
const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        countries: [],
        address: [],
    },
    reducers: {
        setCountries: (state, action) => {
            state.address = []
            state.address.push(action.payload)      
        }, 
    },
    extraReducers: {
        [fetchCountries.fulfilled]: (state, action) => {
            state.countries = action.payload
        },
    }
})
export const {setCountries} = countriesSlice.actions;
export default countriesSlice.reducer;