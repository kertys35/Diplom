import {$host, $authHost} from "./index.js"

export const createOneItem = async(item) => {
    const {data} = await $authHost.post('api/item', item);
    return data;
}

export const getItems = async(page, limit = 6) => {
    const {data} = await $host.get('api/item', {params: {page, limit}});
    return data;
}
export const getOneItem = async(id) => {
    const {data} = await $host.get('api/item/' + id);
    return data;
}
export const del = async(id) => {
    const {data} = await $authHost.delete('api/item/' + id);
    return data;
}