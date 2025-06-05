const sequelize = require('../db')
const {DataTypes} = require('sequelize')

//Модели таблицы БД

const Transaction = sequelize.define('Transaction', {
    transactionId:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date:{type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW, allowNull: false},
    basketId:{type:DataTypes.INTEGER, primaryKey: true, allowNull: false},
    moneySum:{type: DataTypes.DECIMAL(10,2), allowNull: false},
},
{
  freezeTableName: true,  //Не изменять имя таблицы
  timestamps: false,      //Не включать дату создания и обновления
})
const TransactionList = sequelize.define('TransactionList', {
  listId:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  creditCardId:{type:DataTypes.INTEGER, primaryKey: true},
},
{
  freezeTableName: true,  //Не изменять имя таблицы
  timestamps: false,      //Не включать дату создания и обновления
})


//Связи между таблицами
Transaction.hasMany(TransactionList, {foreignKey: 'transactionId'})
TransactionList.belongsTo(Transaction, {foreignKey: 'transactionId'})

module.exports = {
    Transaction,
    TransactionList,
}