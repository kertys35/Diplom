const apiError = require('../error/apiError.js')
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/models.js')
const jwt = require('jsonwebtoken')
const SECRET_KEY = "osiauchnfsaasdjkl"

const generateToken = (userId, username, role) =>{
    return jwt.sign({
        userId,
        username, 
        role}, 
        SECRET_KEY, 
        {expiresIn: '24h'})
}

class userController{
    async registration(req, res, next){
        const {username, password, role} = req.body
        if(!username || !password){
            return next(apiError.badRequest('Некорректный логин или пароль!'))
        }
        const candidate = await User.findOne({where: {username}})
        if(candidate){
            return next(apiError.badRequest('Пользователь с таким логином уже существует!'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({username, password: hashPassword, role})
        const basket = Basket.create({userId: user.userId})
        const token = generateToken(user.userId, user.username, user.role)
        return res.json({token})
    }
    async login(req, res, next){
        const {username, password} = req.body
        const user = await User.findOne({where:{username}})
        if(!user){
            return next(apiError.badRequest('Пользователь с таким именем не существует!'))
        }
        let comparePass = bcrypt.compareSync(password, user.password)
        if(!comparePass){
            return next(apiError.internalErr('Введен неправильный пароль!'))
        }
        const token = generateToken(user.userId, user.username, user.role)
        return res.json({token})
    }
    async auth(req, res, next){
        const token = generateToken(req.user.userId, req.user.username, req.user.role)
        return res.json({token})
    }
    async delete(req, res, next){

        try{
            const token = req.headers.authorization.split(' ')[1]    //Тип токена + токен
            if(!token){
                return res.status(401).json({message:"Пользователь не авторизован!"})
            }
            const decode = jwt.verify(token, SECRET_KEY)
            const userDes = await User.destroy({where: {userId: decode.userId}})
            return res.status(200).json("Пользователь успешно удален!")
        }catch(e){
            return res.status(401).json(e)
        }
    }
}

module.exports = new userController()