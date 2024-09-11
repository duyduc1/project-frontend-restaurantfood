import { api } from '../../config/api';
import { CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT_CATEGORIES_SUCCESS, GET_INGREDIENTS, UPDATE_STOCK } from './ActionType';

export const getIngredientsOfRestaurant = (reqData) => async (dispatch) => {
    try {
        const res = await api.get(`/api/admin/ingredients/restaurant/${reqData.id}`, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });
        dispatch({ type: GET_INGREDIENTS, payload: res.data });
    } catch (error) {
        console.log(error);
    }
}

export const createIngredient = (reqData) => async (dispatch) => {
    try {
        const res = await api.post('/api/admin/ingredients', reqData.data, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });
        dispatch({ type: CREATE_INGREDIENT_SUCCESS, payload: res.data });
    } catch (error) {
        console.log(error);
    }
}

export const createIngredientCategory = (reqData) => async (dispatch) => {
    try {
        const res = await api.post('/api/admin/ingredients/category', reqData.data, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });
        dispatch({ type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: res.data });
    } catch (error) {
        console.log(error);
    }
}

export const getIngredientCategory = (reqData) => async (dispatch) => {
    try {
        const res = await api.get(`/api/admin/ingredients/restaurant/${reqData.id}/category`, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });
        dispatch({ type: GET_INGREDIENT_CATEGORIES_SUCCESS, payload: res.data });
    } catch (error) {
        console.log(error);
    }
}

export const updateStockOfIngredient = (reqData) => async (dispatch) => {
    try {
        const { data } = await api.put(`/api/admin/ingredients/${reqData.id}/stoke`, {}, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });

        dispatch({ type: UPDATE_STOCK, payload: data });
    } catch (error) {
        console.log(error);
    }
}

