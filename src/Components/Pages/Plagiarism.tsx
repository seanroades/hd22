import '../../App.css'
import React from 'react'
import { Typography, Container } from '@mui/material'
import { makeStyles } from '@mui/styles'

interface PlagiarismProps {
  data: any;
} 

const Plagiarism: React.FC<PlagiarismProps> = (props: PlagiarismProps) => {
  const styles = useStyles()

  var cardArray = []
  console.log(props.data)
  for(let i = 0; i < props.data.length; i++) {
    // Push to card components
    console.log("PROPS", props.data)
    if (props.data[i]) {
      cardArray.push(<div className="CardBG"><p style={{paddingLeft: "15px"}}>{props.data[i]}</p></div>)
    }
  }

  return (
    <>
      <Container maxWidth="sm">
        <Typography>All Reports</Typography>
        {
          cardArray
        }
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
