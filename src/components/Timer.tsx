import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
    let interval: number | undefined = undefined;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <TimerWrapper>
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
    </TimerWrapper>
  );
}

const TimerWrapper = styled.div`
  text-align: center;
  background-color: #282c34;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  .time {
    font-size: 3rem;
    padding: 2rem;
  }

  .button {
    padding: 0.6rem 1.5rem;
    margin: 0.4rem;
    border-radius: 3px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.8rem;
    border-style: groove;
  }

  .button:focus {
    outline-width: 0;
  }

  .button-primary:hover {
    background-color: #2641d4;
    border: 1px solid #1b1f2b;
  }

  .button-primary-active {
    background-color: #3151ff;
    border: 1px solid #152684;
    color: white;
  }

  .button-primary-inactive {
    background-color: #3151ff;
    border: 1px solid #152684;
    color: white;
  }
`;

export default Timer;
