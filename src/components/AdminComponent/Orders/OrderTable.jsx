import { Avatar, AvatarGroup, Box, Button, Card, CardHeader, Chip, Menu, MenuItem, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRestaurantOrders, updateOrderStatus } from '../../../redux/RestaurantOrder/Action';

const orderStatus = [
    {
        label: 'Pending',
        value: 'PENDING'
    },
    {
        label: 'Completed',
        value: 'COMPLETED'
    },
    {
        label: 'Out For Delivery',
        value: 'OUT_FOR_DELIVERY'
    },
    {
        label: 'Delivered',
        value: 'DELIVERED'
    }
]

export const OrderTable = () => {

    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const restaurant = useSelector(state => state.restaurant);
    const ingredients = useSelector(state => state.ingredients);
    const restaurantOrder = useSelector(state => state.restaurantOrder);
    const menu = useSelector(state => state.menu);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    useEffect(() => {
        dispatch(fetchRestaurantOrders({
            restaurantId: restaurant?.usersRestaurant.id,
            jwt
        }))
    }, [])


    const handleUpdateOrderStatus = (item, orderStatus) => {
        console.log(item);

        dispatch(updateOrderStatus({
            orderId: item.id,
            orderStatus,
            jwt
        }))
        handleClose();
    }

    console.log(restaurantOrder);


    return (
        <Box >
            <Card className='mt-1'>
                <CardHeader
                    title='Danh Sách Đơn Hàng'
                    sx={{ pt: 2, alignItems: 'center' }}
                    al
                />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="right">Image</TableCell>
                                <TableCell align="right">Customer</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Ingredient</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {restaurantOrder?.orders.map((item, index) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.id}
                                    </TableCell>
                                    <TableCell align="right">
                                        <AvatarGroup>
                                            {item.items.map((orderItem, index) => (

                                                <Avatar key={orderItem.id} src={orderItem.food.images[0]} />
                                            ))}
                                        </AvatarGroup>
                                    </TableCell>
                                    <TableCell align="right">{item.customer.fullName}</TableCell>
                                    <TableCell align="right">{item.totalPrice}</TableCell>
                                    <TableCell align="right">{item.items.map((orderItem) => (
                                        <p>{orderItem.food.name}</p>
                                    ))}</TableCell>
                                    <TableCell align="right">
                                        {item.items.map((orderItem) => (
                                            <div>
                                                {orderItem.ingredients.map((ingredient) => (
                                                    <Chip label={ingredient} />
                                                ))}
                                            </div>
                                        ))}
                                    </TableCell>
                                    <TableCell align="right">{item.orderstatus}</TableCell>
                                    <TableCell align='right' >
                                        <Button
                                            id="btn-basic"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        >
                                            Update

                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            {orderStatus.map((status) => (
                                                <MenuItem onClick={() => handleUpdateOrderStatus(item, status.value)}>{status.label}</MenuItem>
                                            ))}
                                        </Menu>
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
