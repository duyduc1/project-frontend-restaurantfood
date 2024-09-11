import { Create, Delete } from '@mui/icons-material'
import { Box, Card, CardActions, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { style } from '../../../utils/StyleModal'
import { CreateIngredientsCategoryForm } from './CreateIngredientsCategoryForm'
import { useDispatch, useSelector } from 'react-redux'
import { getIngredientCategory } from '../../../redux/Ingredients/Action'

const orders = [0, 1, 2, 3, 4, 5]

export const IngredientsCategoryTable = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();
    const restaurant = useSelector(state => state.restaurant);
    const ingredients = useSelector(state => state.ingredients);
    const jwt = localStorage.getItem('jwt');

    useEffect(() => {
        dispatch(getIngredientCategory({ id: restaurant?.usersRestaurant?.id, jwt: jwt }));
    }, [])

    console.log(ingredients);


    return (
        <Box >
            <Card className='mt-1'>
                <CardHeader
                    action={
                        <IconButton onClick={handleOpen} aria-label="settings">
                            <Create />
                        </IconButton>
                    }
                    title='Ingredients Category'
                    sx={{ pt: 2, alignItems: 'center' }}
                    al
                />

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ingredients?.categories.map((item, index) => (
                                <TableRow
                                    key={index}
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
                    <CreateIngredientsCategoryForm />
                </Box>
            </Modal>
        </Box>
    )
}
