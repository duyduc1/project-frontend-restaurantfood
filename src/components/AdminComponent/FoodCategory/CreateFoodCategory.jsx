import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCategory } from '../../../redux/Restaurant/Action'

export const CreateFoodCategory = () => {

    const restaurant = useSelector(state => state.restaurant)
    const dispatch = useDispatch()

    console.log(restaurant);


    const [formData, setFormData] = useState({
        categoryName: '',
        restaurantId: ''
    })

    const handleSubmit = (e) => {
        const data = {
            name: formData.categoryName,
            restaurantId: {
                id: restaurant?.usersRestaurant?.id,
            }
        }

        dispatch(createCategory({
            reqData: data,
            jwt: localStorage.getItem('jwt')
        }))

        console.log(data);
    }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <div className='p-5'>
                <h1 className='text-gray-400 text-center text-xl pb-10'>
                    Create Food Category
                </h1>
                <form className='space-y-5' onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        id='categoryName'
                        name='categoryName'
                        label='Cusine Type'
                        variant='outlined'
                        onChange={(e) => handleInputChange(e)}
                        value={formData.categoryName}
                    >

                    </TextField>

                    <Button fullWidth variant='contained' type='submit'>
                        Create Food Category
                    </Button>
                </form>
            </div>
        </div>
    )
}
