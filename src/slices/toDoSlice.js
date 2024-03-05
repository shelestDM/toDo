import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDos: [
    { todo_title: "I am todo", id: 1, is_completed: false },
    { todo_title: "I am javascript", id: 2, is_completed: false },
    { todo_title: "I am react", id: 3, is_completed: false },
    { todo_title: "I am iphone", id: 4, is_completed: false },
  ],
};

const toDoSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addToDo(state, action) {
      state.toDos = [action.payload, ...state.toDos];
    },
    toggleToDoCompleteState(state, action) {
      let completedToDo = state.toDos.find(
        (todo) => todo.id === action.payload
      );
      completedToDo.is_completed = !completedToDo.is_completed;
    },

  },
});
export const { addToDo, toggleToDoCompleteState,filterToDos } = toDoSlice.actions;

export default toDoSlice.reducer;