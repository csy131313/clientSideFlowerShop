import { createSlice } from "@reduxjs/toolkit";
const initialState={
    arr:[]
}
const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        // saveProductsInClinet:(state, action)=>{
        //     state.arr=action.payload
        // },
        // addProductsToClinet:(state, action)=>{
        //     state.arr.push(action.payload)
        // },
        // deleteProductsFromClinet:(state, action)=>{
        //    let index=state.arr.findInex(it=>it._id==action.payload);
        //    state.arr.splice(index,1)
        // }
    }
});
export const {saveProductsInClinet,addProductsToClinet,deleteProductsFromClinet}=productSlice.actions;
export default productSlice.reducer;