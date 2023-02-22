import { Box, Chip, createTheme, Grid, Paper, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const theme = createTheme({
  palette: {
    themeHost: {
      main: '#ffb236',
      contrastText: '#fff',
    }
  }
})

const EventDetailedSidebar = ({ attendees }) => {

  return (
    <Paper>
      <Box sx={{ textAlign: 'center', p: 1, backgroundColor: '#4b6cb7', color: '#fff' }}>
        <Typography variant='body1' sx={{ fontWeight: 600 }}>{attendees && attendees.length} {attendees && attendees.length === 1 ? 'person' : 'people' } Going</Typography>
      </Box>
      <Box sx={{ p: 1.5 }}>
        {attendees && attendees.map((attendees, i) => (
          <Grid key={i} container spacing={2} alignItems='center'>
            <Grid item md={3}>
              <img src={attendees.photoURL} style={{ maxWidth: '100%' }} alt='' />
            </Grid>
            <Grid item flexGrow={1}>
              <Typography variant='h6' sx={{ fontWeight: 600 }}><Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/profile/${attendees.id}`}>{attendees.displayName}</Link></Typography>
            </Grid>
            <Grid item alignSelf='start'>
              <ThemeProvider theme={theme}>
                {attendees.isHost ?? <Chip label="Host" color="themeHost" />}
              </ThemeProvider>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Paper>
  )
}

export default EventDetailedSidebar