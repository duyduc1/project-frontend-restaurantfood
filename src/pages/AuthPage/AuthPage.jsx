import { Box, Modal } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { style } from '../../utils/StyleModal'
import { RegisterForm } from './RegisterForm'
import { LoginForm } from './LoginForm'

export const AuthPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/');
    }

    return (
        <>
            <Modal
                open={
                    location.pathname === '/account/register' ||
                    location.pathname === '/account/login'
                }

                onClose={handleClose}
            >

                <Box sx={style}>
                    {location.pathname === '/account/register' ? (
                        <RegisterForm />
                    ) : (
                        <LoginForm />
                    )}
                </Box>

            </Modal>
        </>
    )
}
