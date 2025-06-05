const { transaction } = require('../db.js')
const apiError = require('../error/apiError.js');
const { transactionPayment } = require('../http/bankPaymentAPI.js');
const {Transaction, TransactionList} = require('../models/models.js')

class transactionController{
    async create(req, res, next){           //Процесс создания транзакции (оплаты)
        try{
        const result = await transactionPayment(req.body); //Запрос к банку
        
        if(result.message === 'Успешная транзакция!')

        {   
            const date = result.date;
            const basketId = result.basketId;
            const moneySum = result.moneySum;
            const creditCardId = result.creditCardId;
            console.log(result.basketId);
            //Обновление БД согласно транзакции
            const transaction = await Transaction.create({date, basketId, moneySum})
            const list = await TransactionList.create({transactionId: transaction.transactionId, creditCardId: creditCardId})
            return res.json('Успешная транзакция!')
        } else {
            return res.json(result.message);
        }
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