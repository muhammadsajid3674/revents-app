import { Box, Chip, createTheme, Grid, Paper, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import chatUser from '../../../assets/user.png';

const theme = createTheme({
  palette: {
    themeHost: {
      main: '#ffb236',
      contrastText: '#fff',
    }
  }
})

const EventDetailedSidebar = ({ attendees }) => {

  const [isHost, setHost] = useState(false)

  return (
    <Paper>
      <Box sx={{ textAlign: 'center', p: 1, backgroundColor: '#4b6cb7', color: '#fff' }}>
        <Typography variant='body1' sx={{ fontWeight: 600 }}>{attendees && attendees.length} {attendees && attendees.length === 1 ? 'person' : 'people' } Going</Typography>
      </Box>
      <Box sx={{ p: 1.5 }}>
        {attendees.map(attendees => (
          <Grid key={attendees.id} container spacing={2} alignItems='center'>
            <Grid item md={3}>
              <img src={attendees.photoURL} style={{ maxWidth: '100%' }} alt='' />
            </Grid>
            <Grid item flexGrow={1}>
              <Typography variant='h6' sx={{ fontWeight: 600 }}>{attendees.name}</Typography>
            </Grid>
            <Grid item alignSelf='start'>
              <ThemeProvider theme={theme}>
                {isHost ?? <Chip label="Host" color="themeHost" />}
              </ThemeProvider>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Paper>
  )
}

export default EventDetailedSidebar