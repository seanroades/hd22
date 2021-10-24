import '../../App.css'
import React from 'react'
import { Typography, Container } from '@mui/material'
import { makeStyles } from '@mui/styles'

const Plagiarism: React.FC = () => {
  const styles = useStyles()

  return (
    <>
      <Container maxWidth="sm">
        <Typography>All Reports</Typography>
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

export default Plagiarism
