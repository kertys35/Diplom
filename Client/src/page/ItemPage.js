import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import {useParams} from "react-router-dom"
import { getOneItem } from "../http/itemAPI";
import { addItem } from "../http/basketAPI";

const ItemPage = observer(({cart, setCart}) => {
  const [item, setItem] = useState({description:[]});
  const [count, setCount] = useState(0);
  const {user} = useContext(Context);
  const {basket} = useContext(Context);
  const {id} = useParams();
  useEffect(() => {
    getOneItem(id).then(data => {setItem(data)})

  }, [])

  useEffect(() => {
      if(count)
        {
          addItem(basket.basketId, id).then(() => {setCount(0)})
        }
      
    }, [count]);

  function handleClick(){
    setCount(1);
    const itemExists = cart.find((product) => product.itemId === item.itemId); // Проверка на предмет в корзине

    if (itemExists) {
    setCart(                                          //Увеличение товара на один
        cart.map((product) => 
        product.itemId === item.itemId
            ? { ...product, quantity: product.quantity + 1 }
            : product 
        )
    );
    } else {  
    setCart([...cart, { ...item, quantity: 1 }]);   //Добавление товара в корзину
    }
    console.log(cart);
  }

 return (
<Container className="mt-3">
  <Row>

<Col md={4}>
    <Image width = {400} height = {400} src = {'http://localhost:5000/' + item.img}/>
  </Col>

  <Col md={4} className="d-flex flex-column justify-content-center align-items-center">
      <h1>{item.name}</h1>
  </Col>

  {user.isAuth ?
  <Col md={4}>
    <Card className="mt-5 d-flex flex-column align-items-center justify-content-around"
    style={{width:300, height:300, fontSize:32, border:'3px solid black'}}>
    <h3>{item.price} Руб.</h3>
    <Button variant={"outline-dark"} 
    onClick={() => handleClick()}
    >
      Добавить в корзину</Button>
    </Card>
  </Col>
  :
    <Col md={4}>
    <Card className="mt-5 d-flex flex-column align-items-center justify-content-around"
    style={{width:300, height:300, fontSize:32, border:'3px solid black'}}>
    <h3 className="ms-4">Войдите в аккаунт для покупки</h3>
    </Card>
  </Col>
  }

  </Row>
  <Row className="d-flex flex-column m-3">
    <h1>Описание товара</h1>
    <div style={{ fontSize:18}}>{item.description}</div>
  </Row>
</Container>
  );
})

export default ItemPage;