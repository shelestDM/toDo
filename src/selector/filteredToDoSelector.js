import { createSelector } from "@reduxjs/toolkit";

export const selectAllToDos = state => state.toDos.toDos;
export const selectActiveFilterParameter = state =>state.filter;

export const selectToDosByFilter = createSelector(
  [selectAllToDos,selectActiveFilterParameter],
  (toDos, filter_parameter) => {
    switch (filter_parameter) {
      case "all":
        return toDos;
      case "completed":
        return toDos.filter((todo) => todo.is_completed);
      case "in_progress":
        return toDos.filter((todo) => !todo.is_completed);
      default:  
    }
  }
);
