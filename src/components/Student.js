import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';
import { useState, useEffect } from 'react';


export default function Student() {
    const paperStyle={padding: '89px 110px', width: 600, margin: "120px"}
    const [name, setName]=useState('')
    const [address, setAddress]=useState('')
    const [student, setStudent]=useState([])
    const handleClick = (e)=>{
      e.preventDefault()
      const student={name, address}
      console.log(student)
      fetch("http://localhost:8080/student/add", {
        method:"Post", 
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
    
      }).then(()=>
      console.log("New student Added"))
    }

    useEffect(()=>{
      fetch("http://localhost:8080/student/getAll")
      .then(res=>res.json())
      .then((result)=>{
        setStudent(result)
      }
      )
    },[] 
    )
    
  return (
    <Container>
        <Paper elevation={4} style={paperStyle}>
            <h1>Add Student</h1>
    <Box
      component="form"
      
      
    >
      <TextField id="outlined-basic" label="Student name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <TextField  id="outlined-basic" label="Student address" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      /><br/><br/>
      <Button variant="contained" onClick={handleClick} >
        Submit
        </Button>  

        <TextField id="outlined-basic" label="Student id" variant="outlined" fullWidth
      value={id}
      onChange={(e)=>setName(e.target.value)}/>
    </Box>
    </Paper>

    <Paper 
    
        elevation={3} style={paperStyle}>
          <h1>Students</h1> 

          {student.map(student=>(
          <Paper
          elevation={6} style={{margin:"10px", padding:"20px", textAlign:"left" }} key={student.id}>
            Id:{student.id}<br/>
            Name:{student.name}<br/>
            Address:{student.address}


            
          </Paper>
))
}


    </Paper>
    </Container>
  );
}
