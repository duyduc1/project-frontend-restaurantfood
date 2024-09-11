import { api } from '../../config/api';
import { CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_EVENTS_FAILURE, CREATE_EVENTS_REQUEST, CREATE_EVENTS_SUCCESS, CREATE_RESTAURANTS_FAILURE, CREATE_RESTAURANTS_REQUEST, CREATE_RESTAURANTS_SUCCESS, DELETE_EVENTS_FAILURE, DELETE_EVENTS_REQUEST, DELETE_EVENTS_SUCCESS, DELETE_RESTAURANTS_FAILURE, DELETE_RESTAURANTS_REQUEST, DELETE_RESTAURANTS_SUCCESS, GET_ALL_EVENTS_FAILURE, GET_ALL_EVENTS_REQUEST, GET_ALL_EVENTS_SUCCESS, GET_ALL_RESTAURANTS_FAILURE, GET_ALL_RESTAURANTS_REQUEST, GET_ALL_RESTAURANTS_SUCCESS, GET_RESTAURANTS_BY_ID_FAILURE, GET_RESTAURANTS_BY_ID_REQUEST, GET_RESTAURANTS_BY_ID_SUCCESS, GET_RESTAURANTS_BY_USER_ID_FAILURE, GET_RESTAURANTS_BY_USER_ID_REQUEST, GET_RESTAURANTS_BY_USER_ID_SUCCESS, GET_RESTAURANTS_CATEGORY_FAILURE, GET_RESTAURANTS_CATEGORY_REQUEST, GET_RESTAURANTS_CATEGORY_SUCCESS, GET_RESTAURANTS_EVENTS_FAILURE, GET_RESTAURANTS_EVENTS_REQUEST, GET_RESTAURANTS_EVENTS_SUCCESS, UPDATE_RESTAURANTS_FAILURE, UPDATE_RESTAURANTS_REQUEST, UPDATE_RESTAURANTS_STATUS_FAILURE, UPDATE_RESTAURANTS_STATUS_REQUEST, UPDATE_RESTAURANTS_STATUS_SUCCESS, UPDATE_RESTAURANTS_SUCCESS } from './ActionType';

