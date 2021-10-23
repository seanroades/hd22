import '../../App.css'
import React from 'react'
import { Typography, TextField, makeStyles } from '@material-ui/core'

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
