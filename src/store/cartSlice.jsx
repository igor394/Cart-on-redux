import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers:{
        increment: (state, data) => {
            let articul = data.payload;
            if (state.value[articul] === undefined) state.value[articul] = 0;
            state.value[articul]++;

        },
        minus: (state, data) => {
            let artic = data.payload;
            if (state.value[artic] > 1) state.value[artic]--;
            else if (state.value[artic] === 1) delete state.value[artic];
        },
        delet: (state, data) => {
            let artic = data.payload;
            delete state.value[artic];
        }
    }
});
export const {increment, minus, delet} = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;
