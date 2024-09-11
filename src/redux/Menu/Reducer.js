import * as actionTypes from './ActionType';

const initialState = {
    menuItems: [],
    error: null,
    loading: false,
    search: [],
    message: null
}

const MenuItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_MENU_ITEM_REQUEST:
        case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST:
        case actionTypes.DELETE_MENU_ITEM_REQUEST:
        case actionTypes.SEARCH_MENU_ITEMS_REQUEST:
        case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST:

            return {
                ...state,
                loading: true,
                error: null,
                message: null
            }
        case actionTypes.CREATE_MENU_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                menuItems: [...state.menuItems, action.payload],
                message: 'Tạo đồ ăn thành công'
            }
        case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                menuItems: action.payload,
                message: null
            }
        case actionTypes.DELETE_MENU_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                menuItems: state.menuItems.filter(item => item.id !== action.payload),
                message: 'Xóa đồ ăn thành công'
            }
        case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                menuItems: state.menuItems.map(item => item.id === action.payload.id ? action.payload : item),
                message: 'Cập nhật đồ ăn thành công'
            }
        case actionTypes.SEARCH_MENU_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                search: action.payload,
                message: null
            }
        case actionTypes.CREATE_MENU_ITEM_FAILURE:
        case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE:
        case actionTypes.DELETE_MENU_ITEM_FAILURE:
        case actionTypes.SEARCH_MENU_ITEMS_FAILURE:
        case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                message: null
            }
        default:
            return state;

    }
}

export default MenuItemReducer;