const { transaction } = require('../db.js')
const apiError = require('../error/apiError.js')
const {Transaction, TransactionList, CreditCard, Currency} = require('../models/models.js')

class transactionController{
    async create(req, res, next){           //Процесс создания транзакции (оплаты)
        try{
        let { basketId, moneySum, cvcCode, expirationDate, cardNum, bankId, receiverId} = req.body
        let card, receiverCard
        let balance, receiverBalance
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let data = `${day}-${month}-${year}`;
        //Поиск карты, ипользуемой при оплате
        if(!bankId){
            return next(apiError.badRequest("Не указан банк выдавщий карту!"))
        } else if(!cvcCode || !expirationDate || !cardNum){
            return next(apiError.badRequest("Не указаны полные данные карты!"))
        }else{
            card = await CreditCard.findOne({where:{bankId, cvcCode, cardNum, expirationDate}})
        }
        if(!card){
            return next(apiError.badRequest("Такой карты не существует!"))
        }
        const currency = await Currency.findOne({where: {currencyId: card.currencyId}}) //Валюта, которой оплачивают покупку
        receiverCard = await CreditCard.findOne({where:{creditCardId: receiverId}})     //Карта, на которую приходят средства
        const receiverCurrency =  await Currency.findOne({where: {currencyId: receiverCard.currencyId}})    //Валюта карты, на которую приходят средства
        if(currency.name != "Рубль"){       //Конвертация валюты в рубли
             balance = Number(card.balance) * Number(currency.exchange_rate)
        }else{
             balance = Number(card.balance)
        }
        if(balance < Number(moneySum)){     //Не хватает на оплату товара
            return next(apiError.badRequest("На карте не хватает средств дляя оплаты!"))
        } else{                                 //Процесс оплаты
                balance -= Number(moneySum)
                if(currency.name != "Рубль"){
                    balance = Number(balance) / Number(currency.exchange_rate)
                }
                if(receiverCurrency.name != "Рубль"){
                    receiverBalance = Number(receiverCard.balance) * Number(receiverCurrency.exchange_rate)
                } else {
                    receiverBalance = Number(receiverCard.balance)
                }
                receiverBalance += Number(moneySum)

                if(receiverCurrency.name != "Рубль"){
                    receiverBalance = receiverBalance / Number(receiverCurrency.exchange_rate)
                }
                const updatedReceiver = await CreditCard.update({balance: receiverBalance}, {where:{creditCardId: receiverId}})         
        }
        //Обновление БД согласно транзакции
        const transaction = await Transaction.create({date, basketId, moneySum})
        const newcard = await CreditCard.update({balance: balance}, {where:{creditCardId: card.creditCardId}})
        const list = await TransactionList.create({transactionId: transaction.transactionId, creditCardId: card.creditCardId})
        return res.json({TransactionList:list, Transaction: transaction})
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