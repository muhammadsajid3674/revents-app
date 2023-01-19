import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeBtnHome } from '../components/button/ThemeBtn';
export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      flexDirection: 'column',
      gap: 3,
      backgroundColor: '#4b6cb7 !important',
      background: 'linear-gradient(to left, #4b6cb7, #182848)'

    }}>
      <Typography variant="h2" sx={{
        my: 2,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        textDecoration: 'none',
        color: '#fff'
      }}
      >
        REVENTS
      </Typography>
      <ThemeBtnHome onClick={() => { navigate('event') }} label='Get Started' />
    </Box>
  )
}
