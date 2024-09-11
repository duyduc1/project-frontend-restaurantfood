import { Create, Delete } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { style } from '../../../utils/StyleModal'
import { CreateIngredientsForm } from './CreateIngredientsForm'
import { useDispatch, useSelector } from 'react-redux'
import { getIngredientsOfRestaurant, updateStockOfIngredient } from '../../../redux/Ingredients/Action'

const orders = [0, 1, 2, 3, 4, 5]

export const IngredientsTable = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();
    const restaurant = useSelector(state => state.restaurant);
    const ingredients = useSelector(state => state.ingredients);
    const jwt = localStorage.getItem('jwt');

    useEffect(() => {
        dispatch(getIngredientsOfRestaurant({ id: restaurant?.usersRestaurant?.id, jwt: jwt }));
    }, [])

    const handleUpdateStock = (id) => {
        dispatch(updateStockOfIngredient({ id: id, jwt: jwt }));
    }

    return (
        <Box >
            <Card className='mt-1'>
                <CardHeader
                    action={
                        <IconButton onClick={handleOpen} aria-label="settings">
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
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Category</TableCell>
                                <TableCell align="right">Avability</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ingredients?.ingredients.map((item, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.id}
                                    </TableCell>
                                    <TableCell align="right">{item.name}</TableCell>
                                    <TableCell align="right">{item.category.name}</TableCell>
                                    <TableCell align="right">{
                                        <Button onClick={() => handleUpdateStock(item.id)} >{item.inStoke ? 'in_stoke' : 'out_of_stoke'}</Button>
                                    }</TableCell>

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
                    <CreateIngredientsForm />
                </Box>
            </Modal>
        </Box>
    )
}
