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
  const [tickSound, setTickSound] = useState<HTMLAudioElement | null>(null);
  const [microwaveTimer, setMicrowaveTimer] = useState<HTMLAudioElement | null>(null);

  const formattedTime = () => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  useEffect(() => {
    if (resetTimer) {
      setSeconds(Number(numSeconds));
    }
  }, [resetTimer, numSeconds]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tickSoundElement = document.getElementById("tickSound") as HTMLAudioElement;
      const microwaveTimerElement = document.getElementById("microwaveTimer") as HTMLAudioElement;
      setTickSound(tickSoundElement);
      setMicrowaveTimer(microwaveTimerElement);
    }
  }, []);

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
          // Check if there are 5 seconds left
          if (seconds === 5 && tickSound) {
              tickSound.play(); // Play the sound when 5 seconds are left
          }
          if (seconds === 1 && microwaveTimer) {
            microwaveTimer.play();
        }
        }
        else {
          setBackgroundColor((prevColor) => prevColor === 'green' ? 'red' : 'green');
          setSeconds(Number(numSeconds));
          if (tickSound) {
            tickSound.pause();
          }
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isTimerRunning, numSeconds, seconds, setBackgroundColor, tickSound, microwaveTimer]);
  return (
    <Box       
    sx={{
      border: '3px solid #000',
      mt: 2,
      padding: '0 3em 0 3em'
      }}>
        <Typography variant='h1' align='center'>      {formattedTime()}
        </Typography>
        <audio id="tickSound" src="/tickClock.mp3" />
        <audio id="microwaveTimer" src="/microwaveTimer.mp3" />
    </Box>
  );
}

export default Timer;
