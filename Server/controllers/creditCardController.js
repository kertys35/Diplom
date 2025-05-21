const apiError = require('../error/apiError.js')
const {CreditCard} = require('../models/models.js')

class creditCardController{
    async create(req, res, next){
        const {bankId, ownerName, balance, cardNum, expirationDate, cvcCode, currencyId} = req.body
        const creditCard = await CreditCard.create({bankId, ownerName, balance, cardNum, expirationDate, cvcCode, currencyId})
        return res.json(creditCard)
    }
    async getAll(req, res, next){
        try{
            let {bankId} = req.query
            if(!bankId){
                const cards = await CreditCard.findAll()
                return res.json(cards)
            } else if(bankId){
                const cards = await CreditCard.findAll({where:{bankId}})
                return res.json(cards)
            }
        }catch(e){
            return next(apiError.badRequest(e.message))
        }
    }
    async getOne(req, res, next){
        const {creditCardId} = req.params
        const card = await CreditCard.findOne({where:{creditCardId}})
        return res.json(card)
    }
    async findCard(req, res, next){
        let {bankId, cvcCode, expirationDate, cardNum} = req.body
        if(!bankId){
            return next(apiError.badRequest("Не указан банк выдавщий карту!"))
        } else if(!cvcCode || !expirationDate || !cardNum){
            return next(apiError.badRequest("Не указаны полные данные карты!"))
        }else{
            const card = await CreditCard.findOne({where:{bankId, cvcCode, cardNum, expirationDate}})
            return res.json(card)
        }
    }
    async changeBalance(req, res, next){
        let {bankId, cvcCode, expirationDate, cardNum, sum} = req.body
        if(!bankId){
            return next(apiError.badRequest("Не указан банк выдавщий карту!"))
        } else if(!cvcCode || !expirationDate || !cardNum){
            return next(apiError.badRequest("Не указаны полные данные карты!"))
        }else{
            const card = await CreditCard.findOne({where:{bankId, cvcCode, expirationDate, cardNum}})
            let {balance, creditCardId} = card
            balance = Number(balance) + Number(sum)
            await CreditCard.update({balance}, {where:{creditCardId}})
            const newCard = await CreditCard.findOne({where:{bankId, cvcCode, expirationDate, cardNum}})
            return res.json(newCard)
        }
    }
    async delete(req, res, next){
        const {creditCardId} = req.params
        const creditCard = await CreditCard.findOne({where: {creditCardId}})
        if(creditCard){ 
            const cardDes = await CreditCard.destroy({where: {creditCardId}})
            return res.status(200).json("Карта успешно удалена!")
        }
        else{
            return next(apiError.badRequest("Карты с таким id не существует!"))
        }
    }
}

module.exports = new creditCardController()