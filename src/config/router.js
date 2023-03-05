import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { HomePage } from '../screens/HomePage'
import { Fragment } from 'react';
import { Container, Toolbar } from '@mui/material';
import EventDashboard from '../screens/EventDashboard';
import UserDetailedPage from '../features/user/UserDetails/UserDetailedPage';
import PeopleDashboard from '../screens/PeopleDashboard';
import SettingDashboard from '../screens/SettingDashboard';
import Navbar from '../components/navbar/Navbar';
import NotFound from '../screens/NotFoundPage';
import TestComponent from '../features/Test/TestComponent';
import EventForm from '../features/Events/EventForm/EventForm';
import EventDetailPage from '../features/Events/EventsDetails/EventDetailPage';
import Protected from './common/util/ProtectedRoute';
import { connect } from 'react-redux';

function AppRouter({ auth }) {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/*' element={<SubRouter auth={auth} />} />
            </Routes>
        </Router>
    )
}
function SubRouter({ auth }) {
    const location = useLocation()
    return (
        <Fragment>
            <Navbar />
            <Container sx={{ p: 3 }}>
                <Toolbar />
                <Routes key={location.key}>
                    <Route path='event' element={<EventDashboard />} />
                    <Route path='event/:id' element={<EventDetailPage />} />
                    <Route path='test' element={<TestComponent />} />
                    <Route path='people' element={<PeopleDashboard />} />

                    <Route path='profile/:id' element={<Protected isSignedIn={auth}>
                        <UserDetailedPage />
                    </Protected>} />

                    <Route path='settings/*' element={<Protected isSignedIn={auth}>
                        <SettingDashboard />
                    </Protected>} />

                    {['createEvent', 'manage/:id'].map((path, index) => <Route key={index} path={path} element={<Protected isSignedIn={auth}>
                        <EventForm />
                    </Protected>} />)}

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Container>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth.isEmpty
})


export default connect(mapStateToProps)(AppRouter)