import { Box, Button, ButtonGroup, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useEffect, useState } from 'react'
import DropzoneInput from './DropzoneInput';
import CropperInput from './CropperInput';
import { connect } from 'react-redux';
import { uploadProfileImage } from '../../userAction';
import { openToastr } from '../../../toastr/toastrActions';
import DoneIcon from '@mui/icons-material/Done';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import UserPhotos from './UserPhotos';

const PhotosPage = ({ uploadProfileImage, photos, profile, openToastr }) => {

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
                <Button onClick={handleUploadingPhoto}><DoneIcon color='success' /></Button>
                <Button onClick={handleCancelUploading}><DeleteIcon color='error' /></Button>
              </ButtonGroup>
            </>
            )}
          </Grid>
        </Grid>
        <Divider sx={{ margin: '10px 0 10px 0' }} />
        <UserPhotos photos={photos} profile={profile} />
      </Box>
    </Paper>
  )
}


const query = ({ auth }) => {
  return [
    {
      collection: 'users',
      doc: auth.uid,
      subcollections: [
        { collection: 'photos' }
      ],
      storeAs: 'photos'
    }
  ]
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
  photos: state.firestore.ordered.photos
});

const mapDispatchToProps = {
  uploadProfileImage,
  openToastr
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(auth => query(auth))
)(PhotosPage);