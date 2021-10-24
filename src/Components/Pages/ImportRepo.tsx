import '../../App.css'
import React from 'react'
import { Typography, TextField, Button, Grid, Container } from '@mui/material'
import { makeStyles } from '@mui/styles'
interface ImportProps {
  getData(event: any): void
}

const ImportRepo: React.FC<ImportProps> = (props: ImportProps) => {
  const styles = useStyles()

  return (
    <>
      <Container maxWidth="sm">
        {/* <div className={styles.wrapper}> */}

        <Grid item p={2}>
          <Typography>Enter hackathon start date:</Typography>
        </Grid>

        <Grid item p={2}>
          <TextField
            fullWidth
            label="MM-DD-YY"
            multiline
            maxRows={4}
            id="fullWidth"
            InputProps={{
              className: styles.input,
            }}
          />
        </Grid>
        <Grid container direction="row" spacing="8">
          <Grid item p={2}>
            <Button
              variant="contained"
              color="primary"
              className={styles.button}
              size="large"
              onClick={props.getData}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
        {/* </div> */}
      </Container>
    </>
  )
}

const useStyles = makeStyles({
  // wrapper: {},
  input: {
    height: 500,
  },
  button: {
    height: 20,
  },
})

export default ImportRepo
