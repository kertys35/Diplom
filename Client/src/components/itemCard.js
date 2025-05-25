import { observer } from "mobx-react-lite";
import React from "react";
import { Card,Col,Image} from "react-bootstrap";
import {useNavigate } from "react-router-dom"

const itemCard = observer(({item}) => {
    const navigate = useNavigate ();
  return (
    <Col md ={3} className ={"mt-3"} >
    <Card style={{width:200, cursor:'pointer'}} border={'light'} onClick={() => navigate('/item/' + item.itemId)}>
        <Image width={200} height ={200} src = {'http://localhost:5000/' + item.img}></Image>
        <div>{item.name}</div>
        <div >{item.price} Руб.</div>
    </Card>
    </Col>
  );
})

export default itemCard;