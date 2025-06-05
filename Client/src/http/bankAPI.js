import {$authHost} from "./indexAPI.js"

export const getAllBanks = async() => {
    const {data} = await $authHost.get('api/bank');
    return data;
}