import { isPresentInFavorites } from "../../config/logic";
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

const initialState = {
    user: null,
    isloading: false,
    error: null,
    jwt: null,
    favorites: [],
    success: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case ADD_TO_FAVORITE_REQUEST:
            return {
                ...state,
                isloading: true,
                error: null,
                success: null
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isloading: false,
                jwt: action.payload,
                user: null,
                success: "Register Success"
            }

        case GET_USER_SUCCESS:
            return {
                ...state,
                isloading: false,
                user: action.payload,
                favorites: action.payload.favorites,
            }

        case ADD_TO_FAVORITE_SUCCESS:
            return {
                ...state,
                isloading: false,
                favorites: isPresentInFavorites(state.favorites, action.payload.id)
                    ? state.favorites.filter((favorite) => favorite.id !== action.payload.id)
                    : [...state.favorites, action.payload],
                success: "Added to favorite"
            }

        case LOGOUT:
            return initialState;
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
        case ADD_TO_FAVORITE_FAILURE:
            return {
                ...state,
                isloading: false,
                error: action.payload,
                success: null
            }

        default:
            return state;
    }
}