import {$authHost} from "./indexAPI.js"

export const getBasket = async(basketId) => {
    const {data} = await $authHost.get('api/basket/' + basketId);
    return data;
}
export const getOneBasketItem = async(basketId, itemId) => {
    const {data} = await $authHost.get('api/basket/', {params:{basketId,itemId}});
    return data;
}
export const addItem = async(basketId, itemId) => {
    const {data} = await $authHost.post('api/basket/'+ basketId, {itemId});
    return data;
}

export const clearBasket = async(basketId) => {
    const {data} = await $authHost.delete('api/basket/'+ basketId);
    return data;
}
export const deleteItemInBasket = async(basketId, itemId) => {
    const {data} = await $authHost.delete('api/basket/'+ basketId, {params: {itemId}});
    return data;
}