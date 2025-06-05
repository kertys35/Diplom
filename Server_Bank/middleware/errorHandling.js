const apiError = require('../error/apiError.js')

module.exports = function(err, req, res, next){ //(Ошибка, запрос, ответ, передача управления следующему компоненту)
    if (err instanceof apiError) {
        return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message:'Непредвиденная ошибка'})
}

