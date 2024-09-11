import { Button, TextField, Typography } from '@mui/material'
import { ErrorMessage, Field, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, useNavigate } from 'react-router-dom'
import { LoginUser } from '../../redux/Authentication/Action'

const initialValues = {
    email: '',
    password: ''
}

export const LoginForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Đăng Nhập
            </Typography>

            <Formik
                onSubmit={async (values) => {
                    dispatch(LoginUser({ userData: values, navigate }))
                }}
                initialValues={initialValues}
            >

                {({ handleSubmit, handleChange, values, touched, errors }) => (

                    <Form onSubmit={handleSubmit}>

                        <Field
                            as={TextField}
                            name='email'
                            label='Email'
                            fullWidth
                            variant='outlined'
                            margin='normal'
                            error={!ErrorMessage('email')}
                            helperText={<ErrorMessage name='email' >
                                {(msg) => <span style={{ color: 'red' }}>{msg}</span>}
                            </ErrorMessage>}

                        ></Field>

                        <Field
                            as={TextField}
                            name='password'
                            label='password'
                            type='password'
                            fullWidth
                            variant='outlined'
                            margin='normal'
                            error={!ErrorMessage('password')}
                            helperText={<ErrorMessage name='password' >
                                {(msg) => <span style={{ color: 'red' }}>{msg}</span>}
                            </ErrorMessage>}

                        ></Field>

                        <Button sx={{ mt: 2, padding: '1rem' }} fullWidth type='submit' variant='contained'>
                            Đăng nhập
                        </Button>

                    </Form>
                )}

            </Formik>

            <Typography variant='body2' className='text-center pt-5'>
                Bạn chưa có tài khoản?
                <Button size='small' color='primary' onClick={() => navigate('/account/register')}>
                    Đăng ký ngay
                </Button>
            </Typography>
        </div>
    )
}
