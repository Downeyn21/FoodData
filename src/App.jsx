import { useState } from 'react'
import SalesHistory from './components/SalesHistory'

import './App.css'
import { Box, Container, Skeleton, Table, TableContainer, TableHead, Typography } from '@mui/material'

const mainContainer = {
  bgcolor: "tomato",
  height: "100vh",
  display: "flex",
  flexDirection: "row"
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container sx={mainContainer}>
        <Box sx={{border: 'solid', p: 10}}>
          <Typography 
          variant='h1'
          // sx={{}}
          >Badass DashBoard</Typography>
          </Box>
          
          <SalesHistory />


        </Container> 
    </>
  )
}

export default App
