const apiError = require('../error/apiError.js')
const {Basket, Basket_Item, Item, User} = require('../models/models.js')

class basketController{
    async create(req, res, next){
        try{
        const {basketId} = req.params
        const {itemId} = req.body
        const basket = await Basket_Item.create({basketId, itemId})
        return res.json(basket)
        }catch(e){
            return next(apiError.badRequest(e.message))
        }
    }
    async getAll(req, res, next){
        try{
        const {basketId} = req.params
        const basket = await Basket_Item.findAll({where: {basketId}})
        return res.json(basket)
        }catch(e){
            return next(apiError.badRequest(e.message))
        }
    }
        async getId(req, res, next){
        try{
        const {userId} = req.body
        const basket = await Basket_Item.findIne({where: {userId}})
        return res.json(basket)
        }catch(e){
            return next(apiError.badRequest(e.message))
        }
    }
    async delete(req, res, next){
        const {basketId} = req.params
        const basket = await Basket_Item.findOne({where: {basketId}})
        if(basket){ 
            const basketDes = await Basket_Item.destroy({where: {basketId}})
            return res.status(200).json("Корзина успешно очищена!")
        }
        else{
            return next(apiError.badRequest("Коризны с таким id не существует!"))
        }
    }
}

module.exports = new basketController()