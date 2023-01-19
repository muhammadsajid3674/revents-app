import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage } from '../screens/HomePage'
import EventDashboard from '../screens/EventDashboard';
import { UserDetailedPage } from '../features/user/UserDetails/UserDetailedPage';
import { PeopleDashboard } from '../screens/PeopleDashboard';
import { SettingDashboard } from '../screens/SettingDashboard';
import { Container, Toolbar } from '@mui/material';
import Navbar from '../components/navbar/Navbar';
import { Fragment } from 'react';
import NotFound from '../screens/NotFoundPage';
import TestComponent from '../features/Test/TestComponent';
import EventForm from '../features/Events/EventForm/EventForm';
import { EventDetailPage } from '../features/Events/EventsDetails/EventDetailPage';

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
                    <Route path='event/:id' element={<EventDetailPage />} />
                    <Route path='people' element={<PeopleDashboard />} />
                    <Route path='profile/:id' element={<UserDetailedPage />} />
                    <Route path='settings/*' element={<SettingDashboard />} />
                    {['createEvent', 'manage/:id'].map((path, index) => <Route key={index} path={path} element={<EventForm />} />)}
                    <Route path='test' element={<TestComponent />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Container>
        </Fragment>
    )
}


export default AppRouter