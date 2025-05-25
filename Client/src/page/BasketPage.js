import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "../index.js";
import { addItem, deleteItemInBasket, getBasket } from "../http/basketAPI.js";
import { getOneItem } from "../http/itemAPI.js";


const BasketPage = observer(({cart, setCart}) => {
  const [item, setItem] = useState(0);
  const {basket} = useContext(Context);
  const [finalCost, setCost] = useState(0);

  const navigate = useNavigate()

  useEffect(() => {
      getCost();
  }, [cart])

  function getCost(){     //Подсчет стоимости товаров
    var cost = 0;
    cart.map((product) => {
      cost += product.price * product.quantity
    })
    setCost(cost);
    return
  }

    function handleIncrease({item}){  //Добавление товаров 
      const itemExists = cart.find((product) => product.itemId === item.itemId); // Проверить корзину на наличие товара
      addItem(basket.basketId, itemExists.itemId);
      if (itemExists) {
      setCart(
          cart.map((product) => 
          product.itemId === item.itemId
              ? { ...product, quantity: product.quantity + 1 }
              : product 
          )
      );
      }
    }

    function handleDecrease({item}){  //Уменьшение товаров
    const selectedItem = cart.find((product) => product.itemId === item.itemId);//Проверка на наличие товара в корзине
    deleteItemInBasket(basket.basketId, selectedItem.itemId);
     
    if (selectedItem.quantity === 1) {
    setCart(cart.filter((product) => product.itemId !== item.itemId)); // if the quantity of the item is 1, remove the item from the cart
  } else {
    setCart(
      cart.map((product) =>
        product.itemId === item.itemId
          ? { ...product, quantity: product.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
          : product
      )
    );
  }

  }




  return (
    <Container>
      <h1 className="d-flex justify-content-center align-content-center">Вы находитесь в корзине</h1>
      {cart.map((item) => {
        return(
          <Row>
          <Col className="d-flex justify-content-center align-content-center">
          <Container  className="d-flex justify-content-center align-content-center mt-4">
          <Image width = {50} height = {50} src = {'http://localhost:5000/' + item.img}/>
          <h1 className="d-flex me-2">{item.name}</h1>
          <h1 className="d-flex me-2">{item.price} Руб.</h1>
          <Button onClick={() => handleDecrease({item})} variant="secondary" className="me-2" style={{width:'40px'}}>-</Button>
          <h1 className="d-flex me-2">x{item.quantity}</h1>
          <Button onClick={() => handleIncrease({item})} variant="secondary" className="ms-2" style={{width:'40px'}}>+</Button>
          </Container>
          </Col>
          </Row>
        )
      })}
      {cart.length > 0 ?
      <div className="d-flex justify-content-center align-content-center mt-4">
        <h2>Итоговая стоимость: {finalCost.toFixed(2)} Руб.</h2>
        <Button variant={"outline-dark ms-4"} 
            onClick={() => navigate('/payment')}
            >
              Оплатить</Button>
      </div>
      :
      <h2 className="d-flex justify-content-center align-content-center">Пока что здесь пусто</h2>
      }

    </Container>
  );
})

export default BasketPage;