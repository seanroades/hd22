import '../../App.css'
import React from 'react'
import { Typography, Button, TextField } from '@mui/material'
interface ImportProps {
  getData(event: any) : void;
  val: string;
  onChange(event: any) : void;
} 

const ImportRepo = (props: ImportProps) => {
  return (
    <>
      <TextField
          fullWidth
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
          rows={10}
          onChange={props.onChange} 
        />
      <Button variant="contained" onClick={props.getData}>Submit</Button>
      <Typography>Import</Typography>
      <p>test</p>
    </>
  )
}

export default ImportRepo
