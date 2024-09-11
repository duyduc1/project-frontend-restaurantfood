import { Card, CardActions, CardContent, CardMedia, Icon, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
    return (
        <Card sx={{ width: 345 }}>
            <CardMedia
                sx={{ height: 345 }}
                className='lazyload'
                image='https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            />

            <CardContent>
                <Typography variant='h5'>
                    Đồ Ăn Nhanh Ý
                </Typography>
                <Typography variant='body2'>
                    giảm giá 50% khi đặt hàng từ 10h - 12h
                </Typography>

                <div className='py-2 space-y-2'>
                    <p className='text-sm text-blue-500'>Thứ 7, ngày 20 thàng 11</p>
                    <p className='text-sm text-red-500'>Chủ nhật, ngày 21 thàng 11</p>
                </div>
            </CardContent>

            {false &&
                <CardActions>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            }

        </Card>
    )
}
