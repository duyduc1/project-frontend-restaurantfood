import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Button, Card } from '@mui/material';

export const AddressCard = ({ item, showButton, handleSelectAddress }) => {

    return (
        <Card className='flex gap-5 w-64 p-5'>
            <HomeIcon />
            <div className='space-y-3 text-gray-500 '>
                <h1 className='font-semibold text-lg text-white'>Giao Đến</h1>
                <p>
                    Tổ 49 , Trường Chinh , An Khê, Thanh Khê, Đà Nẵng, Việt Nam
                </p>
                {showButton && (<Button variant='outline' onClick={() => handleSelectAddress(item)}>Lựa Chọn</Button>)}
            </div>
        </Card>
    )
}
