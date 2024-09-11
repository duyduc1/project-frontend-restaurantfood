import React, { useState } from 'react'
import { ProfileNavigation } from './ProfileNavigation'
import { Route, Routes } from 'react-router-dom'
import { UserProfileComponent } from '../../components/UserProfileComponent/UserProfileComponent'
import { OrderProfile } from '../../components/UserProfileComponent/OrderProfile'
import { AddressProfile } from '../../components/UserProfileComponent/AddressProfile'
import { FavoriteProfile } from '../../components/UserProfileComponent/FavoriteProfile'
import { PaymentProfile } from '../../components/UserProfileComponent/PaymentProfile'
import { NotificationProfile } from '../../components/UserProfileComponent/NotificationProfile'
import { EventProfile } from '../../components/UserProfileComponent/EventProfile'


export const ProfilePage = () => {

    const [openSideBar, setOpenSideBar] = useState(false)

    return (
        <div className='lg:flex justify-between'>
            <div className='sticky h-[80vh] lg:w-[20%]'>
                <ProfileNavigation open={openSideBar} />
            </div>
            <div className='lg:w-[80%]'>
                <Routes>
                    <Route path='/' element={<UserProfileComponent />} />
                    <Route path='/orders' element={<OrderProfile />} />
                    <Route path='/favorites-restaurants' element={<FavoriteProfile />} />
                    <Route path='/address' element={<AddressProfile />} />
                    <Route path='/payment' element={<PaymentProfile />} />
                    <Route path='/notifications' element={<NotificationProfile />} />
                    <Route path='/events' element={<EventProfile />} />

                </Routes>
            </div>
        </div>
    )
}
