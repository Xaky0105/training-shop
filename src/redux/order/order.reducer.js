import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        step: 0,
        products: [
            
        ],
        deliveryMethod: "Pickup from post offices",
        paymentMethod: "PayPal",
        totalPrice: "320",
        phone: "+375298159396",
        email: "geageagtest@mail.ru",
        country: "Belarus",
        cashEmail: "ttttt@mail.ru",
        city: "Orsha",
        street: "ул. пушкина дом калатушкина",
        house: "15",
        apartment: "2",
        postcode: "252222",
        storeAddress: "store address",
        card: "7825 5258 8588 0000 5255",
        cardDate: "25/24",
        cardCVV: "242"
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
        orderStepPlus: (state) => {
            state.step = state.step + 1
        },
        orderStepMinus: (state) => {
            state.step = state.step - 1
        },
        setDeliveryInfo: (state, action) => {
            state.deliveryMethod = action.payload.deliveryMethod
            state.phone = action.payload.phone
            state.email = action.payload.email
            state.country = action.payload.country
            state.city = action.payload.city
            state.street = action.payload.street
            state.house = action.payload.house
            state.apartment = action.payload.apartment
            state.storeAddress = action.payload.storeAddress
            state.postcode = action.payload.postcode
        },
        setPaymentInfo: (state, action) => {
            state.paymentMethod = action.payload.paymentMethod
            state.card = action.payload.card
            state.cardCVV = action.payload.cardCVV
            state.cardDate = action.payload.cardDate
            state.cashEmail = action.payload.cashEmail
        }
    },
})

export const {setProductsOrder, clearProductsOrder, orderStepPlus, orderStepMinus, setDeliveryInfo, setPaymentInfo} = orderSlice.actions;

export default orderSlice.reducer;