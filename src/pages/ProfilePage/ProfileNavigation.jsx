import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css'
import { useDispatch } from 'react-redux';
import { Logout } from '../../redux/Authentication/Action';

const menu = [
    {
        title: 'Đặt hàng',
        slug: 'orders',
        icon: <ShoppingCartIcon />,
    },
    {
        title: 'Nhà hàng yêu thích',
        slug: 'favorites-restaurants',
        icon: <FavoriteIcon />,
    },
    {
        title: 'Địa chỉ',
        slug: 'address',
        icon: <HomeIcon />,
    },
    {
        title: 'Thanh toán',
        slug: 'payment',
        icon: <AccountBalanceWalletIcon />,
    },
    {
        title: 'Thông báo',
        slug: 'notifications',
        icon: <NotificationsActiveIcon />,
    },
    {
        title: 'Sự kiện',
        slug: 'events',
        icon: <EventIcon />,
    },
    {
        title: 'Đăng xuất',
        slug: 'logout',
        icon: <LogoutIcon />,
    },
]

export const ProfileNavigation = ({ open, handleClose }) => {

    const isSmallScreen = useMediaQuery('(max-width: 900px)');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavigate = (item) => {
        console.log(item.slug);

        if (item.slug === 'logout') {
            dispatch(Logout());
            return navigate('/');
        }
        navigate(`/my-profile/${item.slug.toLowerCase().replace(' ', '-')}`)
    }

    return (
        <div>
            <Drawer
                variant={isSmallScreen ? 'temporary' : 'permanent'}
                onClose={handleClose}
                open={open}
                anchor='left'
                sx={{ zIndex: 1 }}
                className='ProfileNavigation'
            >

                <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center
                 text-xl gap-8 pt-16'>
                    {menu.map((item, index) => (
                        <>
                            <div onClick={() => handleNavigate(item)} className='px-5 flex items-center space-x-5 cursor-pointer'>
                                {item.icon}
                                <span>{item.title}</span>
                            </div>
                            {index !== menu.length - 1 && <Divider />}
                        </>
                    ))}
                </div>

            </Drawer>
        </div>
    )
}
