const apiError = require('../error/apiError.js')
const {Basket, Basket_Item, Item} = require('../models/models.js')

class basketController{
    async create(req, res, next){   //Добавление товара в корзину
        try{
        const {basketId} = req.params;        
        const {itemId} = req.body;
        const item = await Item.findOne({where:{itemId}});
        if (Number(item.quantity) > 0){
            const prevBasket = await Basket_Item.findOne({where:{basketId, itemId}})
            let basket;
            if (prevBasket){
               const quantity = Number(prevBasket.quantity) + 1;
               const basketUpdt = await Basket_Item.update({quantity}, {where:{basketId, itemId}});     
               basket = await Basket_Item.findAll({where:{basketId, itemId}});
            }
            else{
                basket = await Basket_Item.create({basketId, itemId, quantity:1});
            }

            const quantity = Number(item.quantity) - 1;
            const updateItem = await Item.update({quantity}, {where:{itemId}}); 
            return res.json(basket)
        } else{
            return next(apiError.badRequest('Нет товаров на складе!'));
        }
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
        async getOne(req, res, next){   //Получение один товар из корзины
        try{
        const {basketId, itemId} = req.query
        const basket = await Basket_Item.findOne({where: {basketId, itemId}})
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
            const item = await Item.findOne({where:{itemId}});  //Увеличение кол-ва товаров
            const quantity = Number(item.quantity) + 1;
            const updateItem = await Item.update({quantity}, {where:{itemId}}); 

            const basketDes = await Basket_Item.findOne({where: {basketId, itemId}})    //Удаление предмета
            if (Number(basketDes.quantity) > 1)
            {
                const basketQuantity = Number(basketDes.quantity)-1;
                const basketUpdt = await Basket_Item.update({quantity:basketQuantity}, {where: {basketId, itemId}});
            }else{
                basketDes.destroy()
            }
            return res.status(200).json("Предмет успешно убран!");     
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