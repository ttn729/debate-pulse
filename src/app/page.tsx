"use client"
import styles from "./page.module.css";
import Timer from "@/components/Timer";
import { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import TopicModal from "@/components/TopicModal";
import { Open_Sans} from 'next/font/google';
import Countdown from "@/components/Countdown";


// const topicFont = Fira_Mono({weight: '700', subsets: ["latin"]});
const topicFont = Open_Sans({weight: '800', subsets: ["latin"]});


export default function Home() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [isStopped, setIsStopped] = useState(true);
  const [resetTimer, setResetTimer] = useState(false);
  const [topicName, setTopicName] = useState('');
  const [numTeams, setNumTeams] = useState('');
  const [numSeconds, setNumSeconds] = useState('');
  const [clickedStart, setClickedStart] = useState(false);



  const handleReset = () => {
    setResetTimer(true);
    setTimeout(() => {
      setResetTimer(false);
    }, 100);
  };

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // const renderTeams = () => {
  //   const teams = [];
  //   for (let i = 1; i <= Number(numTeams) && i <= 4; i++) {
  //     teams.push(
  //       <Box key={i} sx={{ p: 1, bgcolor: 'primary.main', color: 'primary.contrastText', marginRight: 1 }}>
  //         <Typography variant="body1">Team #{i}</Typography>
  //       </Box>
  //     );
  //   }
  //   return teams;
  // };

  return (
    <main className={`${styles.main} ${isStopped ? '' : backgroundColor === 'green' ? styles.greenBackground : styles.redBackground}`}>     
    
    <div className={styles.description}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          borderRadius: 1,
          width: '100%',
          alignItems: 'center'
        }}>
        <Image
          className={styles.logo}
          src="/debatePulse.svg"
          alt="Debate Pulse Logo"
          priority
          width={120}
          height={120}
        />

          <Button onClick={handleOpenModal} variant="contained">
            Create a topic
          </Button>

          <TopicModal open={openModal} onClose={handleCloseModal} setTopicName={setTopicName} setNumTeams={setNumTeams} setNumSeconds={setNumSeconds}/>

        </Box>
      </div>

      <Grid container flexDirection="row">

        <Grid container item xs={3} justifyContent="center" alignItems="center">
        </Grid>

        <Grid
          item
          xs={6}
          width="100%"
        >
          <Grid container item xs={12} justifyContent="center" alignItems="center" width='100%' flexDirection='column' sx={{mb: 2}}>
            <Typography variant="h3" align="center" fontFamily={"Fira Mono"} className={topicFont.className}>{topicName}</Typography>
            <Timer isTimerRunning={isTimerRunning} setBackgroundColor={setBackgroundColor} resetTimer={resetTimer} numSeconds={numSeconds}/>
          </Grid>

          <Grid container item xs={12} justifyContent="center" alignItems="center" width='100%' spacing={2}>
            {
              !clickedStart &&
      <Grid item>
      <Button variant="contained" onClick={() => {   setTimeout(() => {
    setIsTimerRunning(true);
    setIsStopped(false);
 
  }, 3000);    setClickedStart(true); }}>Start!</Button>
    </Grid>
            }

      <Grid item>
        <Button variant="contained" onClick={() => setIsTimerRunning(!isTimerRunning)}>{isTimerRunning || !clickedStart ? 'Pause!' : 'Resume!'}</Button>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={() => { setIsTimerRunning(false); setIsStopped(true); handleReset(); setClickedStart(false) }}>Stop!</Button>
      </Grid>

    </Grid>

        </Grid>

        <Grid container item xs={3} justifyContent="center" alignItems="center">
        </Grid>
      </Grid>

{clickedStart &&
        <Countdown />
}

        <div className={styles.grid}>

          </div>


    </main>
  );
}
