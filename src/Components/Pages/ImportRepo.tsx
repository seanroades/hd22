import '../../App.css'
import React from 'react'
import { Typography, TextField, Button, Grid, Container } from '@mui/material'
import { makeStyles } from '@mui/styles'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DateTimePicker } from '@mui/lab';
interface ImportProps {
  getData(event: any) : void;
  val: string;
  onChange(event: any) : void;
  onTimeChange(event: any) : void;
  currTime: string;
} 

const ImportRepo: React.FC<ImportProps> = (props: ImportProps) => {
  const styles = useStyles()

  return (
    <>
      <Container maxWidth="sm">


        <Grid item p={2}>
          <Typography>Enter hackathon start date:</Typography>
        </Grid>

        <Grid item p={2}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="DateTimePicker"
            value={props.currTime}
            onChange={props.onTimeChange}
          />
        </LocalizationProvider>
        </Grid>
        <Grid item p={2}>
          <Typography>Enter hacker's GitHub URLs:</Typography>
        </Grid>
        <Grid item p={2}>
          <TextField
              fullWidth
              id="filled-textarea"
              label="Multiline Placeholder"
              placeholder="Enter your urls here one line by one line"
              multiline
              variant="filled"
              rows={10}
              onChange={props.onChange} 
          />
        </Grid>
          <Grid item p={2}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={props.getData}
            >
              Submit
            </Button>
          </Grid>
      </Container>
    </>
  )
}

const useStyles = makeStyles({
  // wrapper: {},
  input: {
    height: 500,
  },

})

export default ImportRepo
