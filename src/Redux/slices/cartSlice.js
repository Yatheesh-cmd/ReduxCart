import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            const existing=state.cart.find(item=>item.id==action.payload.id)
            if(existing){
                existing.quantity++
                alert("item updated to cart")
            }
            else{
                state.cart.push({...action.payload,quantity:1})
                alert("item added to cart!!")
            }
        },
        removeFromCart:(state,action)=>{
            state.cart=state.cart.filter(item=>item.id!=action.payload)

        },
        increaseQty:(state,action)=>{
            const existing=state.cart.find(item=>item.id==action.payload)
            existing.quantity++
        },
        decreaseQty:(state,action)=>{
            const existing=state.cart.find(item=>item.id==action.payload)
            if(existing.quantity==1){
                const existing=state.cart.find(item=>item.id!=action.payload)
            }
            else{
                existing.quantity--
            }
        },
        checkout:(state)=>{
            state.cart=[]
            alert("check out completed!!")
        }
    }
})
export default cartSlice.reducer
export const {addToCart,removeFromCart,increaseQty,decreaseQty,checkout}=cartSlice.actions