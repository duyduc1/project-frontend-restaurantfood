import React, { Fragment } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import CategoryIcon from '@mui/icons-material/Category';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import EventIcon from '@mui/icons-material/Event';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Card, Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Logout } from '../../../redux/Authentication/Action';

const menu = [
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        path: '/'
    },
    {
        title: "Orders",
        icon: <ShoppingCartIcon />,
        path: '/orders'
    },
    {
        title: "Menu",
        icon: <ShopTwoIcon />,
        path: '/menu'

    },
    {
        title: "Loại Đồ Ăn",
        icon: <CategoryIcon />,
        path: '/category'

    },
    {
        title: "Món Ăn",
        icon: <FastfoodIcon />,
        path: '/ingredients'
    },
    {
        title: "Events",
        icon: <EventIcon />,
        path: '/event'
    },
    {
        title: "Admin Details",
        icon: <AdminPanelSettingsIcon />,
        path: '/details'
    },
    {
        title: "Đăng Xuất",
        icon: <LogoutIcon />,
        path: '/'
    }
]

export const AdminSideBar = ({ handleClose }) => {

    const isSmallScreen = useMediaQuery('(max-width: 1080px)');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavigate = (item) => {
        navigate(`/admin/restaurant${item.path}`)

        if (item.title === 'Đăng Xuất') {
            navigate('/')
            dispatch(Logout());
            handleClose();
        }

    }

    return (
        <div>
            <>
                <Drawer
                    variant={isSmallScreen ? 'temporary' : 'permanent'}
                    onClose={handleClose}
                    open={true}
                    anchor='left'
                    sx={{ zIndex: 1 }}>

                    <div className='w-[70vw] lg:w-[20vw] h-screen flex flex-col justify-center text-xl space-y-[1.65rem]'>
                        {menu.map((item, index) => (
                            <Fragment key={index}>
                                <div key={index} onClick={() => handleNavigate(item)} className='flex items-center px-5 gap-5 cursor-pointer'>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </div>
                                {index !== menu.length - 1 && <Divider />}
                            </Fragment>
                        ))}
                    </div>

                </Drawer>
            </>
        </div>
    )
}
