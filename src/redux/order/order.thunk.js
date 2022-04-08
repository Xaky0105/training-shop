// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchOrder = createAsyncThunk(
//     'order/fetchOrder',
//     async function(value, {rejectWithValue}) {
//         try {
//             await axios.post('https://training.cleverland.by/shop/product/cart', {
//                 products: [
//                     {
//                         name: "Такая то майка",
//                         size: "XL",
//                         color: "Black",
//                         quantity: 2 
//                     }
//                 ],
//                 deliveryMethod: "Pickup from post offices",
//                 paymentMethod: "PayPal",
//                 totalPrice: "320",
//                 phone: "+375298159396",
//                 email: "geageagtest@mail.ru",
//                 country: "Belarus",
//                 cashEmail: "ttttt@mail.ru",
//                 city: "Orsha",
//                 street: "ул. пушкина дом калатушкина",
//                 house: "15",
//                 apartment: "2",
//                 postcode: "252222",
//                 storeAddress: "store address",
//                 card: "7825 5258 8588 0000 5255",
//                 cardDate: "25/24",
//                 cardCVV: "242"
               
//             })
//         } catch (error) {
//             return rejectWithValue(error.message)
//         }
//     }
// )