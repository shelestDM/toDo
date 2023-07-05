import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isBusketVisible: false,
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers:{
        toggleBusket(state){state.isBusketVisible = !state.isBusketVisible}
    }
});

export const mainActions = mainSlice.actions;

export default mainSlice;