import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            //mutating the state over here
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0; //[]
        }
    }

});

// exported actions
export const {addItem, removeItem, clearCart} = cartSlice.actions;

// exported reducer
export default cartSlice.reducer;
