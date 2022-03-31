import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push({...action.payload})
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(item => item.url !== action.payload.url || item.isActiveSize !== action.payload.isActiveSize )
        },
        plusQuantity: (state, action) => {
            state.itemsInCart.map((item) =>
                (JSON.stringify(item) === JSON.stringify(action.payload))
                    ?  (item.quantity += 1)
                    : item.quantity
                );  
        },
        minusQuantity: (state, action) => {
            state.itemsInCart.map((item) =>
                (JSON.stringify(item) === JSON.stringify(action.payload))
                    ?  (item.quantity -= 1)
                    : item.quantity
                );
        },
    }
})

export const {setItemInCart, deleteItemFromCart, plusQuantity, minusQuantity} = cartSlice.actions;
export default cartSlice.reducer;