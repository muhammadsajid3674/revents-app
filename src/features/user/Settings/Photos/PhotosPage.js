import { Box, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React, { Component, useEffect, useState } from 'react'
import DropzoneInput from './DropzoneInput';
import CropperInput from './CropperInput';
import { connect } from 'react-redux';
import { uploadProfileImage } from '../../userAction';
import { openToastr } from '../../../toastr/toastrActions';
import DoneIcon from '@mui/icons-material/Done';

const PhotosPage = ({ uploadProfileImage }) => {

  const [files, setFiles] = useState([])
  const [image, setImage] = useState(null)

  const handleUploadingPhoto = async () => {
    try {
      await uploadProfileImage(image, files[0].name);
      handleCancelUploading()
      openToastr('Toastr', { message: 'Image uploaded successfully', severity: 'success' })
    } catch (error) {
      console.log(error);
      openToastr('Toastr', { message: 'Something went wrong', severity: 'error' })
    }

  }

  const handleCancelUploading = () => {
    setFiles([]);
    setImage(null);
  }
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
        <Grid container spacing={3} justifyContent='center'>
          <Grid item md={4}>
            <Typography variant='body1' sx={{ fontWeight: 600, color: '#182848', marginBottom: '.5rem' }}>Step 1 - Add Photo</Typography>
            <DropzoneInput setFiles={setFiles} />
          </Grid>
          <Grid item md={4}>
            <Typography variant='body1' sx={{ fontWeight: 600, color: '#182848', marginBottom: '.5rem' }}>Step 2 - Resize Image</Typography>
            {files.length > 0 && <CropperInput setImage={setImage} imagePreview={files[0].preview} />}
          </Grid>
          <Grid item md={4}>
            <Typography variant='body1' sx={{ fontWeight: 600, color: '#182848', marginBottom: '.5rem' }}>Step 3 - Review And Upload</Typography>
            {files.length > 0 && (<>
              <div className='img-preview' style={{ minWidth: 200, minHeight: 200, overflow: 'hidden' }} />
              <ButtonGroup variant="standard" aria-label="Disabled elevation outlined primary button group" sx={{ display: 'flex', justifyContent: 'space-between', width: 200 }}>
              <Button onClick={handleUploadingPhoto}><DoneIcon color='success'/></Button>
              <Button onClick={handleCancelUploading}><DeleteIcon color='error'/></Button>
              </ButtonGroup>
            </>
            )}
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

const mapDispatchToProps = {
  uploadProfileImage
}

export default connect(null, mapDispatchToProps)(PhotosPage);