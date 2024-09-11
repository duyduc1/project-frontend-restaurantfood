import { api } from '../../config/api'
import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEMS_FAILURE, SEARCH_MENU_ITEMS_REQUEST, SEARCH_MENU_ITEMS_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS } from './ActionType';

export const createMenuItem = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_MENU_ITEM_REQUEST });
    try {
        const { data } = await api.post('api/admin/food', reqData.menu, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });
        console.log('create menu item', data);

        dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_MENU_ITEM_FAILURE, payload: error.message });
        console.log('error', error.message);

    }
}

export const getMenuItemsByRestaurantId = (reqData) => async (dispatch) => {
    dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });
    try {
        const { data } = await api.get(
            `api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}&nonveg=${reqData.nonveg}&seasonal=${reqData.seasonal}&food_category=${reqData.food_category}`,
            {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            });
        console.log('get menu items', data);

        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: error.message });
        console.log('error', error.message);

    }
}

export const searchMenuItem = (reqData) => async (dispatch) => {
    dispatch({ type: SEARCH_MENU_ITEMS_REQUEST });
    try {
        const { data } = await api.get(
            `api/food/search?name=${reqData.keyword}`,
            {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            });
        console.log('search menu items', data);

        dispatch({ type: SEARCH_MENU_ITEMS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: SEARCH_MENU_ITEMS_FAILURE, payload: error.message });
        console.log('error', error.message);

    }
}

export const getAllIngredientsOfMenuItem = (reqData) => async (dispatch) => {
    dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });
    try {
        const { data } = await api.get(
            `api/food/restaurant/${reqData.restaurantId}`,
            {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            });
        console.log('get menu items', data);

        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: error.message });
        console.log('error', error.message);

    }
}

export const updateMenuItemsAvailability = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST });
    try {
        const { data } = await api.put(
            `api/admin/food/${reqData.foodId}`,
            reqData.menu,
            {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            });
        console.log('update menu items availability', data);

        dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, payload: error.message });
        console.log('error', error.message);

    }
}

export const deleteFoodAction = (reqData) => async (dispatch) => {
    dispatch({ type: DELETE_MENU_ITEM_REQUEST });
    try {
        const { data } = await api.delete(
            `api/admin/food/${reqData.id}`,
            {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            });
        console.log('delete menu item', data);

        dispatch({ type: DELETE_MENU_ITEM_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DELETE_MENU_ITEM_FAILURE, payload: error.message });
        console.log('error', error.message);

    }
}