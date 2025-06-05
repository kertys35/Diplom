class apiError extends Error{

    constructor(status, message) {    //Конструктор
        super()                       //Вызов родительского конструктора
        this.message = message
        this.status = status
    }

    static badRequest(message){     //Не найден запрос
        return new apiError(404, message)
    }

    static internalErr(message){     //Внутренняя ошибка
        return new apiError(500, message)
    }

    static forbiddenReq(message){     //Запрещенный запрос
        return new apiError(403, message)
    }
}

module.exports = apiError