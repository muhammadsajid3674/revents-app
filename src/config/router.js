import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage } from '../screens/HomePage'
import EventDashboard from '../screens/EventDashboard';
import { UserDetailedPage } from '../features/user/UserDetails/UserDetailedPage';
import { PeopleDashboard } from '../screens/PeopleDashboard';
import { SettingDashboard } from '../screens/SettingDashboard';
import EventForm from '../features/Events/EventForm';
import { Container, Toolbar } from '@mui/material';
import Navbar from '../components/navbar/Navbar';
import { Fragment } from 'react';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/*' element={<SubRouter />} />
            </Routes>
        </Router>
    )
}
function SubRouter() {
    return (
        <Fragment>
            <Navbar />
            <Container sx={{ p: 3 }}>
                <Toolbar />
                <Routes>
                    <Route path='event' element={<EventDashboard />} />
                    <Route path='event/:id' element={<UserDetailedPage />} />
                    <Route path='people' element={<PeopleDashboard />} />
                    <Route path='profile/:id' element={<UserDetailedPage />} />
                    <Route path='settings' element={<SettingDashboard />} />
                    <Route path='createEvent' element={<EventForm />} />
                </Routes>
            </Container>
        </Fragment>
    )
}


export default AppRouter