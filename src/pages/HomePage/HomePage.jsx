import React, { useEffect } from 'react'
import './HomePage.css'
import { TopMeelsComponent } from '../../components/TopMeelsComponent/TopMeelsComponent'
import { RestaurantHomeComponent } from '../../components/RestaurantHomeComponent/RestaurantHomeComponent'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRestaurants } from '../../redux/Restaurant/Action'
import { useNavigate } from 'react-router-dom'
import { findCart } from '../../redux/Cart/Action'

const restaurantItem = [0, 1, 2, 3, 4, 5, 6, 7]
export const HomePage = () => {

    const dispatch = useDispatch()
    const jwt = localStorage.getItem('jwt')
    const restaurant = useSelector(state => state.restaurant)
    const navigate = useNavigate()

    console.log(restaurant);



    useEffect(() => {
        if (jwt) {
            dispatch(getAllRestaurants(jwt));

        }
    }, [])

    return (
        <div className='pb-10'>

            <section className='banner -z-50 relative flex flex-col justify-center items-center' >
                <div className='w-[50vw] z-10 text-center '>
                    <p className='text-2xl lg:text-6xl font-bold z-10 py-5' >Thuc Food</p>
                    <p className='z-10 text-gray-300 text-xl lg:text-4xl'>ÁDASDSAAAAAAAAAAAAAAAA</p>
                </div>

                <div className='cover absolute top-0 left-0 right-0'>

                </div>

                <div className='fadout'>

                </div>
            </section>

            <section className='p-10 lg:py-10 lg:px-20'>
                <p className='text-2xl font-semibold text-gray-400 py-3 pb-10' >Top Bán Chạy</p>
                <TopMeelsComponent />
            </section>
            <section className='px-5 lg:px-20 pt-5'>
                <p className='text-2xl font-semibold text-gray-400 py-3 pb-5' >Nhà Hàng Được Yêu Thích</p>
                <div className='flex flex-wrap items-center justify-around gap-5'>
                    {restaurant?.restaurants.map((restaurant) => (
                        <RestaurantHomeComponent key={restaurant.id} item={restaurant} />
                    ))}
                </div>
            </section>
        </div>
    )
}
