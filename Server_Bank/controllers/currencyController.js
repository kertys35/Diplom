const { Sequelize } = require('../db.js')
const apiError = require('../error/apiError.js')
const {Currency} = require('../models/models.js')
class currencyController{

    async create(req, res){                                                           //Создать валюту
        const {name, exchange_rate} = req.body
        const currency = await Currency.create({name, exchange_rate})
        return res.json(currency)
    }
    async getAll(req, res, next){                                                         //Получить все валюты
        try{
            const currencies = (await Currency.findAll({order: Sequelize.col('currencyId')}))
            return res.json(currencies)
        }catch(e){
            next(apiError.badRequest(e.message))
        }
    }
    async getOne(req, res){                                                         //Получить одну валюту
        const {currencyId} = req.params
        const currency = await Currency.findOne({where: {currencyId}})
        return res.json(currency)
    }
    async update(req, res, next){                                                         //Обновить значение валюты
        try {
            const {currencyId} = req.params
            const {name, exchange_rate} = req.body
            const currency = await Currency.findOne({where: {currencyId}})
            if(currency){
                if(name && exchange_rate){
                    await Currency.update({name, exchange_rate}, {where: {currencyId}})
                    const result = await Currency.findOne({where: {currencyId}})
                    return res.json(result)
                }
                if(name && !exchange_rate){
                    await Currency.update({name}, {where: {currencyId}})
                    const result = await Currency.findOne({where: {currencyId}})
                    return res.json(result)
                }
                if(!name && exchange_rate){
                    await Currency.update({exchange_rate}, {where: {currencyId}})
                    const result = await Currency.findOne({where: {currencyId}})
                    return res.json(result)
                }
                if(!name && !exchange_rate){
                    return next(apiError.internalErr("Отсутствуют параметры для обновления!"))
                }
            }
            else{
                return next(apiError.badRequest("Валюты с таким id не существует!"))
            }
    }catch(e){
        next(apiError.badRequest(e.message))
    }
}
    async delete(req, res, next){
        const {currencyId} = req.params
        const currency = await Currency.findOne({where: {currencyId}})
        if(currency){ 
            const currencyDel = await Currency.destroy({where: {currencyId}})
            return res.status(200).json("Валюта успешно удалена!")
        }
        else{
            return next(apiError.badRequest("Валюты с таким id не существует!"))
        }
    }
}

module.exports = new currencyController()