const {Pool} = require('pg')
const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    DB_NAME = "Internet-bank",    //Название таблицы
    DB_USER = "postgres",         //Пользователь
    DB_PASSWORD = "123",              //Пароль
    {
        dialect: "postgres",    //PostgreSQL БД
        host: "localhost",        //Хост
        port: 5432,             //Порт
    }
)

