import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React, { Component, useEffect, useState } from 'react'
import DropzoneInput from './DropzoneInput';

const PhotosPage = () => {

  const [files, setFiles] = useState([])

  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview))
    }
  }, [files])
  return (
    <Paper>
      <Box style={{ padding: '10px 15px' }}>
        <Typography variant='h4'>Your Photos</Typography>
        <Divider sx={{ margin: '10px 0' }} />
        <Grid container spacing={3}>
          <Grid item md={4}>
            <Typography variant='body1' sx={{ fontWeight: 600, color: '#182848' }}>Step 1 - Add Photo</Typography>
            <DropzoneInput setFiles={setFiles} />
          </Grid>
          <Grid item md={4}>
            <Typography variant='body1' sx={{ fontWeight: 600, color: '#182848' }}>Step 2 - Resize Image</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant='body1' sx={{ fontWeight: 600, color: '#182848' }}>Step 3 - Review And Upload</Typography>
            {files.length > 0 && <img src={files[0].preview} style={{ width: '100%', minHeight: 'auto' }} alt='' />}
          </Grid>
        </Grid>
        <Divider sx={{ margin: '10px 0 10px 0' }} />
        <Stack direction='row' spacing={3}>
          <Card sx={{ maxWidth: 180 }}>
            <CardMedia
              component="img"
              height="180"
              image="https://randomuser.me/api/portraits/men/7.jpg"
            />
            <CardActions sx={{ backgroundColor: '#00a152', justifyContent: 'center', }} >
              <Typography variant='body1' sx={{ color: '#fff', fontWeight: 600, padding: '4px 0' }}>Main Photo</Typography>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 180 }}>
            <CardMedia
              component="img"
              height="180"
              image="https://randomuser.me/api/portraits/men/7.jpg"
            />
            <CardActions sx={{ justifyContent: 'space-between' }} >
              <Button size="small" color='success' sx={{ fontWeight: 600 }}>Main</Button>
              <Button size="small" color='error'><DeleteIcon /></Button>
            </CardActions>
          </Card>
        </Stack>
      </Box>
    </Paper>
  )
}

export default PhotosPage;