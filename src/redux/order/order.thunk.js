import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setResponseOrder } from "./response.reducer";

export const fetchOrder = createAsyncThunk(
    'order/fetchOrder',
    async function({order, values}, {dispatch}) {
        try {
            await axios.post('https://training.cleverland.by/shop/cart', {
                products: [
                    {
                        name: order.products[0].name,
                        size: order.products[0].size,
                        color: order.products[0].color,
                        quantity: order.products[0].quantity 
                    }
                ],
                deliveryMethod: order.deliveryMethod,
                paymentMethod: values.paymentMethod,
                totalPrice: order.totalPrice,
                phone: order.phone,
                email: order.email,
                country: order.country,
                cashEmail: values.cashEmail,
                city: order.city,
                street: order.street,
                house: order.house,
                apartment: order.apartment,
                postcode: order.postcode,
                storeAddress: order.storeAddress,
                card: values.card,
                cardDate: values.cardDate,
                cardCVV: values.cardCVV
               
            })
            .then(response => dispatch(setResponseOrder(response.data.message)))
        } catch (error) {
            return dispatch(setResponseOrder(error.response.data.message)) 
        }
    }
)