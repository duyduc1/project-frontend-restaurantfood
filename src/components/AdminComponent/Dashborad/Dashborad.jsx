import { Grid } from '@mui/material'
import React from 'react'
import { MenuTable } from '../Menu/MenuTable'
import { OrderTable } from '../Orders/OrderTable'

export const Dashborad = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <MenuTable />
                </Grid>
                <Grid item xs={12} md={6}>
                    <OrderTable />
                </Grid>
            </Grid>
        </div>
    )
}
