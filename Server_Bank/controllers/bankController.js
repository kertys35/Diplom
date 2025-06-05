const apiError = require('../error/apiError.js')
const {Bank} = require('../models/models.js')

class bankController{
    async create(req, res, next){
        const {name} = req.body
        const bank = await Bank.create({name})
        return res.json(bank)
    }
    async getAll(req, res, next){
        try{
            const banks = await Bank.findAll()
            return res.json(banks)
        }catch(e){
            return next(apiError.badRequest(e.message))
        }
    }
    async getOne(req, res){
        const {bankId} = req.params
        const bank = await Bank.findOne({where: {bankId}})
        return res.json(bank)
    }
    async delete(req, res, next){
        const {bankId} = req.params
        const bank = await Bank.findOne({where: {bankId}})
        if(bank){ 
            const bankDes = await Bank.destroy({where: {bankId}})
            return res.status(200).json("Банк успешно удален!")
        }
        else{
            return next(apiError.badRequest("Банка с таким id не существует!"))
        }
    }
}

module.exports = new bankController()