import { LOGOUT } from '../Authentication/ActionType';
import * as actionTypes from './ActionType';

const initialState = {
    cart: null,
    cartItems: [],
    loading: false,
    error: null
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FIND_CART_REQUEST:
        case actionTypes.GET_ALL_CART_ITEMS_REQUEST:
        case actionTypes.UPDATE_CART_ITEM_REQUEST:
        case actionTypes.REMOVE_CART_ITEM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actionTypes.FIND_CART_SUCCESS:
        case actionTypes.CLEARE_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload,
                cartItems: action.payload.items,
                loading: false
            }
        case actionTypes.ADD_ITEM_TO_CART_SUCCESS:
            return {
                ...state,
                cartItems: [action.payload, ...state.cartItems],
                loading: false
            }
        case actionTypes.UPDATE_CART_ITEM_SUCCESS:
            return {
                ...state,
                cartItems: state.cartItems.map(item => item.id === action.payload.id ? action.payload : item)
                    .filter(item => item.quantity > 0),
                loading: false
            }
        case actionTypes.REMOVE_CART_ITEM_SUCCESS:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
                loading: false
            }
        case actionTypes.FIND_CART_FAILURE:
        case actionTypes.UPDATE_CART_ITEM_FAILURE:
        case actionTypes.REMOVE_CART_ITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case LOGOUT:
            localStorage.removeItem('jwt');
            return {
                ...state,
                cart: null,
                cartItems: [],
                error: null
            }

        default:
            return state;
    }
}

export default cartReducer;