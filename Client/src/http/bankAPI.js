import {$authHost} from "./index.js"

export const getAllBanks = async() => {
    const {data} = await $authHost.get('api/bank');
    return data;
}