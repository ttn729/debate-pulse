"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Timer from "@/components/Timer";
import { useState } from "react";
import { Button, Grid } from "@mui/material";

export default function Home() {

  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [isStopped, setIsStopped] = useState(true);
  const [resetTimer, setResetTimer] = useState(false);


  const handleReset = () => {
    setResetTimer(true);
    setTimeout(() => {
      setResetTimer(false);
    }, 100);
  };

  return (
    <main className={`${styles.main} ${isStopped ? '' : backgroundColor === 'green' ? styles.greenBackground : styles.redBackground}`}>

      <div className={styles.description}>
        <div>
          By Spicy
        </div>
      </div>

      <div className={styles.center}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Timer isTimerRunning={isTimerRunning} setBackgroundColor={setBackgroundColor} resetTimer={resetTimer} />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" onClick={() => { setIsTimerRunning(true); setIsStopped(false) }}>Start!</Button>
            <Button variant="contained" onClick={() => { setIsTimerRunning(false); setIsStopped(true); handleReset() }}>Stop!</Button>
            <Button variant="contained" onClick={() => setIsTimerRunning(false)}>Pause!</Button>
          </Grid>

        </Grid>

      </div>

      <div className={styles.grid}>

      </div>
    </main>
  );
}
