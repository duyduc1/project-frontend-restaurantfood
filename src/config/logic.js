
// check nhà hàng có trong danh sách yêu thích hay không
export const isPresentInFavorites = (favorites, restaurantId) => {
    return favorites.some((favorite) => favorite.id === restaurantId);
}