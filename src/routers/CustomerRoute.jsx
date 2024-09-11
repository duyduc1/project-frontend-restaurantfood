import React from 'react'
import { NavbarComponent } from '../components/NavbarComponent/NavbarComponent'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage/HomePage'
import { RestaurantPage } from '../pages/RestaurantPage/RestaurantPage'
import { CartPage } from '../pages/CartPage/CartPage'
import { ProfilePage } from '../pages/ProfilePage/ProfilePage'
import { PaymentSuccess } from '../pages/PaymentPage/PaymentSuccess'

export const CustomerRoute = () => {
    return (
        <div>
            <NavbarComponent />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/account/:register' element={<HomePage />} />
                <Route path='/restaurant/:city/:title/:id' element={<RestaurantPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/my-profile/*' element={<ProfilePage />} />
                <Route path='/payment/success/:id' element={<PaymentSuccess />} />
            </Routes>
        </div>
    )
}
