import React, { useEffect } from 'react'
import { AdminSideBar } from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import { Dashborad } from '../Dashborad/Dashborad'
import { Orders } from '../Orders/Orders'
import { Menu } from '../Menu/Menu'
import { FoodCategory } from '../FoodCategory/FoodCategory'
import { Ingredients } from '../Ingredients/Ingredients'
import { Event } from '../Event/Event'
import { RestaurantDetails } from '../RestaurantDetails/RestaurantDetails'
import { CreateMenuForm } from '../Menu/CreateMenuForm'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantCategory, getRestaurantsById } from '../../../redux/Restaurant/Action'
import { getMenuItemsByRestaurantId } from '../../../redux/Menu/Action'
import { getUsersOrders } from '../../../redux/Order/Action'
import { fetchRestaurantOrders } from '../../../redux/RestaurantOrder/Action'

export const Admin = () => {

    const dispatch = useDispatch()

    const jwt = localStorage.getItem('jwt')
    const restaurant = useSelector(state => state.restaurant)

    const handleClose = () => {

    }

    useEffect(() => {
        dispatch(getRestaurantCategory({
            jwt,
            restaurantId: restaurant?.usersRestaurant?.id
        }))
        dispatch(fetchRestaurantOrders(
            {
                jwt,
                restaurantId: restaurant?.usersRestaurant?.id,
            }
        ))
        // dispatch(getMenuItemsByRestaurantId())
        // dispatch(getRestaurantsById())

    }, [])

    return (
        <div>
            <div className='lg:flex justify-between'>
                <div className='lg:w-[20%]'>
                    <AdminSideBar handleClose={handleClose} />
                </div>
                <div className='lg:w-[80%]'>
                    <Routes>
                        <Route path="/" element={<Dashborad />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/category" element={<FoodCategory />} />
                        <Route path="/ingredients" element={<Ingredients />} />
                        <Route path="/event" element={<Event />} />
                        <Route path="/details" element={<RestaurantDetails />} />
                        <Route path="/add-menu" element={<CreateMenuForm />} />

                    </Routes>
                </div>
            </div>
        </div>
    )
}
