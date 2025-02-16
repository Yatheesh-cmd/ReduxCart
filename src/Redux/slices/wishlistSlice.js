import { createSlice } from "@reduxjs/toolkit";

const wishSlice=createSlice({
    name:'wishlist',
    initialState:{
        wishlist:[]
    },
    reducers:{
        addToWishList:(state,action)=>{
            state.wishlist.push(action.payload)
        },
        removeFromWishList:(state,action)=>{
            state.wishlist=state.wishlist.filter(item=>item.id!=action.payload)
        }
    }
})

export default wishSlice.reducer
export const{addToWishList,removeFromWishList}=wishSlice.actions