import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      flexDirection: 'column',
      backgroundColor: '#4b6cb7 !important',
      background: 'linear-gradient(to right, #4b6cb7, #182848)'

    }}>
      <Typography variant="h2" sx={{
        my: 2,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: '#fff',
        textDecoration: 'none',
      }}
      >
        REVENTS
      </Typography>
      <Button variant='contained' onClick={() => { navigate('event') }}>Get Started</Button>
    </Box>
  )
}
