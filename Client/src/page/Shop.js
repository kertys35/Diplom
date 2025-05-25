import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemList from "../components/itemList.js";
import { observer } from "mobx-react-lite";
import { Context } from "../index.js";
import { getItems } from "../http/itemAPI.js";
import Pages from "../components/Pages.js";


const Shop = observer(({cart, setCart}) => {
  const {item} = useContext(Context)
  useEffect(() => {               //Получение товаров с сервера
    getItems(1, 3).then(data => {
      item.setItems(data.rows);
      item.setTotal(data.count);
    }, )
  }, [])

    useEffect(() => {               //Получение товаров на отдельной странице
    getItems(item.page, 3).then(data => {
      item.setItems(data.rows);
      item.setTotal(data.count);
    }, )
  }, [item, item.page])

  return (
<Container>
<Row className="mt-2">
  <Col md={10}>
    <ItemList/>
    <Pages/>
  </Col>
</Row>
</Container>
  );
})

export default Shop;