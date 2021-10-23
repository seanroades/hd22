import '../../App.css'
import React from 'react'
import { Typography, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles';

const Home: React.FC = () => {
  const styles = useStyles()
  return (
    <>
      <div className={styles.wrapper}>
        <Typography>Getting Started</Typography>
        <TextField fullWidth label="fullWidth" id="fullWidth" />
      </div>
    </>
  )
}

const useStyles = makeStyles({
  wrapper: {},
})

export default Home
