import {$host, $authHost} from "./indexAPI.js"

export const transactionPayment = async(payment) => {
   try{
    const {data} = await $authHost.post('api/transaction', payment);
    return data;
   } catch(e){
    console.log(e.response.data.message);
    return e.response.data.message
   }
}

