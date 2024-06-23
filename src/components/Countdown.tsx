import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

function Countdown() {
  const [seconds, setSeconds] = useState(3);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        // When countdown reaches 0, hide the component after 1 second
        setTimeout(() => {
          setVisible(false);
        }, 1000);
      }
    }, 1000);

    // Clean up the interval on unmount or when seconds reach 0
    return () => clearInterval(countdownInterval);
  }, [seconds]);

  return (
    <Box>
      {visible && (
        <Typography variant='h3' align="center">
          {seconds > 0 ? seconds : 'Ready'}
        </Typography>
      )}
    </Box>
  );
}

export default Countdown;
