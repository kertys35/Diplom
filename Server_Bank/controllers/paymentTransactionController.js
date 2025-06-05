const { transaction } = require('../db.js')
const apiError = require('../error/apiError.js')
const {CreditCard, Currency} = require('../models/models.js')
const CryptoJS = require('crypto-js');
    const decryptPayload = (ciphertext, secretKey) => {   //расшифровка данных
      const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData;
    };
class paymentTransactionController{
    async create(req, res, next){           //Процесс создания транзакции (оплаты)
        try{
            console.log("WORKING!!!!")
        let {basketId, moneySum, cvcCode, expirationDate, cardNum, bankId, receiverId} = req.body
        let card, receiverCard
        let balance, receiverBalance
        const date = new Date();
        //Расшифровывание данных
        const decryptedBank = decryptPayload(bankId, process.env.PRIVATE_KEY);
        const decryptedMoney = decryptPayload(moneySum, process.env.PRIVATE_KEY);
        const decryptedBasket = decryptPayload(basketId, process.env.PRIVATE_KEY);
        const decryptedCVC = decryptPayload(cvcCode, process.env.PRIVATE_KEY);
        const decryptedExpiration = decryptPayload(expirationDate, process.env.PRIVATE_KEY);
        const decryptedCard = decryptPayload(cardNum, process.env.PRIVATE_KEY);
        const decryptedReceiver = decryptPayload(receiverId, process.env.PRIVATE_KEY);

        bankId = decryptedBank;
        basketId = decryptedBasket;
        moneySum = decryptedMoney;
        cvcCode = decryptedCVC;
        expirationDate = decryptedExpiration;
        cardNum = decryptedCard;
        receiverId = decryptedReceiver;
        const dateCheck = new Date(expirationDate)
        if (dateCheck.toString() === "Invalid Date")
        {
            return next(apiError.badRequest("Не корректно введена дата!"))
        }
        //Поиск карты, ипользуемой при оплате
        if(!bankId){
            return next(apiError.badRequest("Не указан банк выдавщий карту!"))
        } else if(!cvcCode || !expirationDate || !cardNum){
            return next(apiError.badRequest("Не указаны полные данные карты!"))
        }else{
            card = await CreditCard.findOne({where:{bankId, cvcCode, cardNum, expirationDate}})
        }
        if(card === null){
            return next(apiError.badRequest("Такой карты не существует!"))
        }
        const currency = await Currency.findOne({where: {currencyId: card.currencyId}}) //Валюта, которой оплачивают покупку
        receiverCard = await CreditCard.findOne({where:{creditCardId: receiverId}})     //Карта, на которую приходят средства
        const receiverCurrency =  await Currency.findOne({where: {currencyId: receiverCard.currencyId}})    //Валюта карты, на которую приходят средства
        if(currency.name != "Рубль"){       //Конвертация валюты в рубли
             balance = Number(card.balance) * Number(currency.exchange_rate)
        }else{
             balance = Number(card.balance)
        }
        if(balance < Number(moneySum)){     //Не хватает на оплату товара
            return next(apiError.badRequest("На карте не хватает средств дляя оплаты!"))
        } else{                                 //Процесс оплаты
                balance -= Number(moneySum)
                if(currency.name != "Рубль"){
                    balance = Number(balance) / Number(currency.exchange_rate)
                }
                if(receiverCurrency.name != "Рубль"){
                    receiverBalance = Number(receiverCard.balance) * Number(receiverCurrency.exchange_rate)
                } else {
                    receiverBalance = Number(receiverCard.balance)
                }
                receiverBalance += Number(moneySum)

                if(receiverCurrency.name != "Рубль"){
                    receiverBalance = receiverBalance / Number(receiverCurrency.exchange_rate)
                }
                const updatedReceiver = await CreditCard.update({balance: receiverBalance}, {where:{creditCardId: receiverId}})         
        }
        //Обновление БД согласно транзакции
        const newcard = await CreditCard.update({balance: balance}, {where:{creditCardId: card.creditCardId}})
        return res.json({message:'Успешная транзакция!', date:date, basketId:basketId, moneySum:moneySum, creditCardId:card.creditCardId});
        }catch(e){
            return next(apiError.badRequest(e))
        }
    }
}

module.exports = new paymentTransactionController()