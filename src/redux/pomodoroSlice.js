import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: 25 * 60,
  isRunning: false,
};

export const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    startTimer: (state) => {
      state.isRunning = true;
    },
    stopTimer: (state) => {
      state.isRunning = false;
    },
    resetTimer: (state) => {
      state.time = 25 * 60;
      state.isRunning = false;
    },
    togglePomodoro: (state) => {
      state.isRunning = !state.isRunning;
    },
    updateTime: (state, action) => {
      state.time = action.payload;
    },
  },
});

export const tick = () => {
  return (dispatch, getState) => {
    const { time, isRunning } = getState().pomodoro;
    if (time > 0 && isRunning) {
      dispatch(updateTime(time - 1)); 
    } else {
      dispatch(stopTimer()); 
    }
  };
};

export const { startTimer, stopTimer, resetTimer, togglePomodoro, updateTime } =
  pomodoroSlice.actions;

export default pomodoroSlice.reducer;
