import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Badge, Box, IconButton } from '@mui/material';
import { pink } from '@mui/material/colors';
import './NavbarComponent.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { Person } from '@mui/icons-material';
import { useSelector } from 'react-redux';

export const NavbarComponent = () => {

    const auth = useSelector(state => state.auth);
    const cart = useSelector(state => state.cart);

    const navigate = useNavigate();

    const handleAvartar = () => {
        if (auth.user.role === "ROLE_CUSTOMER") {
            navigate('/my-profile');
        }
        if (auth.user.role === 'ROLE_RESTAURANT_OWNER') {
            navigate('/admin/restaurant');
        }
    }

    return (
        <Box className='px-5 z-50 sticky top-0 py-[.8rem] bg-[#e91e63] lg:px-20 flex
        justify-between' >
            <div className='flex items-center space-x-4'>
                <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                    <NavLink to={'/'} className='logo font-semibold text-gray-300 text-2xl'>
                        DDT Food
                    </NavLink>
                </div>
            </div>
            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div className=''>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: '1.5rem' }} />
                    </IconButton>
                </div>

                <div className=''>
                    {auth?.user ? (
                        <Avatar onClick={() => handleAvartar()} sx={{ bgcolor: 'white', color: pink.A400, cursor: 'pointer' }} >
                            {auth.user?.fullName[0].toUpperCase()}
                        </Avatar>
                    ) : (
                        <IconButton onClick={() => navigate('/account/login')}>
                            <Person />
                        </IconButton>
                    )}
                </div>

                <div className=''>
                    <IconButton onClick={() => navigate('/cart')}>
                        <Badge badgeContent={cart?.cart?.items?.length} color="secondary" >
                            <ShoppingCartIcon sx={{ fontSize: '1.5rem' }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </Box>
    )
}
