import { Box, Button, Card, Divider, Grid, Modal, TextField } from '@mui/material'
import React from 'react'
import { CartItem } from './CartItem'
import { AddressCard } from './AddressCard'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { style } from '../../utils/StyleModal';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../redux/Order/Action';

const initialValues = {
    streetAddress: '',
    state: '',
    pincode: '',
    city: '',
}

const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    pincode: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
})

export const CartPage = () => {

    const [open, setOpen] = React.useState(false);

    const cart = useSelector(state => state.cart);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    //handle
    const handleClose = () => setOpen(false);

    const handleOrderUsingSelectedAddress = (item) => {
        console.log(item)
    }

    const handleOpenAddressModal = () => {
        setOpen(true)
    }

    const handleSubmit = (values) => {
        const data = {
            jwt: localStorage.getItem('jwt'),
            order: {
                restaurantId: cart.cartItems[0].food?.restaurant.id,
                deliveryAddress: {
                    fullName: auth.user?.fullName,
                    streetAddress: values.streetAddress,
                    state: values.state,
                    city: values.city,
                    postalCode: values.pincode,
                    country: 'Vietnam',
                }
            }
        }

        dispatch(createOrder(data))
    }

    console.log(cart);


    return (
        <div>
            <main className='lg:flex justify-between'>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                    {cart?.cartItems.map((item, index) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <Divider />

                    <div className='billDetails px-5 text-sm'>
                        <p className='font-extralight pt-5'>Chi tiết hóa đơn</p>
                        <div className='space-y-3'>
                            <div className='flex justify-between text-gray-400'>
                                <p>Phí đồ ăn</p>
                                <p>{cart.cart?.total}.000 VNĐ</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>Phí ship</p>
                                <p>20.000 VNĐ</p>
                            </div>

                            <Divider />
                        </div>

                        <div className='flex justify-between text-gray-400 pb-28'>
                            <p>Tổng Hóa Đơn</p>
                            <p>{cart.cart?.total + 20}.000 VNĐ</p>
                        </div>

                    </div>
                </section>
                <Divider orientation='vertical' flexItem />


                <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                    <div>
                        <h1 className='text-center font-semibold text-2xl py-10' >Thêm Địa Chỉ Nhận Hàng</h1>
                        <div className='flex gap-5 flex-wrap justify-center'>
                            {[0, 1, 2].map((item, index) => (
                                <AddressCard key={item} showButton={true} handleSelectAddress={handleOrderUsingSelectedAddress} />
                            ))}

                            <Card className='flex gap-5 w-64 p-5'>
                                <AddLocationAltIcon />
                                <div className='space-y-3 text-gray-500 '>
                                    <h1 className='font-semibold text-lg text-white'>Thêm Địa Chỉ Mới</h1>
                                    <p>
                                        Tổ 49 , Trường Chinh , An Khê, Thanh Khê, Đà Nẵng, Việt Nam
                                    </p>
                                    <Button variant='contained' onClick={() => handleOpenAddressModal()}>Thêm</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

            </main>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >

                        <Form >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name='streetAddress'
                                        label='Địa chỉ'
                                        fullWidth
                                        variant='outlined'
                                        error={!ErrorMessage('streetAddress')}
                                        helperText={<ErrorMessage name='streetAddress' >
                                            {(msg) => <span style={{ color: 'red' }}>{msg}</span>}
                                        </ErrorMessage>}

                                    >

                                    </Field>
                                </Grid>

                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name='state'
                                        label='Quận/Huyện'
                                        fullWidth
                                        variant='outlined'
                                        error={!ErrorMessage('state')}
                                        helperText={<ErrorMessage name='state' >
                                            {(msg) => <span style={{ color: 'red' }}>{msg}</span>}
                                        </ErrorMessage>}

                                    >

                                    </Field>
                                </Grid>

                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name='city'
                                        label='Thành Phố'
                                        fullWidth
                                        variant='outlined'
                                        error={!ErrorMessage('city')}
                                        helperText={<ErrorMessage name='city' >
                                            {(msg) => <span style={{ color: 'red' }}>{msg}</span>}
                                        </ErrorMessage>}

                                    >

                                    </Field>
                                </Grid>

                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name='pincode'
                                        label='Mã Bưu Điện'
                                        fullWidth
                                        variant='outlined'
                                        error={!ErrorMessage('pincode')}
                                        helperText={<ErrorMessage name='pincode' >
                                            {(msg) => <span style={{ color: 'red' }}>{msg}</span>}
                                        </ErrorMessage>}

                                    >

                                    </Field>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button fullWidth variant='contained' type='submit' color='primary'>GIAO TỚI ĐỊA CHỈ NÀY</Button>
                                </Grid>

                            </Grid>

                        </Form>

                    </Formik>
                </Box>
            </Modal>

        </div>
    )
}
