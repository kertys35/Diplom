const {$gateway} = require("./gatewayAPI.js")

 async function gatewayBanks(){
   try{ 
    const {data} = await $gateway.get('api/bank');
    return data;
   } catch(e){
    console.log(e.response.data.message);
    return e.response
   }
}
module.exports = {gatewayBanks};