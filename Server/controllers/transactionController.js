const { transaction } = require('../db.js')
const apiError = require('../error/apiError.js')
const {Transaction} = require('../models/models.js')
const { gatewayPayment } = require('../API/gatewayPaymentAPI.js')

class transactionController{
    async create(req, res, next){           //Процесс создания транзакции (оплаты)
        try{
        const result = await gatewayPayment(req.body);
        return res.json(result);
        }catch(e){
            return next(apiError.badRequest(e))
        }
    }
}

module.exports = new transactionController()