import { Grid } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutPage } from '../features/user/Settings/AboutPage'
import { AccountPage } from '../features/user/Settings/AccountPage'
import { BasicPage } from '../features/user/Settings/BasicPage'
import { PhotoPage } from '../features/user/Settings/PhotosPage'
import SettingNav from '../features/user/Settings/SettingNav'

export const SettingDashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={8}>
        <Routes>
          <Route path='' element={<BasicPage/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='photo' element={<PhotoPage/>}/>
          <Route path='account' element={<AccountPage/>}/>
        </Routes>
      </Grid>
      <Grid item md={4}>
        <SettingNav/>
      </Grid>
    </Grid>
  )
}
