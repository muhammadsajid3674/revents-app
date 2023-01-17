import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import chatUser from '../../../assets/user.png';
import { ThemeBtnPri } from '../../../components/button/ThemeBtn';

const EventDetailedChat = () => {
    return (
        <Paper>
            <Box sx={{ textAlign: 'center', p: 1, backgroundColor: '#182848', color: '#fff' }}>
                <Typography variant='body1' sx={{ fontWeight: 600 }}>Chat about this event</Typography>
            </Box>
            {/* Comment Section */}
            <Box sx={{ p: 1.5 }}>
                <Box>
                    <Grid container spacing={1} sx={{ margin: '2px 0' }}>
                        <Grid item md={1}>
                            <img src={chatUser} style={{ maxWidth: '100%' }} alt='' />
                        </Grid>
                        <Grid item md={11}>
                            <Stack direction='row' alignItems='center' spacing={1}>
                                <Typography variant='body1' sx={{ fontWeight: 600 }}>Matt</Typography>
                                <Typography variant='body2' sx={{ color: '#aaa' }}>Today at 5:42 PM</Typography>
                            </Stack>
                            <Typography variant='subtitle1'>How artistic!</Typography>
                            <Typography variant='body2' display='inline' sx={{
                                color: '#aaa',
                                '&:hover': {
                                    cursor: 'pointer',
                                    textDecoration: 'underline'
                                }
                            }}>Reply</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Grid container spacing={1} sx={{ margin: '2px 0' }}>
                        <Grid item md={1}>
                            <img src={chatUser} style={{ maxWidth: '100%' }} alt='' />
                        </Grid>
                        <Grid item md={11}>
                            <Stack direction='row' alignItems='center' spacing={1}>
                                <Typography variant='body1' sx={{ fontWeight: 600 }}>Elliot Fu</Typography>
                                <Typography variant='body2' sx={{ color: '#aaa' }}>Today at 5:42 PM</Typography>
                            </Stack>
                            <Typography variant='subtitle1'>This has been very useful for my research. Thank as well!</Typography>
                            <Typography variant='body2' display='inline' sx={{
                                color: '#aaa',
                                '&:hover': {
                                    cursor: 'pointer',
                                    textDecoration: 'underline'
                                }
                            }}>Reply</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} sx={{ margin: '2px 0', marginLeft: '2.5rem' }}>
                        <Grid item md={1}>
                            <img src={chatUser} style={{ maxWidth: '100%' }} alt='' />
                        </Grid>
                        <Grid item md={11}>
                            <Stack direction='row' alignItems='center' spacing={1}>
                                <Typography variant='body1' sx={{ fontWeight: 600 }}>Jerry Hess</Typography>
                                <Typography variant='body2' sx={{ color: '#aaa' }}>Today at 5:42 PM</Typography>
                            </Stack>
                            <Typography variant='subtitle1'>Elliot you are always so right :)</Typography>
                            <Typography variant='body2' display='inline' sx={{
                                color: '#aaa',
                                '&:hover': {
                                    cursor: 'pointer',
                                    textDecoration: 'underline'
                                }
                            }}>Reply</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Grid container spacing={1} sx={{ margin: '2px 0' }}>
                        <Grid item md={1}>
                            <img src={chatUser} style={{ maxWidth: '100%' }} alt='' />
                        </Grid>
                        <Grid item md={11}>
                            <Stack direction='row' alignItems='center' spacing={1}>
                                <Typography variant='body1' sx={{ fontWeight: 600 }}>Joe Henderson</Typography>
                                <Typography variant='body2' sx={{ color: '#aaa' }}>Today at 5:42 PM</Typography>
                            </Stack>
                            <Typography variant='subtitle1'>Dude This is Awesome. Thank so  much</Typography>
                            <Typography variant='body2' display='inline' sx={{
                                color: '#aaa',
                                '&:hover': {
                                    cursor: 'pointer',
                                    textDecoration: 'underline'
                                }
                            }}>Reply</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Stack spacing={1}>
                    <textarea rows="7" className='form-control'></textarea>
                    <Box>
                        <ThemeBtnPri label='Add Reply' />
                    </Box>
                </Stack>
            </Box>
        </Paper>
    )
}

export default EventDetailedChat