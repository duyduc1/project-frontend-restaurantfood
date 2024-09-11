import React from 'react'
import { RestaurantHomeComponent } from '../RestaurantHomeComponent/RestaurantHomeComponent'
import { useSelector } from 'react-redux'

export const FavoriteProfile = () => {

    const auth = useSelector(state => state.auth);

    return (
        <div >
            <h1 className='py-5 text-xl font-semibold text-center'>Cửa hàng yêu thích</h1>

            <div className='flex flex-wrap gap-3 justify-center'>
                {
                    auth?.favorites.map((item, index) => (
                        <RestaurantHomeComponent item={item} />
                    ))
                }
            </div>

        </div>
    )
}
