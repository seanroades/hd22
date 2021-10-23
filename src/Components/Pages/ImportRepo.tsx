import '../../App.css'
import React from 'react'
import { Typography } from '@mui/material'
interface ImportProps {
  getData(event: any) : void;
} 

const ImportRepo = (props: ImportProps) => {
  return (
    <>
      <button style={{width: '100px', height: '200px', backgroundColor: 'blue', color: 'white'}} className="Button" onClick={props.getData}>Press me</button>
      <Typography>Import</Typography>
      <p>test</p>
    </>
  )
}

export default ImportRepo
