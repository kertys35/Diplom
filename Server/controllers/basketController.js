const apiError = require('../error/apiError.js')
const {Basket, Basket_Item} = require('../models/models.js')

class basketController{
    async create(req, res, next){   //Добавление товара в корзину
        try{
        const {basketId} = req.params;        
        const {itemId} = req.body;
        const basket = await Basket_Item.create({basketId, itemId});

        return res.json(basket)
        }catch(e){
            return next(apiError.badRequest(e.message))
        }
    }
    async getAll(req, res, next){   //Получение всех товаров пользователя в корзину
        try{
        const {basketId} = req.params
        const basket = await Basket_Item.findAll({where: {basketId}})
        return res.json(basket)
        }catch(e){
            return next(apiError.badRequest(e.message))
        }
    }   
    async delete(req, res, next){       //Удаление товаров из корзины
        const {basketId} = req.params
        const {itemId} = req.query
        const basket = await Basket_Item.findOne({where: {basketId}})
        console.log(itemId);
        if(basket){ 
            if (itemId){        //Удаление одного товара из корзины
            const basketDes = await Basket_Item.findOne({where: {basketId, itemId}})
            basketDes.destroy();
            return res.status(200).json("Предмет успешно убран!")     
            }
            else{   //Очищение корзины от всех товаров
            const basketDes = await Basket_Item.destroy({where: {basketId}})
            return res.status(200).json("Корзина успешно очищена!")
            }
        }
        else{
            return next(apiError.badRequest("Коризны с таким id не существует!"))
        }
    }
}

module.exports = new basketController()