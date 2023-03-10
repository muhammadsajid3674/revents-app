import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Grid, ListItemButton, Paper, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SettingNav() {

  const navigate = useNavigate()

  return (
    <Grid container>
      <Grid item md={8}>
        <Stack spacing={3}>
          <Paper sx={{ borderRadius: 0 }}>
            <nav aria-label="main mailbox folders">
              <List sx={{ p: 0 }}>
                <ListItem sx={{ bgcolor: '#eee' }}>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Profile" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => { navigate('') }}>
                    <ListItemText primary="Basics" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => { navigate('about') }}>
                    <ListItemText primary="About Me" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => { navigate('photo') }}>
                    <ListItemText primary="My Photos" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Paper>
          <Paper sx={{ borderRadius: 0 }}>
            <nav aria-label="main mailbox folders">
              <List sx={{ p: 0 }}>
                <ListItem sx={{ bgcolor: '#eee' }}>
                  <ListItemAvatar>
                    <Avatar>
                      <ManageAccountsIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Account" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => { navigate('account') }}>
                    <ListItemText primary="My Account" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Paper>
        </Stack>
      </Grid>
    </Grid>
  );
}