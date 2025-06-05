const axios = require("axios")

const $host = axios.create({        //Пользователь
    baseURL:process.env.BANK_URL
})

module.exports = {
    $host
}