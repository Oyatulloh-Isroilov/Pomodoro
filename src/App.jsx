import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, stopTimer, resetTimer, togglePomodoro, tick } from './redux/pomodoroSlice';

const App = () => {
  const timerState = useSelector(state => state.pomodoro);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(tick());
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  const handleStartStop = () => {
    if (timerState.isRunning) {
      dispatch(stopTimer());
    } else {
      dispatch(startTimer());
    }
  };

  const handleReset = () => {
    dispatch(resetTimer());
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return (
      String(minutes).padStart(2, '0') + ':' +
      String(seconds).padStart(2, '0')
    );
  };

  return (
    <>
      <div className='container'>
        <h1>{timerState && formatTime(timerState.time)}</h1>
        <button onClick={handleStartStop}>{timerState && timerState.isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

export default App;
