import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SignOutMenu  from '../../features/NavMenus/SignOutMenu';
import { SignInMenu } from '../../features/NavMenus/SignInMenu';
import { ThemeBtnSec } from '../button/ThemeBtn';
import { connect } from 'react-redux';
import { logout } from '../../features/auth/authActions';

const drawerWidth = 240;
function Navbar(props) {

    const navigate = useNavigate()
    const { window, auth } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="a" sx={{
                my: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
            }}
                onClick={() => { navigate('/') }}
            >
                REVENTS
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText onClick={() => { navigate('event') }}>
                            Events
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText onClick={() => { navigate('people') }}>
                            People
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText onClick={() => { navigate('createEvent') }}>
                            Create Event
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const handleSignOutMenu = () => {
        props.logout()
        // navigate('/')
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar component="nav" sx={{
                backgroundColor: '#4b6cb7 !important',
                background: 'linear-gradient(to left, #4b6cb7, #182848)'
            }}>
                <Container>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', sm: 'block' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }}
                            onClick={() => { navigate('/') }}
                        >
                            REVENTS
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1, flexGrow: 1 }}>
                            <Divider orientation="vertical" flexItem light={true} />
                            <Button sx={{ color: '#fff' }} onClick={() => { navigate('event') }}>Event</Button>
                            <Divider orientation="vertical" flexItem light={true} />
                            {auth.authenticated && <>
                                <Button sx={{ color: '#fff' }} onClick={() => { navigate('people') }}>People</Button>
                                <Divider orientation="vertical" flexItem />
                                <Button sx={{ color: '#fff' }} onClick={() => { navigate('test') }}>Test</Button>
                                <Divider orientation="vertical" flexItem />
                                <ThemeBtnSec
                                    variant='contained'
                                    onClick={() => {
                                        navigate('createEvent')
                                    }}
                                    label='Create Event'
                                />
                            </>}
                        </Box>
                        {auth.authenticated ? <SignInMenu currentUser={auth.currentUser} signOut={handleSignOutMenu} /> : <SignOutMenu />}
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapDispatchToProps = {
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);