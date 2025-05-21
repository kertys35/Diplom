const jwt = require('jsonwebtoken')
const SECRET_KEY = "osiauchnfsaasdjkl"

module.exports = function(req, res, next){
    if (req.method == "OPTIONS"){
        return next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1]    //Тип токена + токена
        if(!token){
            return res.status(401).json({message:"Пользователь не авторизован!"})
        }
        const decoded = jwt.verify(token, SECRET_KEY)
        req.user = decoded
        return next()
    }catch(e){
        return res.status(401).json({message:"Пользователь не авторизован!"})
    }
}