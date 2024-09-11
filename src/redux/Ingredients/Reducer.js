import { CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT_CATEGORIES_SUCCESS, GET_INGREDIENTS, UPDATE_STOCK } from "./ActionType"

const initialState = {
    ingredients: [],
    update: null,
    categories: []
}

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.payload
            }
        case GET_INGREDIENT_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload
            }
        case CREATE_INGREDIENT_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case CREATE_INGREDIENT_SUCCESS:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        case UPDATE_STOCK:
            return {
                ...state,
                update: action.payload,
                ingredients: state.ingredients.map((ingredient) => {
                    if (ingredient.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return ingredient;
                    }
                })
            }
        default:
            return state;
    }
}

export default ingredientsReducer