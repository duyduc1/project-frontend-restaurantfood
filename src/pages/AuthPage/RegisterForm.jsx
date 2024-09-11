import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Form, useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/Authentication/Action';

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  role: ''
}

export const RegisterForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  return (
    <div>
      <Typography variant='h5' className='text-center'>
        Đăng Nhập
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          console.log(values);
          dispatch(registerUser({ userData: values, navigate }))
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (

          <Form onSubmit={handleSubmit}>
            <Field
              as={TextField}
              name='fullName'
              label='FullName'
              fullWidth
              variant='outlined'
              margin='dense'
              error={!ErrorMessage('fullName')}
              helperText={<ErrorMessage name='fullName' >
                {(msg) => <span style={{ color: 'red' }}>{msg}</span>}
              </ErrorMessage>}

            ></Field>

            <Field
              as={TextField}
              name='email'
              label='Email'
              fullWidth
              variant='outlined'
              margin='dense'
              error={!ErrorMessage('email')}
              helperText={<ErrorMessage name='email' >
                {(msg) => <span style={{ color: 'red' }}>{msg}</span>}
              </ErrorMessage>}

            ></Field>

            <Field
              as={TextField}
              name='password'
              label='Password'
              type='password'
              fullWidth
              variant='outlined'
              margin='dense'
              error={!ErrorMessage('password')}
              helperText={<ErrorMessage name='password' >
                {(msg) => <span style={{ color: 'red' }}>{msg}</span>}
              </ErrorMessage>}

            ></Field>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Người dùng</InputLabel>
              <Field
                as={Select}
                fullWidth
                variant='outlined'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name='role'
                // value={age}
                label="Người dùng"
                // onChange={handleChange}
                margin='dense'

              >
                <MenuItem value={"ROLE_CUSTOMER"}>Khách hàng</MenuItem>
                <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Chủ nhà hàng</MenuItem>
              </Field>
            </FormControl>

            <Button sx={{ mt: 2, padding: '1rem' }} fullWidth type='submit' variant='contained'>
              Đăng ký
            </Button>

          </Form>
        )}
      </Formik>

      <Typography variant='body2' className='text-center pt-5'>
        Bạn đã có tài khoản?
        <Button size='small' color='primary' onClick={() => navigate('/account/login')}>
          Đăng nhập ngay
        </Button>
      </Typography>
    </div>
  )
}
