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
import { SignOutMenu } from '../../features/NavMenus/SignOutMenu';
import { SignInMenu } from '../../features/NavMenus/SignInMenu';
import { withRouter } from 'react-router-dom';

const drawerWidth = 240;
function Navbar(props) {

    const navigate = useNavigate()
    const { window } = props;
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

    const [auth, setAuth] = React.useState(false);

    const handleSignInMenu = () => {
        setAuth(true)
    }
    const handleSignOutMenu = () => {
        setAuth(false)
        navigate('/')
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar component="nav">
                <Container>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
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
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Button sx={{ color: '#fff' }} onClick={() => { navigate('event') }}>Event</Button>
                            <Button sx={{ color: '#fff' }} onClick={() => { navigate('people') }}>People</Button>
                            <Button
                                variant='contained'
                                color='success'
                                sx={{ color: '#fff' }}
                                onClick={() => {
                                    navigate('createEvent')
                                }}>
                                Create Event
                            </Button>
                        </Box>
                        {auth ? <SignInMenu signOut={handleSignOutMenu} /> : <SignOutMenu signIn={handleSignInMenu} />}
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
export default Navbar;