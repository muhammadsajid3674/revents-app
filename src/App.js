import { Box } from '@mui/material'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import AppRouter from './config/router'

const App = () => {
  return (
    <Box sx={{ backgroundColor: 'rgba(0,0,0,0.15)', minHeight: '100vh' }}>
      <AppRouter />
    </Box>
  )
}

export default App