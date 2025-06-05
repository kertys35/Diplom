const { transaction } = require('../db.js')
const apiError = require('../error/apiError.js')
const {Transaction} = require('../models/models.js')
const { gatewayPayment } = require('../API/gatewayPaymentAPI.js')

class transactionController{
    async create(req, res, next){           //Процесс создания транзакции (оплаты)
        try{
        const result = await gatewayPayment(req.body);
        console.log(result);
        return res.json(result);
        }catch(e){
            return next(apiError.badRequest(e))
        }
    }
    async getAll(req, res, next){       //Получить все транзакции
        try{
            const transactions = await Transaction.findAll()
            return res.json(transactions)
        }catch(e){
            return next(apiError.badRequest(e.message))
        }
    }
    async getOne(req, res){     //Получить одну транзакцию по id
        const {transactionId} = req.params
        const transaction = await Transaction.findOne({where: {transactionId}})
        return res.json(transaction)
    }
    async getAllOfUser(req, res){       //Получить все транзакции пользователя
        const {basketId} = req.params
        const transactions = await Transaction.findAll({where: {basketId}})
        return res.json(transactions)
    }
    async delete(req, res, next){       //Удалить транзакцию
        const {transactionId} = req.params
        const transaction = await Transaction.findOne({where: {transactionId}})
        if(transaction){ 
            const transactionDes = await Transaction.destroy({where: {transactionId}})
            return res.status(200).json("Транзакция успешно удалена!")
        }
        else{
            return next(apiError.badRequest("Транзакции с таким id не существует!"))
        }
    }
}

module.exports = new transactionController()