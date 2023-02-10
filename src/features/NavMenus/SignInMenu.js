import { Avatar, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export const SignInMenu = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <Avatar alt={props.auth.displayName} src={props.auth.photoURL || "../../assets/user.png"} />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>
                    <ListItemIcon>
                        <AddIcon />
                    </ListItemIcon>
                    <ListItemText>Create Event</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <WorkIcon />
                    </ListItemIcon>
                    <ListItemText>My Event</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText>My Network</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText>My Profile</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => { navigate('settings'); setAnchorEl(null); }}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText>Setting</ListItemText>
                </MenuItem>
                <MenuItem onClick={props.signOut}><ListItemIcon>
                    <PowerSettingsNewIcon />
                </ListItemIcon>
                    <ListItemText>Sign Out</ListItemText>
                </MenuItem>
            </Menu>
            <Typography variant='p' sx={{ fontWeight: 600 }}>{props.auth.displayName}</Typography>
        </div>
    )
}
