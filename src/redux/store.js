import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pomodoroReducer from "./pomodoroSlice";

const rootReducer = combineReducers({
  pomodoro: pomodoroReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
