import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import userImage from '../../../assets/user.png'
import React from 'react'
import { Link } from 'react-router-dom'

const PeopleCard = ({ value }) => {
    return (
        <Card>
            <CardActionArea>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/profile/${value.id}`}>
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
                </Link>
            </CardActionArea>
        </Card>
    )
}

export default PeopleCard