import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";

export function added(todoText) {
  return {
    type: ADDED,
    payload: todoText,
  };
}
export function toggled(todoId) {
  return {
    type: TOGGLED,
    payload: todoId,
  };
}
export function colorSelected(todoId, color) {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color,
    },
  };
}
export function deleted(todoId) {
  return {
    type: DELETED,
    payload: todoId,
  };
}
export function allCompleted() {
  return {
    type: ALLCOMPLETED,
  };
}
export function clearCompleted() {
  return {
    type: CLEARCOMPLETED,
  };
}
