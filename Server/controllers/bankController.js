const { gatewayBanks } = require('../API/gatewayBanksAPI.js')
const apiError = require('../error/apiError.js')
const {Bank} = require('../models/models.js')

class bankController{
    async getAll(req, res, next){
        try{
            const banks = await gatewayBanks();
            return res.json(banks)
        }catch(e){
            return next(apiError.badRequest(e.message))
        }
    }
}

module.exports = new bankController()