const sequelize = require('../db')
const {DataTypes} = require('sequelize')

//Модели таблицы БД
const CreditCard = sequelize.define('CreditCard', {
    creditCardId:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    ownerName:{type: DataTypes.STRING(60), allowNull: false},
    balance:{type: DataTypes.DECIMAL(10,2), allowNull: false},
    cardNum:{type: DataTypes.INTEGER, allowNull: false},
    expirationDate:{type: DataTypes.DATEONLY, allowNull: false},
    cvcCode:{type: DataTypes.INTEGER, allowNull: false},
},
{
  freezeTableName: true,  //Не изменять имя таблицы
  timestamps: false,      //Не включать дату создания и обновления
})
const Bank = sequelize.define('Bank', {
    bankId:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING(60), allowNull: false},
},
{
  freezeTableName: true,  //Не изменять имя таблицы
  timestamps: false,      //Не включать дату создания и обновления
})
const Currency = sequelize.define('Currency', {
    currencyId:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING(40), allowNull: false},
    exchange_rate:{type: DataTypes.DECIMAL(10,2), allowNull: false},
},
{
  freezeTableName: true,  //Не изменять имя таблицы
  timestamps: false,      //Не включать дату создания и обновления
})

//Связи между таблицами

Bank.hasMany(CreditCard, {foreignKey: 'bankId'})
CreditCard.belongsTo(Bank, {foreignKey: 'bankId'})

Currency.hasMany(CreditCard, {foreignKey: 'currencyId'})
CreditCard.belongsTo(Currency, {foreignKey: 'currencyId'})

module.exports = {
    CreditCard,
    Bank,
    Currency
}