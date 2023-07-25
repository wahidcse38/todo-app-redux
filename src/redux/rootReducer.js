import { combineReducers } from "redux";

import todoReducer from "./todos/reducer";
import filterReducer from "./filter/reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

export default rootReducer;
