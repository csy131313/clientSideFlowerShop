import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    basket: [],
    address: ""
}

let orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        //הוספה לסל מחיקה עדכו ןכמות
        // addToBasket: (state, action) => {
        //     const { _id } = action.payload;
        //     const existingProductIndex = state.basket.findIndex(item => item._id == _id);
        
        //     if (existingProductIndex != -1) {
        //         state.basket[existingProductIndex].quantity += 1; // Increase quantity if product already exists
        //     } else {
        //         state.basket.push({ ...action.payload, quantity: 1 }); // Add product with quantity 1 if it doesn't exist
        //     }
        // },
        addToBasket: (state, action) => {
            const { _id } = action.payload;
            const existingProductIndex = state.basket.findIndex(item => item._id == _id);
        
            if (existingProductIndex != -1) {
                const newBasket = state.basket.map((item, index) => {
                    if (index === existingProductIndex) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    }
                    return item;
                });
                return { ...state, basket: newBasket };
            } else {
                return { ...state, basket: [...state.basket, { ...action.payload, quantity: 1 }] };
            }
        },
        
        removeFromBasket: (state, action) => {
            const { _id } = action.payload;
            const updatedBasket = state.basket.filter(item => item._id !== _id);
            return { ...state, basket: updatedBasket };
        }
,        
        updateQuantity: (state, action) => {
            const { _id, quantity } = action.payload;
            const productToUpdate = state.basket.find(item => item._id == _id);

            if (productToUpdate) {
                productToUpdate.quantity = quantity;
            }
        }
        
        //לכתוב גם פעולות לטיפול בפרטי ההזמנ הוהכתובת וכ'

    }
})

export const { addToBasket,removeFromBasket,updateQuantity } = orderSlice.actions;
export default orderSlice.reducer;