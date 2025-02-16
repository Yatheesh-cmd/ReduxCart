import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchProductThunk = createAsyncThunk('productSlice/fetchProductThunk', async () => {
    const result = await axios.get('https://dummyjson.com/products');
    sessionStorage.setItem("products", JSON.stringify(result.data.products));
    return result.data.products;
});

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        pending: false,
        productstemp: [],
        error: "",
        productsPerPage: 10,
        currentPage: 1
    },
    reducers: {
        searchProduct: (state, action) => {
            if (action.payload == "") {
                state.products = state.productstemp;  // Reset products when search is cleared
            } else {
                state.products = state.productstemp.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase())
                );
            }
        },
        leftShift: (state) => {
            if (state.currentPage > 1) {
                state.currentPage--;
            }
        },
        rightShift: (state) => {
            if (state.currentPage < Math.ceil(state.products.length / state.productsPerPage)) {
                state.currentPage++;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductThunk.pending, (state) => {
            state.pending = true;
            state.products = [];
            state.error = "";
        });
        builder.addCase(fetchProductThunk.fulfilled, (state, action) => {
            state.pending = false;
            state.products = action.payload;
            state.productstemp = action.payload;  // Store original product list
            state.error = "";
        });
        builder.addCase(fetchProductThunk.rejected, (state) => {
            state.pending = false;
            state.products = [];
            state.error = "API call failed";
        });
    }
});

export default productSlice.reducer;
export const { searchProduct, rightShift, leftShift } = productSlice.actions;







//createAsyncThunk-> accepts an action type string and a function that returns a promise, 
// and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise
//thunk-extraReducers(a simple callback fun)