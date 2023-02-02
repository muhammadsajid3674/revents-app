import { Box } from '@mui/material'
import React from 'react'
import AppRouter from './config/router'
import './App.css'
import ModalManager from './features/Modals/ModalManager'
import ToastrManager from './features/toastr/toastrManager'

const App = () => {
  return (
    <Box sx={{ backgroundColor: 'rgba(0,0,0,0.15)', minHeight: '100vh' }}>
      <AppRouter />
      <ModalManager />
      <ToastrManager />
    </Box>
  )
}

export default App