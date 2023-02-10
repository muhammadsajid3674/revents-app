import { Grid } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { AboutPage } from '../features/user/Settings/AboutPage'
import AccountPage from '../features/user/Settings/AccountPage'
import { BasicPage } from '../features/user/Settings/BasicPage'
import { PhotoPage } from '../features/user/Settings/PhotosPage'
import SettingNav from '../features/user/Settings/SettingNav'
import { changePassword } from '../features/auth/authActions';

const SettingDashboard = ({ changePassword, providerId }) => {
  return (
    <Grid container spacing={2}>
      <Grid item md={8}>
        <Routes>
          <Route path='' element={<BasicPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='photo' element={<PhotoPage />} />
          <Route path='account' element={<AccountPage changePassword={changePassword} providerId={providerId} />} />
        </Routes>
      </Grid>
      <Grid item md={4}>
        <SettingNav />
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  providerId: !state.firebase.auth.isEmpty && state.firebase.auth.providerData[0].providerId
})

const mapDispatchToProps = {
  changePassword
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingDashboard)