import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { MenuCard } from './MenuCard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getRestaurantCategory, getRestaurantsById } from '../../redux/Restaurant/Action';
import { getMenuItemsByRestaurantId } from '../../redux/Menu/Action';

const foodTypes = [
    { name: 'Tất Cả', value: 'all' },
    { name: 'Món Chay', value: 'vegetarian' },
    { name: 'Món Mặn', value: 'non_vegetarian' },
    { name: 'Theo Mùa', value: 'seasonal' }
]

export const RestaurantPage = () => {

    const [foodType, setFoodType] = useState('all')
    const auth = useSelector(state => state.auth);
    const menu = useSelector(state => state.menu);
    const restaurant = useSelector(state => state.restaurant);

    const [selectedCategory, setSelectedCategory] = useState('');



    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');

    const { id, city } = useParams();

    // handle 
    const handleFilter = (e) => {
        setFoodType(e.target.value);
    }

    const handleFilterCategory = (e) => {
        setSelectedCategory(e.target.value);

    }

    useEffect(() => {
        dispatch(getRestaurantsById({ jwt, restaurantId: id }));
        dispatch(getRestaurantCategory({ jwt, restaurantId: id }));
    }, [])

    useEffect(() => {
        dispatch(getMenuItemsByRestaurantId({
            jwt,
            restaurantId: id,
            vegetarian: foodType === 'vegetarian',
            nonveg: foodType === 'non_vegetarian',
            seasonal: foodType === 'seasonal',
            food_category: selectedCategory
        }));
    }, [selectedCategory, foodType])

    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className='py-2 mt-10'>Home/Ý/Nhà Hàng Ý/3</h3>

                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img className='w-full h-[40vh] object-cover'
                                src={restaurant.restaurant?.images[0]} alt="" />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover'
                                src={restaurant.restaurant?.images[1]} alt="" />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover'
                                src={restaurant.restaurant?.images[2]} alt="" />
                        </Grid>
                    </Grid>

                </div>

                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'>{restaurant.restaurant?.name}</h1>
                    <p className='text-gray-500 mt-1' >{restaurant.restaurant?.description}</p>

                    <div className='space-y-3 mt-3'>

                        <p className='text-gray-500 flex items-center gap-3'>

                            <PlaceIcon />

                            <span>
                                123 Đường ABC, Quận 1, TP.HCM
                            </span>
                        </p>
                        <p className='text-gray-500 flex items-center gap-3'>

                            <CalendarMonthIcon />

                            <span>
                                Thứ 2 - Chủ Nhật: 8:00 - 22:00
                            </span>
                        </p>

                    </div>
                </div>
            </section>

            <Divider />

            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter'>
                    <div className='box space-y-5 lg:sticky top-28'>
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: '1rem' }}
                                className='font-semibold'>
                                Món Ăn
                            </Typography>

                            <FormControl className='py-10 space-y-5'
                                component={'fieldset'}
                            >
                                <RadioGroup onChange={(e) => handleFilter(e)} name='food_type' value={foodType}>
                                    {foodTypes.map((foodType, index) => (
                                        <FormControlLabel
                                            key={foodType.value}
                                            value={foodType.value}
                                            control={<Radio />}
                                            label={foodType.name}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <Divider />

                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: '1rem' }}
                                className='font-semibold'>
                                Loại Đồ Ăn
                            </Typography>

                            <FormControl className='py-10 space-y-5'
                                component={'fieldset'}
                            >
                                <RadioGroup onChange={(e) => handleFilterCategory(e)}
                                    name='food_category'
                                    value={selectedCategory}
                                >
                                    {restaurant?.categories.map((categorie, index) => (
                                        <FormControlLabel
                                            key={categorie.id}
                                            value={categorie.name}
                                            control={<Radio />}
                                            label={categorie.name}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {menu?.menuItems.map((menuItem, index) => (
                        <MenuCard key={menuItem.id} item={menuItem} />
                    ))}
                </div>
            </section>
        </div>
    )
}
