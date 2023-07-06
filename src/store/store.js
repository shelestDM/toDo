import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./main-slice";
import itemSlice from "./item-slice";

const store = configureStore({
    reducer:{
        main: mainSlice.reducer,
        item: itemSlice.reducer,
    },
});

export default store;