import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Stack } from '@mui/material';
import eventImage from '../../../assets/categoryImages/travel.jpg';
import EventIcon from '@mui/icons-material/Event';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography variant='body1'>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `event-tab-${index}`,
        'aria-controls': `event-tabpanel-${index}`,
    };
}

export default function UserEventDetail() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper sx={{ padding: '10px 15px' }}>
            <Stack direction='row' alignItems='center' spacing={1} sx={{ marginBottom: '0.5rem' }}>
                <EventIcon fontSize='large' />
                <Typography variant='h5'>Events</Typography>
            </Stack>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} textColor="primary" indicatorColor="primary" aria-label="basic tabs example">
                        <Tab label="All Event" {...a11yProps('all')} />
                        <Tab label="Future Event" {...a11yProps('future')} />
                        <Tab label="Past Event" {...a11yProps('past')} />
                        <Tab label="Events Hosted" {...a11yProps('hosted')} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Grid container spacing={2}>
                        <Grid item md={4}>
                            <Card sx={{ maxWidth: 200 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={eventImage}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Event name
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Date
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item md={4}>
                            <Card sx={{ maxWidth: 200 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={eventImage}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Event name
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Date
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item md={4}>
                            <Card sx={{ maxWidth: 200 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={eventImage}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Event name
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Date
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item md={4}>
                            <Card sx={{ maxWidth: 200 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={eventImage}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Event name
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Date
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item md={4}>
                            <Card sx={{ maxWidth: 200 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={eventImage}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Event name
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Date
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Three
                </TabPanel>
            </Box>
        </Paper>
    );
}