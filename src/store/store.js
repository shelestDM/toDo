import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../slices/toDoSlice";
import filterReducer from "../slices/filterSlice";

const store = configureStore({
    reducer: {
        toDos: toDoReducer,
        filter: filterReducer
    }
});

export default store;