import { useState } from 'react'
import SalesHistory from './components/SalesHistory'

import './App.css'
import { Box, Container, Table, TableContainer, TableHead, Typography } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container sx={{ bgcolor: "tomato", height: "100vh" }}>
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
