import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        increment: (state, data) => {
            let articul = data.payload;
            if (state.value[articul] === undefined) state.value[articul] = 0;
            state.value[articul]++;

        },
        minus: (state, data) => {
            let articul = data.payload;
            if (state.value[articul] > 1) state.value[articul]--;
            else if (state.value[articul] === 1) delete state.value[articul];
        },
        delet: (state, data) => {
            let articul = data.payload;
            delete state.value[articul];
        }
    }
});
export const {increment, minus, delet} = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;
