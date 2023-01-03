import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setCountries } from "../countries/countries.reducer";

export const fetchAddress = createAsyncThunk(
    'address/fetchAddress',
    async function(value, {rejectWithValue, dispatch}) {
        try {
            await axios.post('https://training.cleverland.by/shop/search/cities', {
                city: value.storeAddress,
                country: value.selectCountry,   
            })
            .then((response) => {
                dispatch(setCountries(response.data))
            }) 
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)