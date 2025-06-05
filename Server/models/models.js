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

//Связи между таблицами
User.hasOne(Basket, { foreignKey: 'userId' })
Basket.belongsTo(User, { foreignKey: 'userId' })

Basket.hasMany(Basket_Item, {foreignKey: 'basketId'})
Basket_Item.belongsTo(Basket, {foreignKey: 'basketId'})

Item.hasOne(Basket_Item, {foreignKey: 'itemId'})
Basket_Item.belongsTo(Item, {foreignKey: 'itemId'})
module.exports = {
    User,
    Basket,
    Basket_Item,
    Item
}