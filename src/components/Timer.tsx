import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
  const [time, setTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setTime(0);
    setIsActive(false);
  };

  const timeFormat = (timeCount: number): string => {
    console.log(timeCount);
    const hours = Math.trunc(timeCount / 3600)
      .toString()
      .padStart(2, '0');
    console.log(hours);
    const minutes = Math.trunc(timeCount / 3600)
      .toString()
      .padStart(2, '0');
    const seconds = timeCount.toString().padStart(2, '0');

    return [hours, minutes, seconds].join(':');
  };

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time: number) => time + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div className="timer-wrapper">
      <div className="title">
        <input placeholder="task name" />
      </div>
      <div className="time">{timeFormat(time)}</div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? 'active' : 'inactive'
          }`}
          onClick={toggle}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
