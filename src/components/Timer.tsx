"use client"
import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

interface TimerProps {
  isTimerRunning: boolean;
  setBackgroundColor: (colorUpdater: (prevColor: string) => string) => void;
  resetTimer: boolean;
  numSeconds: string;
}

function Timer({ isTimerRunning, setBackgroundColor, resetTimer, numSeconds }: TimerProps) {
  const [seconds, setSeconds] = useState(0);

  const formattedTime = () => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  useEffect(() => {
    if (resetTimer) {
      setSeconds(0);
    }
  }, [resetTimer]);

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        if (seconds < Number(numSeconds)) {
          setSeconds(seconds + 1);
        }
        else {
          setBackgroundColor((prevColor: string) => prevColor === 'green' ? 'red' : 'green');
          setSeconds(0)
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isTimerRunning, numSeconds, seconds, setBackgroundColor]);

  return (
    <Box       
    sx={{
      border: '3px solid #000',
      mt: 2,
      padding: '0 3em 0 3em'
      }}>
        <Typography variant='h1' align='center'>      {formattedTime()}
        </Typography>
    </Box>
  );
}

export default Timer;
