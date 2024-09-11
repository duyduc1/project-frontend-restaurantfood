
import { api } from '../../config/api';
import { GET_RESTAURANTS_ORDER_FAILURE, GET_RESTAURANTS_ORDER_REQUEST, GET_RESTAURANTS_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from './ActionType';

export const updateOrderStatus = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });
    try {
        const { data } = await api.put(`/api/admin/order/${reqData.orderId}/${reqData.orderStatus}`, {}, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });

        dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, payload: error.message });
    }
}

export const fetchRestaurantOrders = (reqData) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_ORDER_REQUEST });
    try {
        const { data } = await api.get(`/api/admin/order/restaurant/${reqData.restaurantId}`, {
            params: { order_status: reqData.orderStatus },
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });

        dispatch({ type: GET_RESTAURANTS_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_RESTAURANTS_ORDER_FAILURE, payload: error.message });
    }
}