const apiError = require('../error/apiError.js')
const {Item} = require('../models/models.js')
const fs = require('fs')
const uuid = require('uuid')
const path = require('path')

class itemController{
    async create(req, res, next){       //Создать товар
        try{
            const {name, price, description} = req.body
            const {img} = req.files
            let filename = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', filename))

            const item = await Item.create({name, price, description, img: filename})
            return res.json(item)

        } catch(e){
            return next(apiError.badRequest(e.message))
        }

    }
    async getAll(req, res, next){       //Получить все товары
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        let items
        items = await Item.findAndCountAll({limit, offset})
        return res.json(items)
    }
    async getOne(req, res, next){       //Получить один товар 
        const {itemId} = req.params
        const item = await Item.findOne({where: {itemId}})
        return res.json(item)
    }

    async delete(req, res, next){       //Удалить один товар
        const {itemId} = req.params
        const item = await Item.findOne({where: {itemId}})
        if(item){ 
            const itemDes = await Item.destroy({where: {itemId}})
            fs.unlink(path.resolve(__dirname, '..', 'static', item.img), (err) => {
                if (err) {
                  console.error(err);
                  return;
                }
                console.log('File deleted successfully');
              })
            return res.status(200).json("Товар успешно удален!")
        }
        else{
            return next(apiError.badRequest("Товара с таким id не существует!"))
        }
    }
}

module.exports = new itemController()