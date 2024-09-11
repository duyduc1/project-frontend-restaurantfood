import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateRestaurantForm } from '../components/AdminComponent/DefaultAdmin/CreateRestaurantForm'
import { Admin } from '../components/AdminComponent/DefaultAdmin/Admin'
import { useSelector } from 'react-redux'

export const AdminRoute = () => {

    const restaurant = useSelector(state => state.restaurant)

    console.log(restaurant);


    return (
        <div>
            <Routes>
                <Route path="/*" element={
                    !restaurant?.usersRestaurant ? <CreateRestaurantForm /> : <Admin />} />
            </Routes>
        </div>
    )
}
