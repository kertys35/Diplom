import React, { useContext, useEffect, useState } from "react";
import {Container, Row, Col, Card,Button} from "react-bootstrap";
import { Context } from "../index.js";
import { useNavigate } from "react-router-dom";
import { getAllBanks } from "../http/bankAPI";
import { observer } from "mobx-react-lite";
import { transactionPayment } from "../http/transactionAPI.js";
import { clearBasket } from "../http/basketAPI.js";

const PaymentPage = observer(({cart, setCart}) => {


    const {bank} = useContext(Context);
    const {basket} = useContext(Context);
    const [finalCost, setCost] = useState(0)

    useEffect(() => {//Подсчет стоимости товаров

    var cost = 0;
    cart.map((product) => {
      cost += Number(product.price);
    })
    setCost(cost);
    return
    })

    const getPayment = () => {
      try {
      let cardNumber = '';
      let j = 0;
      for(let i=0; i < 20; i++)
      {
        if (num[i] !=' ')
          {
            if(j == 16)
              break;
            cardNumber += num[i];
            j++;

          }
      }
      const receiverId = 5;
      const formData = new FormData();
      formData.append('bankId', `${bankValue}`);
      formData.append('moneySum', `${finalCost}`);

      formData.append('cardNum', `${cardNumber}`);
      const expirationDate ='20'+expy[3] + expy[4] + '-' +expy[0] + expy[1] + '-01';
      formData.append('expirationDate', expirationDate);
      formData.append('cvcCode', `${cvc}`);
      formData.append('receiverId', `${receiverId}`);
      formData.append('basketId', `${basket.basketId}`);

      console.log(bank);
      console.log(finalCost);
      console.log(num);
      console.log(expirationDate);
      console.log(cvc);
      console.log(5);
      console.log(basket.basketId);
      for (const value of formData.values()) {
      console.log(value);
        }
      transactionPayment(formData) 
      } catch(e){
        alert(e.message)
      }
    }
    useEffect(() => {
      getAllBanks().then(data => {
        bank.setBanks(data);
      })
    }, [])
    const [cvc, setCVC] = useState('');
    const [expy, setExpy] = useState('');
    const [num, setNum] = useState('');
    const [bankValue, setBank] = useState(1);
    const navigate = useNavigate();

    //Банк
    const handleBank = (e) =>{
      setBank(e.target.value)
    }
    //Номер карты
    const handleCardNum = (e)=>{
     let input = e.target.value;
    
    // Удаляем все символы, которые не являются числами
    input = input.replace(/\D/g, '');
    
    if (input.length > 16)
       return;
    
    let formatted = '';
    for (let i = 0; i < input.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += ' ';
      }
      formatted += input[i];
    }
    setNum(formatted);       
    }

    //Срок действия
    const handleDate= (e)=>{
    const input = e.target.value;

    //Разрешенные символы
    if (!/^[0-9/]*$/.test(input)) 
        return;
    if (input.length > 5) 
        return;
    //Вставка слэша
    if (input.length === 2 && !input.includes('/')) {
        setExpy(input + '/');
        return;
    }
    // Проверка на только один слэш
    if ((input.match(/\//g) || []).length > 1) 
        return;
    setExpy(input);     
    }
    
    //CVC
    const handleCVC = (e)=>{
    const input = e.target.value;
    
    // Разрешить только числа
    if (!/^\d*$/.test(input)) 
        return;
    
    // Максимальная длина - 3 символа
    if (input.length > 3) 
        return;  
    setCVC(input);
    }
    const handlePayment = async() =>{  //Обработка операций
      getPayment();
      setCart([]);
      clearBasket(basket.basketId);
      navigate('/basket')
    };
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center mt-3">
          <Card className="mt-5 d-flex flex-column align-items-center justify-content-around"
    style={{width:400, height:550, fontSize:32, border:'3px solid black'}}>
        <h1>Оплата</h1>
        <Col className="mt-2">
        <h3>Банк</h3>
            <div className="d-flex ">
              <select 
              value={bankValue} 
              onChange={handleBank} >
                {bank.banks.map(bank =>
                  <option key = {bank.bankId} value = {bank.bankId}>{bank.name}</option>
                )}
              </select>
            </div>      
            <h3>Номер карты</h3>
            <div className="d-flex flex-column align-items-center justify-content-center   ">
            <input
            type="text"
            value={num}
            onChange={handleCardNum}
            placeholder="1111 1111 1111 1111"
            />
            </div>
            <h3>Дата</h3>
            <div className="mt-3 d-flex flex-column align-items-center justify-content-center   ">
            <input
            type="text"
            value={expy}
            onChange={handleDate}
            placeholder="month/year"
            />
            </div>
            <h3>CVC код</h3>
            <div className="mt-3 d-flex flex-column align-items-center justify-content-center   ">
            <input
            type="text"
            value={cvc}
            onChange={handleCVC}
            maxLength={3}
            placeholder="000"
            />         
            </div>
        </Col>
        <Container className="d-flex justify-content-center align-items-center">
        <Button variant="outline-danger" className="me-4 mb-4" onClick={() => navigate('/basket')}>Отменить</Button>
        <Button variant="outline-success" className="ms-4 mb-4"onClick={() => handlePayment()}>Подтвердить</Button>
        </Container>
        </Card>
      </Row>
    </Container>
  );
})
export default PaymentPage;