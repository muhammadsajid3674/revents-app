import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { ThemeBtnSec } from '../../../components/button/ThemeBtn'
import userImage from '../../../assets/user.png';

const UserProfile = () => {
  return (
    <Grid container spacing={3} justifyContent='center'>
              <Grid item md={10} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: 200 }}>
                  <img src={userImage} alt='' style={{ width: '100%', minHeight: 'auto', borderRadius: '100px' }} />
                </Box>
              </Grid>
              <Grid item md={5}>
                <Typography variant='body1'>Sajid</Typography>
                <Divider />
              </Grid>
              <Grid item md={5}>
                <Typography variant='body1'>developer</Typography>
                <Divider />
              </Grid>
              <Grid item md={10}>
                <Typography variant='body1'>age, location</Typography>
                <Divider />
              </Grid>
              <Grid item md={10}>
                <Typography variant='body1'>Gmail</Typography>
                <Divider />
              </Grid>
              <Grid item md={10} textAlign='center'>
                <ThemeBtnSec label='Edit Profile' style={{
                  border: '1px solid #182848',
                  color: '#182848',
                  '&:hover': {
                    transition: "500ms all",
                    backgroundColor: "#182848 !important",
                    color: '#fff',
                  }
                }} />
              </Grid>
            </Grid>
  )
}

export default UserProfile