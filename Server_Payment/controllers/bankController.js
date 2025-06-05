const apiError = require('../error/apiError.js');
const { getAllBanks } = require('../http/banksAPI.js');

class bankController{

    async getAll(req, res, next){
        try{
            const banks = await getAllBanks();
            return res.json(banks)
        }catch(e){
            return next(apiError.badRequest(e.message))
        }
    }
}

module.exports = new bankController()