export const getAllRestaurants = (token) => async (dispatch) => {
    dispatch({ type: GET_ALL_RESTAURANTS_REQUEST });

    try {

        const { data } = await api.get('/api/restaurants', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch({ type: GET_ALL_RESTAURANTS_SUCCESS, payload: data });
        // console.log("all restaurants ", data);

    } catch (error) {
        console.log("error", error);
        dispatch({ type: GET_ALL_RESTAURANTS_FAILURE, payload: error });

    }
}

export const getRestaurantsById = ({ jwt, restaurantId }) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_BY_ID_REQUEST });

    try {

        const { data } = await api.get(`/api/restaurants/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: GET_RESTAURANTS_BY_ID_SUCCESS, payload: data });

    } catch (error) {
        console.log("error", error);
        dispatch({ type: GET_RESTAURANTS_BY_ID_FAILURE, payload: error });

    }
}

export const getRestaurantsByUserId = (jwt) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_BY_USER_ID_REQUEST });

    try {

        const { data } = await api.get(`/api/admin/restaurants/user`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: GET_RESTAURANTS_BY_USER_ID_SUCCESS, payload: data });
        console.log("get by id restaurants ", data);

    } catch (error) {
        console.log("error", error);
        dispatch({ type: GET_RESTAURANTS_BY_USER_ID_FAILURE, payload: error });

    }
}

export const createRestaurant = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_RESTAURANTS_REQUEST });

    try {

        const { data } = await api.post(`/api/admin/restaurants`, reqData.data, {
            headers: {
                Authorization: `Bearer ${reqData.token}`
            }
        });

        dispatch({ type: CREATE_RESTAURANTS_SUCCESS, payload: data });
        console.log("get by id restaurants ", data);

    } catch (error) {
        console.log("error", error);
        dispatch({ type: CREATE_RESTAURANTS_FAILURE, payload: error });

    }
}

export const updateRestaurant = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANTS_REQUEST });

    try {

        const { data } = await api.put(`/api/admin/restaurants/${reqData.restaurantId}`, reqData.restaurantData, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });

        dispatch({ type: UPDATE_RESTAURANTS_SUCCESS, payload: data });
        console.log("get by id restaurants ", data);

    } catch (error) {
        console.log("error", error);
        dispatch({ type: UPDATE_RESTAURANTS_FAILURE, payload: error });

    }
}

export const deleteRestaurant = (reqData) => async (dispatch) => {
    dispatch({ type: DELETE_RESTAURANTS_REQUEST });

    try {

        const { data } = await api.delete(`/api/admin/restaurants/${reqData.restaurantId}`, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });

        dispatch({ type: DELETE_RESTAURANTS_SUCCESS, payload: reqData.restaurantId });
        console.log("get by id restaurants ", data);

    } catch (error) {
        console.log("error", error);
        dispatch({ type: DELETE_RESTAURANTS_FAILURE, payload: error });

    }
}

export const updateRestaurantStatus = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANTS_STATUS_REQUEST });

    try {

        const { data } = await api.put(`/api/admin/restaurants/${reqData.restaurantId}/status`, {}, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });

        dispatch({ type: UPDATE_RESTAURANTS_STATUS_SUCCESS, payload: data });
        console.log("get by id restaurants ", data);

    } catch (error) {
        console.log("error", error);
        dispatch({ type: UPDATE_RESTAURANTS_STATUS_FAILURE, payload: error });

    }
}


// Events
export const createEventAction = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_EVENTS_REQUEST });

    try {

        const { data } = await api.post(`/api/admin/events/restaurant/${reqData.restaurantId}`, reqData.data, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });

        dispatch({ type: CREATE_EVENTS_SUCCESS, payload: data });
        console.log("get by id restaurants ", data);

    } catch (error) {
        console.log("error", error);
        dispatch({ type: CREATE_EVENTS_FAILURE, payload: error });

    }
}

export const getAllEvents = (jwt) => async (dispatch) => {
    dispatch({ type: GET_ALL_EVENTS_REQUEST });

    try {

        const { data } = await api.get(`/api/events`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: data });
        console.log("all restaurants ", data);

    } catch (error) {
        console.log("error", error);
        dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error });

    }
}

export const deleteEvent = (reqData) => async (dispatch) => {
    dispatch({ type: DELETE_EVENTS_REQUEST });

    try {

        const { data } = await api.delete(`/api/admin/events/${reqData.eventId}`, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });

        dispatch({ type: DELETE_EVENTS_SUCCESS, payload: reqData.eventId });
        console.log("get by id restaurants ", data);

    } catch (error) {
        console.log("error", error);
        dispatch({ type: DELETE_EVENTS_FAILURE, payload: error });

    }
}

export const getRestaurantEvents = (reqData) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_EVENTS_REQUEST });

    try {

        const { data } = await api.get(`/api/admin/events/restaurant/${reqData.restaurantId}`, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });
        dispatch({ type: GET_RESTAURANTS_EVENTS_SUCCESS, payload: data });
        console.log("all restaurants ", data);

    } catch (error) {
        console.log("error", error);
        dispatch({ type: GET_RESTAURANTS_EVENTS_FAILURE, payload: error });

    }
}

export const createCategory = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_CATEGORY_REQUEST });

    try {

        const { data } = await api.post(`/api/admin/category`, reqData.reqData, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });

        dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: data });
        console.log("get by id restaurants ", data);

    } catch (error) {
        console.log("error", error);
        dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error });

    }
}

export const getRestaurantCategory = (reqData) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_CATEGORY_REQUEST });

    try {

        const { data } = await api.get(`/api/category/restaurant/${reqData.restaurantId}`, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });


        dispatch({ type: GET_RESTAURANTS_CATEGORY_SUCCESS, payload: data });

    } catch (error) {
        console.log("error", error);
        dispatch({ type: GET_RESTAURANTS_CATEGORY_FAILURE, payload: error });

    }
}