import { createSlice } from "@reduxjs/toolkit";

const initialState = "all";

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        switchFilterParam(_, action){
            console.log(action.payload);
            return action.payload
        }
    }
});

export const {switchFilterParam} = filterSlice.actions;
export default filterSlice.reducer;