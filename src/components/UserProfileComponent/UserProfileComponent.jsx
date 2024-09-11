import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { Margin } from '@mui/icons-material';

export const UserProfileComponent = () => {

    const handleLogout = () => {
        console.log('Logout')
    }

    return (
        <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
            <div className='flex flex-col items-center justify-center'>
                <AccountCircleIcon sx={{ fontSize: '9rem' }} />
                <h1 className='py-5 text-2xl font-semibold'>Hello Bro</h1>
                <p>Email: thucdn04@gmail.com</p>
                <Button variant='contained' onClick={handleLogout} sx={{ margin: '2rem 0rem' }}>Logout</Button>
            </div>
        </div>
    )
}