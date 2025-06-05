const {$host} = require("./paymentHost.js")

 async function getAllBanks(){
   try{ 
    const {data} = await $host.get('api/bank');
    return data;
   } catch(e){
    console.log(e.response.data.message);
    return e.response
   }
}
module.exports = {getAllBanks};