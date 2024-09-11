import { LOGOUT } from '../Authentication/ActionType';
import * as actionType from './ActionType';

const initialState = {
    restaurants: [],
    usersRestaurant: null,
    restaurant: null,
    loading: false,
    error: null,
    events: [],
    restaurantsEvents: [],
    categories: [],
}

const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CREATE_RESTAURANTS_REQUEST:
        case actionType.GET_ALL_RESTAURANTS_REQUEST:
        case actionType.DELETE_RESTAURANTS_REQUEST:
        case actionType.UPDATE_RESTAURANTS_REQUEST:
        case actionType.GET_RESTAURANTS_BY_ID_REQUEST:
        case actionType.CREATE_CATEGORY_REQUEST:
        case actionType.GET_RESTAURANTS_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case actionType.CREATE_RESTAURANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                usersRestaurant: action.payload,
            }
        case actionType.GET_ALL_RESTAURANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                restaurants: action.payload,
            }
        case actionType.GET_RESTAURANTS_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                restaurant: action.payload,
            }
        case actionType.GET_RESTAURANTS_BY_USER_ID_SUCCESS:
        case actionType.UPDATE_RESTAURANTS_STATUS_SUCCESS:
        case actionType.UPDATE_RESTAURANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                usersRestaurant: action.payload,
            }
        case actionType.DELETE_RESTAURANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload),
                userRestaurant: state.usersRestaurant.filter(restaurant => restaurant.id !== action.payload)
            }

        case actionType.CREATE_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                events: [...state.events, action.payload],
                restaurantsEvents: [...state.restaurantsEvents, action.payload]
            }
        case actionType.GET_ALL_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                events: action.payload,
            }
        case actionType.GET_RESTAURANTS_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                restaurantsEvents: action.payload,
            }
        case actionType.DELETE_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                events: state.events.filter(event => event.id !== action.payload),
                restaurantsEvents: state.restaurantsEvents.filter(event => event.id !== action.payload)
            }
        case actionType.CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                categories: [...state.categories, action.payload],
            }
        case actionType.GET_RESTAURANTS_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                categories: action.payload,
            }
        case actionType.CREATE_RESTAURANTS_FAILURE:
        case actionType.GET_ALL_RESTAURANTS_FAILURE:
        case actionType.DELETE_RESTAURANTS_FAILURE:
        case actionType.UPDATE_RESTAURANTS_FAILURE:
        case actionType.GET_RESTAURANTS_BY_ID_FAILURE:
        case actionType.CREATE_EVENTS_FAILURE:
        case actionType.CREATE_CATEGORY_FAILURE:
        case actionType.GET_RESTAURANTS_CATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        case LOGOUT:
            return {
                ...state,
                restaurants: [],
                usersRestaurant: null,
                restaurant: null,
                loading: false,
                error: null,
                events: [],
                restaurantsEvents: [],
                categories: [],
            };
        default:
            return state;
    }
}

export default restaurantReducer;