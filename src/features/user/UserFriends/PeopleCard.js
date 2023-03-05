import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import userImage from '../../../assets/user.png'
import React from 'react'

const PeopleCard = ({value}) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    height='180'
                    component='img'
                    image={value.photoURL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" textAlign='center'>
                        {value.displayName}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default PeopleCard