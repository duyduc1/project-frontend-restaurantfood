import { api } from '../../config/api';
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEARE_CART_FAILURE, CLEARE_CART_REQUEST, CLEARE_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEMS_FAILURE, GET_ALL_CART_ITEMS_REQUEST, GET_ALL_CART_ITEMS_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from './ActionType';

export const findCart = (token) => async (dispatch) => {
    dispatch({ type: FIND_CART_REQUEST });
    try {
        const response = await api.get('/api/cart', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        dispatch({ type: FIND_CART_SUCCESS, payload: response.data });

    } catch (error) {
        dispatch({ type: FIND_CART_FAILURE, payload: error.response.data });
    }
}

export const getAllCartItems = (reqData) => async (dispatch) => {
    dispatch({ type: GET_ALL_CART_ITEMS_REQUEST });
    try {
        const response = await api.post(`/api/carts/${reqData.cardId}/items`, {
            headers: {
                Authorization: `Bearer ${reqData.token}`
            }
        });
        dispatch({ type: GET_ALL_CART_ITEMS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_ALL_CART_ITEMS_FAILURE, payload: error.response.data });
    }
}

export const addItemToCart = (reqData) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
    try {
        const response = await api.put(`/api/cart/add`, reqData.cartItem, {
            headers: {
                Authorization: `Bearer ${reqData.token}`
            }
        });


        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.response.data });
    }
}

export const updateCartItem = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST });
    try {
        const response = await api.put(`/api/cart-item/update`, reqData.data, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });
        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.response.data });
    }
}

export const removeCartItem = (reqData) => async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST });
    try {
        const response = await api.delete(`/api/cart-item/${reqData.cardItemId}/remove`, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });
        console.log('remove carditem', response);

        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: reqData.cardItemId });
    } catch (error) {
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.response.data });
    }
}

export const clearCartAction = () => async (dispatch) => {
    dispatch({ type: CLEARE_CART_REQUEST });
    try {
        const response = await api.put(`/api/cart/clear`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        });
        dispatch({ type: CLEARE_CART_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: CLEARE_CART_FAILURE, payload: error.response.data });
    }
}