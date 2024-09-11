import { Create, Delete } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardHeader, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteFoodAction, getMenuItemsByRestaurantId } from '../../../redux/Menu/Action'
import { getIngredientCategory, getIngredientsOfRestaurant } from '../../../redux/Ingredients/Action'
import { getRestaurantCategory } from '../../../redux/Restaurant/Action'

const orders = [0, 1, 2, 3, 4, 5]

export const MenuTable = () => {

    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const restaurant = useSelector(state => state.restaurant);
    const ingredients = useSelector(state => state.ingredients);
    const menu = useSelector(state => state.menu);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getIngredientsOfRestaurant({ id: restaurant?.usersRestaurant?.id, jwt: jwt }));
    }, [])

    useEffect(() => {
        dispatch(getMenuItemsByRestaurantId({
            jwt,
            restaurantId: restaurant?.usersRestaurant?.id,
            vegetarian: false,
            nonveg: false,
            seasonal: false,
            food_category: ''
        }));
    }, [menu.message === 'Xóa đồ ăn thành công'])


    const handleDeleteFood = (id) => {
        dispatch(deleteFoodAction({ id, jwt }));
    }

    return (
        <Box >
            <Card className='mt-1'>
                <CardHeader
                    action={
                        <IconButton onClick={() => navigate('/admin/restaurant/add-menu')} aria-label="settings">
                            <Create />
                        </IconButton>
                    }
                    title='Menu'
                    sx={{ pt: 2, alignItems: 'center' }}
                    al
                />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">Ingredient</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Avaibility</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {menu.menuItems.map((item, index) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <Avatar>
                                            <img src={item.images[0]} alt="" />
                                        </Avatar>
                                    </TableCell>
                                    <TableCell align="right">
                                        {item.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        {item.ingredients.map((ingredient) => (
                                            <Chip
                                                label={ingredient.name}
                                            />


                                        ))}
                                    </TableCell>
                                    <TableCell align="right">{item.price}.000 VNĐ</TableCell>
                                    <TableCell align="right">{item.available ? 'in_stoke' : 'out_of_stoke'}</TableCell>
                                    <TableCell align="right">
                                        <IconButton color='primary' onClick={() => handleDeleteFood(item.id)} aria-label="settings">
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    )
}
