const axios = require("axios")


const $gateway = axios.create({        //Платежный шлюз
    baseURL:process.env.GATEWAY_URL
})

module.exports = {
    $gateway,
}