import { Create, Delete } from '@mui/icons-material'
import { Box, Card, CardActions, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { CreateFoodCategory } from './CreateFoodCategory';
import { style } from '../../../utils/StyleModal';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantCategory } from '../../../redux/Restaurant/Action';
import { fetchRestaurantOrders } from '../../../redux/RestaurantOrder/Action';

const orders = [0, 1, 2, 3, 4, 5]

export const FoodCategoryTable = () => {

    const category = useSelector(state => state.category)
    const restaurant = useSelector(state => state.restaurant)
    const dispatch = useDispatch()
    const jwt = localStorage.getItem('jwt')

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        dispatch(getRestaurantCategory({
            jwt,
            restaurantId: restaurant?.usersRestaurant?.id
        }))

    }, [])

    return (
        <Box >
            <Card className='mt-1'>
                <CardHeader
                    action={
                        <IconButton
                            onClick={handleOpen}
                            aria-label="settings">
                            <Create />
                        </IconButton>
                    }
                    title='Các Món Ăn'
                    sx={{ pt: 2, alignItems: 'center' }}
                    al
                />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {restaurant?.categories.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.id}
                                    </TableCell>
                                    <TableCell align="left">{item.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CreateFoodCategory />
                </Box>
            </Modal>
        </Box>
    )
}
