import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    itemsCount: 0
};

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem(state, actions){
            state.itemsCount++;
            const newItem = actions.payload;
            const existingItem = state.items.find(item=>item.id === newItem.id)
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    count: 1,
                    totalPrice: newItem.price
                });
            }else{
                existingItem.count++;
                existingItem.totalPrice = existingItem.count *  existingItem.price;
            }
        },
        removeItem(state, actions){
            const id  = actions.payload;
            state.itemsCount--;
            const existingItem = state.items.find(item=>item.id === id);
            if(existingItem.count === 1){
                state.items = state.items.filter(item => item.id !== id);
            }else{
                existingItem.count --;
                existingItem.totalPrice = existingItem.count * existingItem.price;
            }

        }
    }
});

export const itemsAction = itemSlice.actions;

export default itemSlice;




























// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     items: [],
//     itemsCount: 0
// };

// const itemSlice = createSlice({
//     name: 'item',
//     initialState,
//     reducers: {
//         addItem(state, actions){
//             const newItem = actions.payload;
//             const existingItem = state.items.find(item=>item.id === newItem.id);
//             state.itemsCount++;
//             if(!existingItem){
//                 state.items.push({
//                     id: newItem.id,
//                     price: newItem.price,
//                     quantity: 1,
//                     totalPrice: newItem.price,
//                     title: newItem.title
//                 })
//             }else{
//                 existingItem.quantity++;
//                 existingItem.totalPrice = existingItem.quantity * existingItem.price;
//             }
//         },
//         removeItem(state, actions){
//             const id = actions.payload;
//             const existingItem = state.items.find(item=>item.id == id);
//             state.itemsCount--;
//             if(existingItem.quantity === 1){
//                state.items =  state.items.filter(item => item.id !== id);
//             }else{
//                 existingItem.quantity--;
//                 existingItem.totalPrice = existingItem.price * existingItem.quantity;
//             }

//         }
//     }
// });

// export const itemActions = itemSlice.actions;

// export default itemSlice;