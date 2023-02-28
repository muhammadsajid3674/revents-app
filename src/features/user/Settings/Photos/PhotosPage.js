import { Box, Button, ButtonGroup, Divider, Grid, Paper, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useEffect, useState } from 'react'
import DropzoneInput from './DropzoneInput';
import CropperInput from './CropperInput';
import { connect } from 'react-redux';
import { uploadProfileImage, deleteImage, setMainProfile } from '../../userAction';
import { openToastr } from '../../../toastr/toastrActions';
import DoneIcon from '@mui/icons-material/Done';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import UserPhotos from './UserPhotos';
import { ThemeBtnPri } from '../../../../components/button/ThemeBtn';

const PhotosPage = ({ uploadProfileImage, deleteImage, setMainProfile, photos, profile, openToastr, loading }) => {

  const [files, setFiles] = useState([])
  const [image, setImage] = useState(null)

  const handleUploadingPhoto = async () => {
    try {
      await uploadProfileImage(image);
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

  const handleDeleteImage = async (image) => {
    try {
      await deleteImage(image);
      openToastr('Toastr', { message: 'Image deleted successfully', severity: 'success' })
    } catch (error) {
      console.log(error);
      openToastr('Toastr', { message: 'Something went wrong', severity: 'error' })
    }
  }

  const handleSetMainProfile = async (image) => {
    try {
      await setMainProfile(image)
    } catch (error) {
      console.log(error);
      openToastr('Toastr', { message: 'Something went wrong', severity: 'error' })
    }
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
                <ThemeBtnPri onClick={handleUploadingPhoto} variant='standard' isLoading={loading} label={<DoneIcon color='success' />} />
                <Button onClick={handleCancelUploading}><DeleteIcon color='error' /></Button>
              </ButtonGroup>
            </>
            )}
          </Grid>
        </Grid>
        <Divider sx={{ margin: '10px 0 10px 0' }} />
        <UserPhotos photo={photos} profile={profile} deleteImage={handleDeleteImage} setMainProfile={handleSetMainProfile} loading={loading} />
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
  photos: state.firestore.ordered.photos,
  loading: state.async.loading
});

const mapDispatchToProps = {
  uploadProfileImage,
  openToastr,
  deleteImage,
  setMainProfile
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(auth => query(auth))
)(PhotosPage);