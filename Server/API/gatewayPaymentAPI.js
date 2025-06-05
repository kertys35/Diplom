const {$gateway} = require("./gatewayAPI.js")

 async function gatewayPayment(payment){
   try{ 
    const {data} = await $gateway.post('api/payment', payment);
    return data;
   } catch(e){
    console.log(e.response);
    return e.response
   }
}
module.exports = {gatewayPayment};