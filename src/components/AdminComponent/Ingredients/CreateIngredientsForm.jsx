import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createIngredient, createIngredientCategory } from '../../../redux/Ingredients/Action';

export const CreateIngredientsForm = () => {

    const dispatch = useDispatch();
    const restaurant = useSelector(state => state.restaurant);
    const ingredients = useSelector(state => state.ingredients);
    const jwt = localStorage.getItem('jwt');

    const [formData, setFormData] = useState({
        name: '',
        categoryId: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            ...formData,
            restaurantId: restaurant?.usersRestaurant?.id,
        }

        dispatch(createIngredient({ data: data, jwt: jwt }));

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
                    Create Ingredient
                </h1>
                <form className='space-y-5' onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        id='name'
                        name='name'
                        label='Name'
                        variant='outlined'
                        onChange={(e) => handleInputChange(e)}
                        value={formData.name}
                    >

                    </TextField>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Food Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.ingredientCategoryId}
                            label="Category"
                            onChange={handleInputChange}
                            name='categoryId'
                        >
                            {
                                ingredients?.categories.map((item, index) => (
                                    <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                                ))
                            }

                        </Select>
                    </FormControl>

                    <Button fullWidth variant='contained' type='submit'>
                        Create Ingredient
                    </Button>
                </form>
            </div>
        </div>
    )
}
