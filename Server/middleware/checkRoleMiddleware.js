const jwt = require('jsonwebtoken')

module.exports = function(role){
    return function(req, res, next){
        if (req.method == "OPTIONS"){
            return next()
        }
        try{
            const token = req.headers.authorization.split(' ')[1]    //Тип токена + токен
            if(!token){
                return res.status(401).json({message:"Пользователь не авторизован!"})
            }
            const decode = jwt.verify(token, process.env.SECRET_KEY)
            if(decode.role !== role){
                return res.status(403).json({message:"Отказано в доступе!"})
            }
            req.user = decode
            return next()
        }catch(e){
            return res.status(401).json({message:"Пользователь не авторизован!"})
        }
    }
}