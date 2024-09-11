import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { createIngredientCategory } from '../../../redux/Ingredients/Action'
import { useDispatch, useSelector } from 'react-redux'

export const CreateIngredientsCategoryForm = () => {

    const restaurant = useSelector(state => state.restaurant);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: formData.name,
            restaurantId: restaurant?.usersRestaurant?.id
        }

        dispatch(createIngredientCategory({ data: data, jwt: localStorage.getItem('jwt') }));
        console.log(formData);

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
                    Create Ingredients Category
                </h1>
                <form className='space-y-5' onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        id='name'
                        name='name'
                        label='Category'
                        variant='outlined'
                        onChange={(e) => handleInputChange(e)}
                        value={formData.name}
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
