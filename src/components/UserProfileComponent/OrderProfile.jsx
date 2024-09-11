import React, { useEffect } from 'react'
import { OrderCard } from './OrderCard'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getUsersOrders } from '../../redux/Order/Action';

export const OrderProfile = () => {

    const auth = useSelector(state => state.auth);
    const cart = useSelector(state => state.cart);
    const order = useSelector(state => state.order);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');

    useEffect(() => {
        dispatch(getUsersOrders(jwt))
    }, [auth.jwt])

    return (
        <div className='flex items-center flex-col mb-20'>
            <h1 className='text-xl text-center py-7 font-semibold'>Đơn hàng của tôi</h1>
            <div className='space-y-5 w-full lg:w-1/2'>
                {
                    order.orders.map((order, index) => order.items.map((item) => (
                        <OrderCard key={order.id} item={item} order={order} />
                    )))
                }
            </div>

        </div>
    )
}
