import {$host, $authHost} from "./index.js"
import { jwtDecode } from 'jwt-decode'

export const transactionPayment = async(payment) => {
   try{
    const {data} = await $authHost.post('api/transaction', payment);
    return data;
   } catch(e){
    console.log(e.response.data.message);
    return e.response.data.message
   }
}

