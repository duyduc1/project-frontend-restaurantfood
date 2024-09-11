import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import { OrderTable } from './OrderTable'

const ordersStatus = [
    {
        value: 'ALL',
        label: 'Tất cả'
    },
    {
        value: 'PANDING',
        label: 'Đang chờ'
    },
    {
        value: 'COMPLETE',
        label: 'Đã hoàn thành'
    }
]

export const Orders = () => {

    const [filterValue, setFilterValue] = useState('all')


    const handleFilter = (e) => {
        setFilterValue(e.target.value)
    }

    return (
        <div className='px-2'>
            <Card className='p-5'>
                <Typography variant='h5' sx={{ paddingBottom: '1rem' }}>
                    Trạng Thái Đơn Hàng
                </Typography>
                <FormControl>
                    <RadioGroup onChange={(e) => handleFilter(e)} row name='category' value={filterValue || 'all'}>
                        {
                            ordersStatus.map((status, index) => (
                                <FormControlLabel
                                    key={index}
                                    value={status.value}
                                    control={<Radio />}
                                    label={status.label}
                                    sx={{ color: 'gray' }}
                                />
                            ))
                        }
                    </RadioGroup>
                </FormControl>
            </Card>
            <OrderTable filterValue={filterValue} />
        </div>
    )
}
