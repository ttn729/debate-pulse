"use client"
import React, { useState, useEffect } from 'react';

interface TimerProps {
  isTimerRunning: boolean;
  setBackgroundColor: (colorUpdater: (prevColor: string) => string) => void;
  resetTimer: boolean;
}

function Timer({ isTimerRunning, setBackgroundColor, resetTimer }: TimerProps) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (resetTimer) {
      setSeconds(0);
    }
  }, [resetTimer]);

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        if (seconds < 60) {
          setSeconds(seconds + 1);
        }
        else {
          setBackgroundColor((prevColor: string) => prevColor === 'green' ? 'red' : 'green');
          setSeconds(0)
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isTimerRunning, seconds]);

  return (
    <div>
      <h1>Timer: {seconds}</h1>
    </div>
  );
}

export default Timer;
