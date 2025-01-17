import { Card, Chip, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'
import './RestaurantHomeComponent.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddToFavorite } from '../../redux/Authentication/Action';
import { isPresentInFavorites } from '../../config/logic';

export const RestaurantHomeComponent = ({ item }) => {

    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');


    const handleNavigateToRestaurant = () => {
        if (item.open) {
            navigate(`/restaurant/${item.address.city}/${item.name}/${item.id}`)
        }
    }

    const handleAddToFavorites = () => {
        dispatch(AddToFavorite({
            restaurantId: item.id,
            jwt: jwt,
        }))
    }

    return (
        <Card className='w-[18rem] productCard'>

            <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
                <img
                    className='w-full h-[10rem] rounded-t-md object-cover'
                    src={item.images[0]}
                    alt=''
                />
                <Chip
                    className='absolute top-2 left-2'
                    size='small'
                    color={item.open ? 'success' : 'error'}
                    label={item.open ? 'Mở Cửa' : 'Đóng Cửa'}
                />

            </div>

            <div className='texTPart p-4 lg:flex w-full justify-between'>
                <div className='space-y-1'>
                    <p onClick={handleNavigateToRestaurant} className='font-semibold text-lg cursor-pointer'>
                        {item.name}
                    </p>
                    <p className='text-gray-500 text-sm'>
                        {item.description}
                    </p>
                </div>

                <div>
                    <IconButton onClick={handleAddToFavorites}>
                        {isPresentInFavorites(auth?.favorites, item.id) ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon />}
                    </IconButton>
                </div>
            </div>
        </Card>
    )
}
