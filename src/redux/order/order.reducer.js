import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        step: 0,
        products: [
            
        ],
        deliveryMethod: "",
        paymentMethod: "",
        totalPrice: "",
        phone: "",
        email: "",
        country: "",
        cashEmail: "",
        city: "",
        street: "",
        house: "",
        apartment: "",
        postcode: "",
        storeAddress: "",
        card: "",
        cardDate: "",
        cardCVV: ""
    },
    reducers: {
        setProductsOrder: (state, action) => {
            action.payload.forEach((item, index) => {
                state.products[index] = {}
                state.products[index].name = item.name
                state.products[index].size = item.isActiveSize
                state.products[index].color = item.activeColor
                state.products[index].quantity = item.quantity
            })
        },
        clearProductsOrder: (state) => {
            state.products = []
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload
        },
        orderStepPlus: (state) => {
            state.step = state.step + 1
        },
        orderStepMinus: (state) => {
            state.step = state.step - 1
        },
        stepOnItemsInCart: (state) => {
            state.step = 0
        },
        setDeliveryInfo: (state, action) => {
            state.deliveryMethod = action.payload.values.deliveryMethod
            state.phone = action.payload.values.phone
            state.email = action.payload.values.email
            action.payload.values.country ? state.country = action.payload.values.country : state.country = action.payload.selectCountry
            state.city = action.payload.values.city
            state.street = action.payload.values.street
            state.house = action.payload.values.house
            state.apartment = action.payload.values.apartment
            state.storeAddress = action.payload.storeAddress
            state.postcode = action.payload.values.postcode
        },
    },
})

export const {
    setProductsOrder, 
    clearProductsOrder, 
    orderStepPlus, 
    orderStepMinus, 
    setDeliveryInfo, 
    setPaymentInfo, 
    setTotalPrice, 
    stepOnItemsInCart,
} = orderSlice.actions;

export default orderSlice.reducer;