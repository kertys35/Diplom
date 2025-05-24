const sequelize = require('../db')
const {DataTypes} = require('sequelize')

//Модели таблицы БД
const User = sequelize.define('User', {
    userId:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username:{type: DataTypes.STRING(60), unique: true, allowNull: false},
    password:{type: DataTypes.STRING(40), allowNull: false},
    role:{type: DataTypes.STRING(40), defaultValue: "USER", allowNull: false},
},
{
  freezeTableName: true,  //Не изменять имя таблицы
  timestamps: false,      //Не включать дату создания и обновления
})

const Basket = sequelize.define('Basket', {
    basketId:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
},
{
  freezeTableName: true,  //Не изменять имя таблицы
  timestamps: false,      //Не включать дату создания и обновления
})

const Basket_Item = sequelize.define('Basket_Item', {
    basketInItemId:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    quantity:{type: DataTypes.INTEGER, allowNull: false},
},
{
  freezeTableName: true,  //Не изменять имя таблицы
  timestamps: false,      //Не включать дату создания и обновления
})
const Item = sequelize.define('Item', {
    itemId:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING(60), allowNull: false},
    price:{type: DataTypes.DECIMAL(10,2), allowNull: false},
    description:{type: DataTypes.TEXT, allowNull: false},
    img:{type: DataTypes.STRING(255), allowNull: false},
    quantity:{type: DataTypes.INTEGER, allowNull: false},
},
{
  freezeTableName: true,  //Не изменять имя таблицы
  timestamps: false,      //Не включать дату создания и обновления
})
const Transaction = sequelize.define('Transaction', {
    transactionId:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date:{type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW, allowNull: false},
    moneySum:{type: DataTypes.DECIMAL(10,2), allowNull: false},
},
{
  freezeTableName: true,  //Не изменять имя таблицы
  timestamps: false,      //Не включать дату создания и обновления
})
const TransactionList = sequelize.define('TransactionList', {
  listId:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
},
{
  freezeTableName: true,  //Не изменять имя таблицы
  timestamps: false,      //Не включать дату создания и обновления
})
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
User.hasOne(Basket, { foreignKey: 'userId' })
Basket.belongsTo(User, { foreignKey: 'userId' })

Basket.hasMany(Basket_Item, {foreignKey: 'basketId'})
Basket_Item.belongsTo(Basket, {foreignKey: 'basketId'})

Item.hasOne(Basket_Item, {foreignKey: 'itemId'})
Basket_Item.belongsTo(Item, {foreignKey: 'itemId'})

Basket.hasMany(Transaction, {foreignKey: 'basketId'})
Transaction.belongsTo(Basket, {foreignKey: 'basketId'})

Transaction.hasMany(TransactionList, {foreignKey: 'transactionId'})
TransactionList.belongsTo(Transaction, {foreignKey: 'transactionId'})

CreditCard.hasMany(TransactionList, {foreignKey: 'creditCardId'})
TransactionList.belongsTo(CreditCard,  {foreignKey: 'creditCardId'})
Bank.hasMany(CreditCard, {foreignKey: 'bankId'})
CreditCard.belongsTo(Bank, {foreignKey: 'bankId'})

Currency.hasMany(CreditCard, {foreignKey: 'currencyId'})
CreditCard.belongsTo(Currency, {foreignKey: 'currencyId'})

module.exports = {
    User,
    Basket,
    Basket_Item,
    Item,
    Transaction,
    TransactionList,
    CreditCard,
    Bank,
    Currency
}