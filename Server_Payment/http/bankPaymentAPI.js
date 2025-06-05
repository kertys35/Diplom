const {$host} = require("./paymentHost.js")

async function transactionPayment(payment){
   try{
    const {data} = await $host.post('api/transaction', payment);
    return data;
   } catch(e){
    return e.response.data
   }
}

module.exports = {transactionPayment}