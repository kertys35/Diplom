require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models.js')
const cors = require('cors')
const router = require('./routes/index.js')
const errorHandler = require('./middleware/errorHandling.js')
const fileUpload = require('express-fileupload')
const path = require('path')


const app = express()   //Инициирование приложения
app.use(cors())         
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api',router)


app.use(errorHandler)   //Обработчик ошибок

const start = async () => {     //Основная функция сервера
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(process.env.PORT, () => console.log(`server started on port ${process.env.PORT}`))   //Подключение к БД
    }catch(e){
        console.log(e)
    }
}

start() //Запуск сервера