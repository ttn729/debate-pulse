"use client"
import styles from "./page.module.css";
import Timer from "@/components/Timer";
import { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Item from "@/components/Item";
import TopicModal from "@/components/TopicModal";


export default function Home() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [isStopped, setIsStopped] = useState(true);
  const [resetTimer, setResetTimer] = useState(false);
  const [topicName, setTopicName] = useState('');
  const [numTeams, setNumTeams] = useState('');
  const [numSeconds, setNumSeconds] = useState('');


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
        }}>
          <Item>
            Spicy Language Timer
          </Item>
          {/* <Item>
            Join
          </Item> */}
          <Item onClick={handleOpenModal}>
            Create a topic
          </Item>
          <TopicModal open={openModal} onClose={handleCloseModal} setTopicName={setTopicName} setNumTeams={setNumTeams} setNumSeconds={setNumSeconds}/>

        </Box>
      </div>

      <Grid container flexDirection="row">

        <Grid container item xs={3} justifyContent="center" alignItems="center">
          {/* <Interrupt /> */}
        </Grid>

        <Grid
          item
          xs={6}
          width="100%"

        >
          <Grid container item xs={12} justifyContent="center" alignItems="center" width='100%' flexDirection='column' sx={{mb: 2}}>
            <Typography variant="h3" align="center">{topicName}</Typography>
            <Timer isTimerRunning={isTimerRunning} setBackgroundColor={setBackgroundColor} resetTimer={resetTimer} numSeconds={numSeconds}/>
          </Grid>

          <Grid container item xs={12} justifyContent="center" alignItems="center" width='100%' spacing={2}>
      <Grid item>
        <Button variant="contained" onClick={() => { setIsTimerRunning(true); setIsStopped(false) }}>Start!</Button>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={() => setIsTimerRunning(false)}>Pause!</Button>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={() => { setIsTimerRunning(false); setIsStopped(true); handleReset() }}>Stop!</Button>
      </Grid>

    </Grid>

        </Grid>

        <Grid container item xs={3} justifyContent="center" alignItems="center">
          {/* <Ignore /> */}
        </Grid>


      </Grid>

      <div className={styles.grid}>
        {/* {renderTeams()} */}
      
      </div>
    </main>
  );
}
