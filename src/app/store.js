import { configureStore } from "@reduxjs/toolkit";
import OrdersSlice from "../feature/Orders/OrdersSlice.js";
import productSlice from "../feature/products/productSlice.js";
import UserSlice from "../feature/Users/UserSlice.js";
export const store=configureStore({
    reducer:{
        product:productSlice,
        order:OrdersSlice,
        user:UserSlice

    }
})