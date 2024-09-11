import { Box, Button, Grid, Modal, TextField } from '@mui/material'
import React from 'react'
import { style } from '../../../utils/StyleModal';
import dayjs from 'dayjs';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useDispatch, useSelector } from 'react-redux';
import { createEventAction } from '../../../redux/Restaurant/Action';

export const Event = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const restaurant = useSelector(state => state.restaurant);
    const ingredients = useSelector(state => state.ingredients);
    const restaurantOrder = useSelector(state => state.restaurantOrder);
    const menu = useSelector(state => state.menu);

    const [formData, setFormData] = React.useState({
        image: '',
        location: '',
        name: '',
        startedAt: dayjs(),
        endsAt: dayjs()
    })

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleDateChange = (date, dateType) => {
        const formatedDate = dayjs(date).format('MMMM DD, YYYY hh:mm A')
        setFormData({
            ...formData,
            [dateType]: formatedDate
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        dispatch(createEventAction({
            restaurantId: restaurant?.usersRestaurant.id,
            data: formData,
            jwt
        }))
    }

    return (
        <div>
            <div className='p-5 '>
                <Button onClick={handleOpen} variant='contained'>
                    Create Event
                </Button>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        name='image'
                                        label='Image URL'
                                        variant='outlined'
                                        fullWidth
                                        value={formData.image}
                                        onChange={(e) => handleFormChange(e)}
                                    >

                                    </TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        name='location'
                                        label='Location'
                                        variant='outlined'
                                        fullWidth
                                        value={formData.location}
                                        onChange={(e) => handleFormChange(e)}
                                    >

                                    </TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        name='name'
                                        label='Event Name'
                                        variant='outlined'
                                        fullWidth
                                        value={formData.name}
                                        onChange={(e) => handleFormChange(e)}
                                    >

                                    </TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker
                                            renderInput={(props) => <TextField {...props} />}
                                            label="Start Date and Time"
                                            value={formData.startedAt}
                                            onChange={(newValue) => handleDateChange(newValue, 'startedAt')}
                                            inputFormat='MM/dd/yyyy hh:mm a'
                                            className='w-full'
                                            sx={{ width: '100%' }}
                                        />
                                    </LocalizationProvider>
                                </Grid>

                                <Grid item xs={12}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker
                                            renderInput={(props) => <TextField {...props} />}
                                            label="End Date and Time"
                                            value={formData.endsAt}
                                            onChange={(newValue) => handleDateChange(newValue, 'endsAt')}
                                            inputFormat='MM/dd/yyyy hh:mm a'
                                            className='w-full'
                                            sx={{ width: '100%' }}
                                        />
                                    </LocalizationProvider>
                                </Grid>

                                <Grid item xs={12}>

                                    <Button fullWidth type='submit' variant='contained' color='primary'>
                                        Create Event
                                    </Button>
                                </Grid>

                            </Grid>
                        </form>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}
